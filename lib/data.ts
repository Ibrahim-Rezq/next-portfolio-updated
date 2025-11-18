import { Code2, Zap, Database, Wrench, Layers } from 'lucide-react'

export const skillCategories = [
	{
		category: 'Languages',
		icon: Code2,
		skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3']
	},
	{
		category: 'Frameworks & Libraries',
		icon: Layers,
		skills: ['React', 'Next.js', 'jQuery', 'Tailwind CSS']
	},
	{
		category: 'State & Data',
		icon: Database,
		skills: ['Context API', 'Redux', 'Supabase', 'Prisma']
	},
	{
		category: 'Backend & APIs',
		icon: Zap,
		skills: ['Strapi', 'Django (integration)', 'REST APIs']
	},
	{
		category: 'Tools & Platforms',
		icon: Wrench,
		skills: ['Git', 'Vercel', 'GitHub']
	}
]

export const certifications = [
	{
		title: 'React Development Cross-Skilling',
		issuer: 'EGFWD | Udacity',
		link: 'https://www.udacity.com/certificate/PMERELDP',
		icon: '🎓'
	},
	{
		title: 'Advanced Full-Stack Web Development',
		issuer: 'EGFWD | Udacity',
		link: 'https://www.udacity.com/certificate/HSTAJZGN',
		icon: '🏆'
	},
	{
		title: 'Front End Web Development Professional',
		issuer: 'EGFWD | Udacity',
		link: 'https://www.udacity.com/certificate/VYQX7CPL',
		icon: '⭐'
	}
]

export const experience = [
	{
		title: 'Full-Stack Developer',
		company: 'AFDV Marketing',
		period: '02/2023 – 06/2023',
		tasks: [
			'Completed and refined a React-based event calendar for production readiness.',
			'Developed a Next.js frontend integrated with a Django backend for an e-commerce platform.',
			'Built an internal CMS to streamline content workflows.',
			'Collaborated with Python backend developers and led frontend architecture.'
		]
	},
	{
		title: 'Frontend Developer',
		company: 'AFDV (via Upwork)',
		period: '01/2023 – 01/2023',
		tasks: [
			'Converted Figma template into responsive HTML, CSS, JS and jQuery.',
			'Integrated frontend UI with Django backend for event scheduling.',
			'Improved client-side data refresh and UI performance.'
		]
	},
	{
		title: 'JavaScript Developer',
		company: 'Upwork',
		period: '07/2022 – 08/2022',
		tasks: [
			'Implemented user-tracking library in Next.js + Strapi + Supabase.',
			'Integrated tracking endpoints with backend APIs.',
			'Delivered foundational analytics for user behavior insights.'
		]
	}
]
