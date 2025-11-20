export const data: Project[] = [
	{
		id: 'portfolio-website',
		name: 'Personal Portfolio & Blog Website',
		description:
			'Built with Next.js and TypeScript for a modern, responsive portfolio showcasing projects and technical expertise.',
		fullDescription:
			'A professional personal portfolio website built with Next.js and TypeScript. The site showcases projects with clean, minimal design and serves as an online professional profile. Deployed on Vercel with CSS Modules for scoped styling.',
		tech: ['Next.js', 'TypeScript', 'React', 'CSS Modules', 'Vercel'],
		github: 'https://github.com/Ibrahim-Rezq/portfolio',
		image: '/portfolio-website-ui.jpg',
		problem: 'Wanted to create a professional online presence to showcase projects and skills as a web developer.',
		solution:
			'Built a Next.js application with TypeScript for type safety, CSS Modules for maintainable styling, and deployed on Vercel for seamless hosting.',
		keyFeatures: [
			'Dynamic React app using Next.js',
			'TypeScript for enhanced code quality',
			'Responsive UI design with CSS Modules',
			'Optimized images and assets',
			'Seamless Vercel deployment'
		],
		challenges: [
			'Configuring Next.js routing and features',
			'Implementing TypeScript best practices',
			'Optimizing web performance'
		],
		liveDemo: 'https://game-dev-rose.vercel.app'
	},
	{
		id: 'quotes-api',
		name: 'Quotes API + Frontend Application',
		description:
			'Full-stack Next.js 14 application with TypeScript, Prisma ORM, NextAuth authentication, and Tailwind CSS styling.',
		fullDescription:
			'A complete full-stack application providing a comprehensive quotes management system. Built with Next.js 14, featuring user authentication via NextAuth with Prisma Adapter, Prisma ORM for database operations, email integration with Nodemailer, and a polished UI with Tailwind CSS and DaisyUI. Includes RESTful API endpoints for quote management.',
		tech: [
			'Next.js 14',
			'TypeScript',
			'Prisma ORM',
			'NextAuth.js',
			'Tailwind CSS',
			'DaisyUI',
			'Zod',
			'React Hook Form',
			'Nodemailer'
		],
		github: 'https://github.com/Ibrahim-Rezq/quotes_api',
		image: '/quotes-app-dashboard.jpg',
		problem:
			'Wanted to practice backend integration within a modern Next.js application, exploring database design, authentication, and API route handling.',
		solution:
			'Developed a full-stack solution with Next.js 14 API routes, Prisma ORM for database operations, NextAuth for secure authentication, and Tailwind CSS for responsive UI.',
		keyFeatures: [
			'User authentication with NextAuth',
			'Quote CRUD operations via API',
			'Prisma database schema and migrations',
			'RESTful API endpoints (/api/quotes)',
			'Email integration with Nodemailer',
			'Form validation with Zod and React Hook Form',
			'Responsive UI with Tailwind and DaisyUI'
		],
		challenges: [
			'Prisma schema design and migrations',
			'NextAuth integration with Prisma',
			'Secure environment variable management',
			'API endpoint organization in App Router'
		],
		liveDemo: 'https://quotes-api-five.vercel.app/',
		featured: true
	},
	{
		id: 'ecommerce-frontend',
		name: 'E-commerce Full Stack Application',
		description:
			'Complete e-commerce platform with React.js frontend and Django REST API backend. Includes product catalog, cart management, checkout flow, and admin dashboard.',
		fullDescription:
			'A production-ready full-stack e-commerce application developed as part of the Sprints Bootcamp Program. Features a React.js SPA frontend with Redux Toolkit state management and a Django REST API backend. Provides complete shopping experience with user authentication, product browsing, shopping cart, order management, and an admin dashboard for business operations.',
		tech: [
			'React.js',
			'Redux Toolkit',
			'React Router v6',
			'Django REST Framework',
			'Bootstrap',
			'Styled Components',
			'Axios',
			'SQLite',
			'TypeScript'
		],
		github: 'https://github.com/Ibrahim-Rezq/sprints-ecommerce-fullstack',
		image: '/ecommerce-shop-frontend.jpg',
		problem:
			'Needed to build a complete e-commerce platform demonstrating full-stack development with team collaboration, integrating frontend and backend systems.',
		solution:
			'Developed a scalable full-stack application with React frontend using Redux for state management, Django REST API backend for business logic, and SQLite database for data persistence.',
		keyFeatures: [
			'User registration and authentication',
			'Product catalog with search and filtering',
			'Shopping cart management',
			'Order creation and tracking',
			'Admin dashboard with sales analytics',
			'User profile management',
			'Responsive design with Bootstrap',
			'Protected routes for authenticated users'
		],
		challenges: [
			'Complex Redux state management',
			'Frontend-backend API coordination',
			'Cross-browser compatibility',
			'Responsive design implementation',
			'Team collaboration and code reviews'
		],
		liveDemo: 'https://github.com/Ibrahim-Rezq/sprints-ecommerce-fullstack',
		featured: true
	},
	{
		id: 'landing-page',
		name: 'Modern Landing Page',
		description:
			'Minimal agency landing page built with HTML5, CSS3, and semantic markup. Demonstrates modern CSS layout techniques including Flexbox and CSS Grid.',
		fullDescription:
			'A modern, pixel-perfect landing page recreating the Doom Minimal Agency Template from Graphberry. Built with vanilla HTML5 and CSS3 to practice responsive design, Flexbox, and CSS Grid layout systems. Features semantic markup, CSS custom properties for theming, and clean, maintainable code structure.',
		tech: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'CSS Custom Properties', 'Responsive Design'],
		github: 'https://github.com/Ibrahim-Rezq/modern-landing-layout',
		image: '/landing-page-design.jpg',
		problem:
			'Wanted to practice building pixel-perfect layouts from design templates using modern CSS layout techniques.',
		solution:
			'Built a semantic HTML structure with CSS Grid and Flexbox for complex layouts, CSS custom properties for maintainable theming, and a fully responsive mobile-first design.',
		keyFeatures: [
			'Pixel-perfect layout implementation',
			'CSS Grid and Flexbox mastery',
			'Semantic HTML5 markup',
			'CSS custom properties for theming',
			'Responsive design for multiple screen sizes',
			'Clean and maintainable code organization'
		],
		challenges: [
			'Translating design mockups to code',
			'Implementing responsive breakpoints',
			'CSS Grid and Flexbox optimization',
			'Cross-browser CSS compatibility'
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
