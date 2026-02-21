import {
	PhCompass,
	PhCursor,
	PhLinkedinLogo,
	PhPhoneCall,
	PhEnvelope,
	PhGithubLogo
} from '@phosphor-icons/vue'

const name = 'Diogo Nogueira'

export const age = Math.floor(
	(Date.now() - new Date('2003-01-19').getTime()) /
		(1000 * 60 * 60 * 24 * 365.25)
)

const about = {
	en: 'Computer Engineering Student and Self-taught Front-end Developer',
	pt: 'Estudante de Engenharia Informática e Desenvolvedor Front-end Autodidata'
}

const info = [
	{
		text: 'diogoclanogueira@gmail.com',
		Icon: PhEnvelope
	},
	{
		text: '(+351) 916 977 715',
		Icon: PhPhoneCall
	},
	{
		text: 'Porto, Portugal',
		Icon: PhCompass
	},
	{
		text: 'linkedin/diogoclanogueira',
		Icon: PhLinkedinLogo,
		href: 'https://linkedin.com/in/diogoclanogueira'
	},
	{
		text: 'github/isneru',
		Icon: PhGithubLogo,
		href: 'https://github.com/isneru'
	},
	{
		text: 'website',
		Icon: PhCursor,
		href: 'https://diogo.wtf'
	}
]

const career = {
	en: [
		{
			organization: 'CeX - Computer Entertainment Exchange',
			location: 'Águas Santas, Portugal',
			field: 'Electronics Retail',
			start: '06/2023',
			end: '06/2025'
		}
	],
	pt: [
		{
			organization: 'CeX - Computer Entertainment Exchange',
			location: 'Águas Santas, Portugal',
			field: 'Retalho Eletrónico',
			start: '06/2023',
			end: '06/2025'
		}
	]
}

const education = {
	en: [
		{
			organization: 'Instituto Superior de Engenharia do Porto',
			location: 'Porto, Portugal',
			field: 'Telecommunications Engineering and IT',
			start: '09/2024',
			end: 'Present'
		},
		{
			organization: 'Escola Superior de Tecnologia e Gestão',
			location: 'Porto, Portugal',
			field: 'Computer Security and Computer Networks',
			start: '10/2022',
			end: '06/2024'
		},
		{
			organization: 'Instituto Profissional de Tecnologias Avançadas',
			location: 'Porto, Portugal',
			field: 'Hardware and Software Management',
			start: '09/2018',
			end: '07/2021'
		}
	],
	pt: [
		{
			organization: 'Instituto Superior de Engenharia do Porto',
			location: 'Porto, Portugal',
			field: 'Engenharia de Telecomunicações e Informática',
			start: '09/2024',
			end: 'Presente'
		},
		{
			organization: 'Escola Superior de Tecnologia e Gestão',
			location: 'Porto, Portugal',
			field: 'Segurança Informática e Redes de Computadores',
			start: '10/2022',
			end: '06/2024'
		},
		{
			organization: 'Instituto Profissional de Tecnologias Avançadas',
			location: 'Porto, Portugal',
			field: 'Gestão de Equipamentos Informáticos',
			start: '09/2018',
			end: '07/2021'
		}
	]
}

const internships = {
	en: [
		{
			organization: 'Computer Repair and Service',
			location: 'Rethymno, Greece',
			field: 'IT Support and Hardware Maintenance',
			start: '01/2022',
			end: '05/2022',
			tasks: [
				"Assistance in computers' formats and operational systems upgrades",
				'Computers installation and set up in a school environment',
				'Wi-Fi network installations',
				'Camera services and repairs',
				'Computer services and repairs',
				'General assistance to my supervisor',
				'Acquisition of knowledge in the field of IT and electronics'
			]
		},
		{
			organization: 'ITSector',
			location: 'Porto, Portugal',
			field: 'IT Infrastructure and Support',
			start: '04/2021',
			end: '07/2021',
			tasks: [
				'Linked computers to certain networks and peripheral equipment, including printers and scanners',
				'Patched software and installed new versions to eliminate security vulnerabilities and protect data',
				'Helped streamline repair processes and update procedures for support action consistency',
				'Configured hardware, devices and software to set up workstations for employees'
			]
		}
	],
	pt: [
		{
			organization: 'Reparação e assistência de computadores',
			location: 'Rethymno, Grécia',
			field: 'Suporte de TI e Manutenção de Hardware',
			start: '01/2022',
			end: '05/2022',
			tasks: [
				'Assistência em formatações de computadores e atualizações de sistemas operativos',
				'Instalação e configuração de computadores em ambiente escolar',
				'Instalações de redes Wi-Fi',
				'Serviços e reparações de câmaras',
				'Serviços e reparações de computadores',
				'Assistência geral ao meu supervisor',
				'Aquisição de conhecimentos na área das TI e eletrónica'
			]
		},
		{
			organization: 'ITSector',
			location: 'Porto, Portugal',
			field: 'Infraestrutura de TI e Suporte',
			start: '04/2021',
			end: '07/2021',
			tasks: [
				'Vinculação de computadores a determinadas redes e equipamentos periféricos, incluindo impressoras e scanners',
				'Correção de software e instalação de novas versões para eliminar vulnerabilidades de segurança e proteger dados',
				'Ajudou a simplificar processos de reparação e atualizar procedimentos para consistência de ação de suporte',
				'Configuração de hardware, dispositivos e software para configurar estações de trabalho para os funcionários'
			]
		}
	]
}

const skills = {
	frontend: [
		'HTML',
		'CSS',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'SvelteKit',
		'Astro',
		'TailwindCSS'
	],
	backend: ['Node.js', 'Express.js', 'C', 'C++', 'PHP', 'Java'],
	databases: ['MongoDB', 'SQL', 'Prisma'],
	tools: ['Git', 'GitHub', 'VSCode', 'Figma']
}

const langs = {
	en: [
		{
			title: 'Portuguese',
			level: 'Native'
		},
		{
			title: 'English',
			level: 'C1'
		}
	],
	pt: [
		{
			title: 'Português',
			level: 'Nativo'
		},
		{
			title: 'Inglês',
			level: 'C1'
		}
	]
}

const certificates = ['The Web Developer Bootcamp 2022']

const achievements = {
	en: [
		{
			title: 'Acquired drivers license',
			date: '01/2023'
		}
	],
	pt: [
		{
			title: 'Carta de condução adquirida',
			date: '01/2023'
		}
	]
}

const hobbies = {
	en: ['Driving', 'Gaming', 'Coffee', 'Running'],
	pt: ['Condução', 'Jogos', 'Café', 'Corrida']
}

const sections = {
	en: [
		'Career',
		'Education',
		'Internships',
		'Skills',
		'Languages',
		'Certificates',
		'Achievements'
	],
	pt: [
		'Carreira',
		'Educação',
		'Estágios',
		'Skills',
		'Línguas',
		'Certificados',
		'Conquistas'
	]
}

export const me = (lang: 'pt' | 'en') => ({
	about: about[lang],
	career: career[lang],
	education: education[lang],
	internships: internships[lang],
	hobbies: hobbies[lang],
	achievements: achievements[lang],
	langs: langs[lang],
	info,
	name,
	age,
	skills,
	certificates,
	sections: sections[lang]
})
