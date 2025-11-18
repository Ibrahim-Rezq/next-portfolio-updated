export const links = {
	pages: {
		home: '/',
		projects: '/projects',
		project: (id: string) => `/projects/${id}`
	},
	navigationLinks: [
		{ href: '/#projects', label: 'Projects' },
		{ href: '/#experience', label: 'Experience' },
		{ href: '/#skills', label: 'Skills' },
		{ href: '/#contact', label: 'Contact' }
	],
	navigation: {
		about: '/#about',
		experience: '/#experience',
		skills: '/#skills',
		contact: '/#contact',
		projects: '/#projects'
	},
	socials: {
		github: 'https://github.com/Ibrahim-Rezq',
		email: 'mailto:ebrahimamin391@gmail.com',
		linkedin: 'https://www.linkedin.com/in/ibrahim-amin391/',
		whatsapp: 'https://wa.me/+201287877420',
		blog: '' //'https://blog.ibrahimrezq.com',
	}
}
