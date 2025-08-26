export type TopicNode = {
	topic: { name: string }
}

export type RepositoryNode = {
	name: string
	url: string
	description: string | null
	primaryLanguage: { name: string } | null
	openGraphImageUrl: string
	repositoryTopics: {
		nodes: TopicNode[]
	}
}

export type Repository = {
	id: number
	name: string
	url: string
	description: string | null
	language: string | null
	image: string
	topics: string[]
}

type SearchEdge = {
	node: RepositoryNode
}

type GitHubSearchResponse = {
	data: {
		search: {
			edges: SearchEdge[]
		}
	}
}

export const user_repos_query = (user: string, topic?: string) => `
  query {
    search(query: "user:${user} ${topic ? `topic:${topic}` : ''}", type: REPOSITORY, first: 20) {
      edges {
        node {
          ... on Repository {
            name
            url
            description
            primaryLanguage { name }
            openGraphImageUrl
            repositoryTopics(first: 10) {
              nodes {
                topic { name }
              }
            }
          }
        }
      }
    }
  }
`

export const fetchUserRepos = async (
	user: string,
	topic?: string
): Promise<Repository[]> => {
	const res = await $fetch<GitHubSearchResponse>(
		'https://api.github.com/graphql',
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
			},
			body: { query: user_repos_query(user, topic) }
		}
	)

	let i = 1
	return res.data.search.edges.map(({ node }) => ({
		id: i++,
		name: node.name
			.replace(/[-_]/g, ' ')
			.replace(/\b\w/g, c => c.toUpperCase()),
		url: node.url,
		language: node.primaryLanguage?.name ?? null,
		description: node.description,
		image: node.openGraphImageUrl,
		topics: node.repositoryTopics.nodes.map(t => t.topic.name)
	}))
}
