import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { projectsData } from '@/lib/data'
import ProjectCard from '@/components/projectCard'
import { ExternalLink } from 'lucide-react'
export const metadata = {
    title: 'Projects - Ibrahim Rezq',
    description:
        'Explore my portfolio of projects showcasing React, Next.js, and full-stack development work.',
}

export default function ProjectsPage() {
    return (
        <div className='bg-background text-foreground min-h-screen flex flex-col'>
            <Navigation />

            <main className='grow'>
                {/* Page Header */}
                <section className='py-16 px-6 bg-card border-b border-border'>
                    <div className='max-w-6xl mx-auto'>
                        <h1 className='text-5xl font-bold mb-4'>
                            Featured Projects
                        </h1>
                        <p className='text-lg text-muted-foreground max-w-2xl'>
                            A collection of projects demonstrating my expertise
                            in frontend development, full-stack engineering, and
                            building production-ready applications with modern
                            technologies.
                        </p>
                    </div>
                </section>

                {/* Projects Grid */}
                <section className='py-20 px-6'>
                    <div className='max-w-6xl mx-auto'>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                            {projectsData.map((project) => (
                                // <article
                                //     key={project.id}
                                //     className='group border border-border rounded-lg overflow-hidden bg-card hover:border-primary transition-all duration-300 hover:shadow-lg'
                                // >
                                //     {/* Project Image */}
                                //     <div className='relative h-56 w-full overflow-hidden bg-muted'>
                                //         <Image
                                //             src={
                                //                 project.image ||
                                //                 '/placeholder.svg?height=224&width=400&query=project thumbnail'
                                //             }
                                //             alt={project.name}
                                //             fill
                                //             className='object-cover group-hover:scale-105 transition-transform duration-300'
                                //         />
                                //     </div>

                                //     {/* Project Content */}
                                //     <div className='p-6 flex flex-col h-full'>
                                //         <Link
                                //             href={`/projects/${project.id}`}
                                //             className='group/link'
                                //         >
                                //             <h2 className='text-2xl font-semibold mb-3 group-hover/link:text-primary transition-colors line-clamp-2'>
                                //                 {project.name}
                                //             </h2>
                                //         </Link>

                                //         <p className='text-muted-foreground text-sm leading-relaxed mb-4 flex-grow'>
                                //             {project.description}
                                //         </p>

                                //         {/* Tech Stack */}
                                //         <div className='mb-6 flex flex-wrap gap-2'>
                                //             {project.tech
                                //                 .slice(0, 3)
                                //                 .map((tech) => (
                                //                     <span
                                //                         key={tech}
                                //                         className='text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium'
                                //                     >
                                //                         {tech}
                                //                     </span>
                                //                 ))}
                                //             {project.tech.length > 3 && (
                                //                 <span className='text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full font-medium'>
                                //                     +{project.tech.length - 3}
                                //                 </span>
                                //             )}
                                //         </div>

                                //         {/* Action Links */}
                                //         <div className='flex items-center gap-4 pt-4 border-t border-border'>
                                //             <Link
                                //                 href={`/projects/${project.id}`}
                                //                 className='flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all'
                                //             >
                                //                 View Details
                                //                 <ArrowRight size={16} />
                                //             </Link>
                                //             <a
                                //                 href={project.github}
                                //                 target='_blank'
                                //                 rel='noopener noreferrer'
                                //                 className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
                                //                 aria-label={`View ${project.name} on GitHub`}
                                //             >
                                //                 <Github size={16} />
                                //             </a>
                                //         </div>
                                //     </div>
                                // </article>
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className='py-16 px-6 bg-card border-t border-border'>
                    <div className='max-w-6xl mx-auto text-center'>
                        <h2 className='text-3xl font-bold mb-4'>
                            Ready to work together?
                        </h2>
                        <p className='text-lg text-muted-foreground mb-8 max-w-2xl mx-auto'>
                            Let&apos;s create something amazing. Reach out to
                            discuss your project or collaboration opportunities.
                        </p>
                        <a
                            href='mailto:ebrahimamin391@gmail.com'
                            className='inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition'
                        >
                            Get in touch
                            <ExternalLink size={18} />
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}
