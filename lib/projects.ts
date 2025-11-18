export const data: Project[] = [
	{
		id: 'portfolio-website',
		name: 'Personal Portfolio & Blog Website',
		description:
			'Built with TypeScript, Next.js and Contentful CMS. Minimal, clean UI with an integrated blog system.',
		fullDescription:
			'A professional personal portfolio website featuring a integrated blog system powered by Contentful CMS. The site showcases projects with detailed case studies, optimized for both performance and SEO with server-side rendering and static generation.',
		tech: ['Next.js', 'TypeScript', 'Contentful', 'Tailwind CSS', 'Vercel'],
		github: 'https://github.com/Ibrahim-Rezq/portfolio',
		image: '/portfolio-website-ui.jpg',
		problem:
			'Needed a flexible, scalable platform to showcase projects and share technical insights through a blog.',
		solution:
			'Built a headless CMS-powered portfolio using Next.js with Contentful for easy content management and Vercel for seamless deployment.',
		keyFeatures: [
			'Blog system with tags and categories',
			'Project case studies',
			'SEO optimized',
			'Dark mode support',
			'Responsive design'
		],
		challenges: [
			'Optimizing Contentful API calls',
			'Building effective pagination',
			'Maintaining consistent branding'
		],
		liveDemo: 'https://ibrahim-rezq.vercel.app/'
	},
	{
		id: 'quotes-api',
		name: 'Quotes API + Frontend Application',
		description:
			'Full-stack project featuring both API and UI. Integrated user authentication and database management.',
		fullDescription:
			'A complete full-stack application providing a comprehensive quotes management system. Features include user authentication, CRUD operations, database relationships, and a polished frontend UI built with React and TypeScript.',
		tech: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth', 'PostgreSQL'],
		github: 'https://github.com/Ibrahim-Rezq/quotes-api',
		image: '/quotes-app-dashboard.jpg',
		problem:
			'Wanted to build a full-stack application demonstrating both backend API development and frontend integration with authentication.',
		solution:
			'Developed a full-stack solution with Next.js API routes, Prisma ORM for database operations, and NextAuth for secure user authentication.',
		keyFeatures: [
			'User authentication',
			'Quote CRUD operations',
			'Database relationships',
			'TypeScript throughout',
			'RESTful API'
		],
		challenges: ['Implementing secure authentication', 'Database schema design', 'API route organization'],
		liveDemo: 'https://quotes-api-five.vercel.app/',
		featured: true
	},
	{
		id: 'ecommerce-frontend',
		name: 'E-commerce Front-end Collaboration',
		description:
			"Front-end implementation of an e-commerce app integrated with a teammate's backend. Full responsive design.",
		fullDescription:
			'A production-ready e-commerce frontend built in collaboration with a backend developer. The application features product browsing, shopping cart management, checkout flow, and payment integration with a REST API backend.',
		tech: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS', 'Redux'],
		github: 'https://github.com/Ibrahim-Rezq/sprints-ecommerce-fullstack',
		image: '/ecommerce-shop-frontend.jpg',
		problem:
			'Needed to build a responsive, production-ready e-commerce UI that integrates seamlessly with an existing backend API.',
		solution:
			'Created a scalable React frontend with Redux for state management, TypeScript for type safety, and Tailwind CSS for responsive design.',
		keyFeatures: [
			'Product catalog with filtering',
			'Shopping cart functionality',
			'User authentication',
			'Responsive design',
			'Payment integration'
		],
		challenges: ['Complex state management', 'API integration coordination', 'Cross-browser compatibility'],
		featured: true
	},
	{
		id: 'landing-page',
		name: 'Modern Landing Page',
		description:
			'Minimal agency landing page emphasizing clean UI and user experience. Built with vanilla technologies.',
		fullDescription:
			'A modern, visually striking landing page for a digital agency. Built with vanilla HTML, CSS, and JavaScript to demonstrate fundamental web development skills and design implementation without frameworks.',
		tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
		github: 'https://github.com/Ibrahim-Rezq/modern-landing-layout',
		image: '/landing-page-design.jpg',
		problem:
			'Wanted to create an impressive landing page using vanilla web technologies while maintaining clean, maintainable code.',
		solution:
			'Built a semantic HTML structure with custom CSS animations, vanilla JavaScript interactions, and a fully responsive mobile-first design.',
		keyFeatures: [
			'Custom CSS animations',
			'Vanilla JavaScript interactions',
			'Mobile-first responsive design',
			'Semantic HTML',
			'Performance optimized'
		],
		challenges: [
			'Cross-browser CSS compatibility',
			'Animation performance',
			'Mobile responsiveness without frameworks'
		],
		liveDemo: 'https://ibrahim-rezq.github.io/modern-landing-layout/'
	}
]

export function getProjectById(id: string): Project | undefined {
	return data.find((project) => project.id === id)
}

export function getAllProjects(): Project[] {
	return data
}
export function getFeaturedProjects(): Project[] {
	return data.filter((project) => project.featured)
}

export function getRelatedProjects(currentProjectId: string): Project[] {
	return data.filter((project) => project.id !== currentProjectId).slice(0, 3)
}
