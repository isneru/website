export type Project = {
	id: number
	name: string
	desc: string | null
	langs: string[]
	url: string
}

let i = 1

export const projects: Project[] = [
	{
		id: i++,
		name: 'BDAMD TP2 25/26',
		desc: 'Data Warehouses project for college. Final grade: 19.1/20',
		langs: ['sql'],
		url: 'https://github.com/isneru/BDAMD_TP2_25_26'
	},
	{
		id: i++,
		name: 'C HTML Templater',
		desc: 'A simple HTTP web server written in C with basic HTML templating support.',
		langs: ['c'],
		url: 'https://github.com/isneru/c-html-templater'
	},
	{
		id: i++,
		name: 'newtab',
		desc: "Simple HTML page for 'New Tab Override' extension on browsers",
		langs: ['nextjs', 'typescript'],
		url: 'https://github.com/isneru/newtab'
	},
	{
		id: i++,
		name: 'test-agenda',
		desc: 'A tests order management project. Made for internal use at Webuy. No longer in use.',
		langs: ['nextjs', 'typescript'],
		url: 'https://github.com/isneru/test-agenda'
	}
]
