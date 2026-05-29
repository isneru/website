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
const DOMAIN = 'https://neru.sh'

const routesSEO: Record<string, SeoMeta> = {
	'/': {
		title: mkTitle(),
		ogTitle: mkTitle(),
		twitterTitle: mkTitle(),
		description: 'building things i need.',
		ogDescription: 'building things i need.',
		twitterDescription: 'building things i need.',
		ogUrl: DOMAIN,
		ogType: 'website',
		ogImage: `${DOMAIN}/og/index.png`,
		twitterImage: `${DOMAIN}/og/index.png`,
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, home, portfolio, curriculum, developer'
	},
	'/stack': {
		title: mkTitle('stack'),
		ogTitle: mkTitle('stack'),
		twitterTitle: mkTitle('stack'),
		description: 'what runs the machine.',
		ogDescription: 'what runs the machine.',
		twitterDescription: 'what runs the machine.',
		ogUrl: `${DOMAIN}/stack`,
		ogType: 'website',
		ogImage: `${DOMAIN}/og/stack.png`,
		twitterImage: `${DOMAIN}/og/stack.png`,
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, home, portfolio, curriculum, developer'
	},
	'/cv/pt': {
		title: mkTitle('cv (pt)'),
		ogTitle: mkTitle('cv (pt)'),
		twitterTitle: mkTitle('cv (pt)'),
		description: 'o que já fiz.',
		ogDescription: 'o que já fiz.',
		twitterDescription: 'o que já fiz.',
		ogUrl: `${DOMAIN}/cv/pt`,
		ogType: 'website',
		ogImage: `${DOMAIN}/og/cv-pt.png`,
		twitterImage: `${DOMAIN}/og/cv-pt.png`,
		ogLocale: 'pt_PT',
		keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, desenvolvedor'
	},
	'/cv/en': {
		title: mkTitle('cv (en)'),
		ogTitle: mkTitle('cv (en)'),
		twitterTitle: mkTitle('cv (en)'),
		description: `what i've done.`,
		ogDescription: `what i've done.`,
		twitterDescription: `what i've done.`,
		ogUrl: `${DOMAIN}/cv/en`,
		ogType: 'website',
		ogImage: `${DOMAIN}/og/cv-en.png`,
		twitterImage: `${DOMAIN}/og/cv-en.png`,
		ogLocale: 'en_US',
		keywords: 'diogo, nogueira, dev, neru, portfolio, curriculo, developer'
	},
	'/guestbook': {
		title: mkTitle('guestbook'),
		ogTitle: mkTitle('guestbook'),
		twitterTitle: mkTitle('guestbook'),
		description: 'signed by visitors.',
		ogDescription: 'signed by visitors.',
		twitterDescription: 'signed by visitors.',
		ogUrl: `${DOMAIN}/guestbook`,
		ogType: 'website',
		ogImage: `${DOMAIN}/og/guestbook.png`,
		twitterImage: `${DOMAIN}/og/guestbook.png`,
		ogLocale: 'en_US',
		keywords:
			'diogo, nogueira, dev, neru, portfolio, curriculo, developer, guestbook'
	}
}

export const getSeoMeta = (): any => {
	return routesSEO[useRoute().path] ?? routesSEO['/']
}
