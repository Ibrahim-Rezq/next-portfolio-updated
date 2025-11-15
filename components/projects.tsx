import { Github, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const projects = [
    {
        name: 'Personal Portfolio & Blog Website',
        description:
            'Built with TypeScript, Next.js and Contentful CMS. Minimal, clean UI with an integrated blog system.',
        tech: ['Next.js', 'TypeScript', 'Contentful', 'Tailwind CSS'],
        github: 'https://github.com/Ibrahim-Rezq/portfolio',
        image: '/portfolio-website-ui.jpg',
    },
    {
        name: 'Quotes API + Frontend Application',
        description:
            'Full-stack project featuring both API and UI. Integrated user authentication and database management.',
        tech: ['Next.js', 'TypeScript', 'Prisma', 'NextAuth'],
        github: 'https://github.com/Ibrahim-Rezq/quotes-api',
        image: '/quotes-app-dashboard.jpg',
    },
    {
        name: 'E-commerce Front-end Collaboration',
        description:
            "Front-end implementation of an e-commerce app integrated with a teammate's backend. Full responsive design.",
        tech: ['React', 'TypeScript', 'REST APIs', 'Tailwind CSS'],
        github: 'https://github.com/Ibrahim-Rezq/sprints-ecommerce-fullstack',
    },
    {
        name: 'Modern Landing Page',
        description:
            'Minimal agency landing page emphasizing clean UI and user experience. Built with vanilla technologies.',
        tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
        github: 'https://github.com/Ibrahim-Rezq/modern-landing-layout',
        image: '/landing-page-design.jpg',
    },
]

export function Projects() {
    return (
        <section id='projects' className='py-20 px-6 bg-card'>
            <div className='max-w-6xl mx-auto'>
                <div className='mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>
                        Featured Projects
                    </h2>
                    <p className='text-lg text-muted-foreground'>
                        A selection of projects showcasing my approach to
                        problem-solving and technical expertise.
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='flex flex-col group border border-border rounded-lg overflow-hidden hover:border-primary transition-colors bg-background hover:shadow-lg'
                        >
                            {/* Project Image */}
                            {project.image && (
                                <div className='relative h-48 w-full overflow-hidden bg-muted'>
                                    <Image
                                        src={
                                            project.image || '/placeholder.svg'
                                        }
                                        alt={project.name}
                                        fill
                                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                                    />
                                </div>
                            )}
                            {/* Project Content */}
                            <div className='p-6 mt-auto'>
                                <h3 className='text-xl font-semibold mb-3 group-hover:text-primary transition-colors'>
                                    {project.name}
                                </h3>
                                <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                                    {project.description}
                                </p>

                                <div className='mb-6 flex flex-wrap gap-2'>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className='text-xs bg-primary/10 text-primary px-3 py-1 rounded-full'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all'
                                >
                                    <Github size={16} />
                                    View on GitHub
                                    <ExternalLink size={14} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
