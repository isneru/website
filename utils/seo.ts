import { useRoute } from 'vue-router'

type SeoMeta = {
	title: string
	ogTitle: string
	twitterTitle: string
	description: string
	ogDescription: string
	twitterDescription: string
	ogUrl: string
	ogType: string
	ogImage: string
	twitterImage: string
	ogLocale: string
	keywords: string
}

const mkTitle = (path?: string) => (!!path ? `neru: ${path}` : 'neru')

const routesSEO: Record<string, SeoMeta> = {
	'/': {
		title: mkTitle(),
		ogTitle: mkTitle(),
		twitterTitle: mkTitle(),
		description: 'Developer and Telecommunications Engineering student.',
		ogDescription: 'Developer and Telecommunications Engineering student.',
		twitterDescription: 'Developer and Telecommunications Engineering student.',
		ogUrl: 'https://neru.sh',
		ogType: 'website',
		ogImage: 'https://neru.sh/og/index.png',
		twitterImage: 'https://neru.sh/og/index.png',
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, home, portfolio, curriculum, developer'
	},
	'/stack': {
		title: mkTitle('stack'),
		ogTitle: mkTitle('stack'),
		twitterTitle: mkTitle('stack'),
		description: 'Knowledge corner.',
		ogDescription: 'Knowledge corner.',
		twitterDescription: 'Knowledge corner.',
		ogUrl: 'https://neru.sh/stack',
		ogType: 'website',
		ogImage: 'https://neru.sh/og/index.png',
		twitterImage: 'https://neru.sh/og/index.png',
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, home, portfolio, curriculum, developer'
	},
	'/cv/pt': {
		title: mkTitle('cv (pt)'),
		ogTitle: mkTitle('cv (pt)'),
		twitterTitle: mkTitle('cv (pt)'),
		description: 'All the good bits.',
		ogDescription: 'All the good bits.',
		twitterDescription: 'All the good bits.',
		ogUrl: 'https://neru.sh/cv/pt',
		ogType: 'website',
		ogImage: 'https://neru.sh/og/cv-pt.png',
		twitterImage: 'https://neru.sh/og/cv-pt.png',
		ogLocale: 'pt_PT',
		keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, desenvolvedor'
	},
	'/cv/en': {
		title: mkTitle('cv (en)'),
		ogTitle: mkTitle('cv (en)'),
		twitterTitle: mkTitle('cv (en)'),
		description: 'All the good bits.',
		ogDescription: 'All the good bits.',
		twitterDescription: 'All the good bits.',
		ogUrl: 'https://neru.sh/cv/en',
		ogType: 'website',
		ogImage: 'https://neru.sh/og/cv-en.png',
		twitterImage: 'https://neru.sh/og/cv-en.png',
		ogLocale: 'en_US',
		keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, developer'
	},
	'/guestbook': {
		title: mkTitle('guestbook'),
		ogTitle: mkTitle('guestbook'),
		twitterTitle: mkTitle('guestbook'),
		description: 'All messages written are here.',
		ogDescription: 'All messages written are here.',
		twitterDescription: 'All messages written are here.',
		ogUrl: 'https://neru.sh/guestbook',
		ogType: 'website',
		ogImage: 'https://neru.sh/og/guestbook.png',
		twitterImage: 'https://neru.sh/og/guestbook.png',
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, portfolio, curriculo, developer, guestbook'
	}
}

export const getSeoMeta = (): any => {
	return routesSEO[useRoute().path] ?? routesSEO['/']
}
