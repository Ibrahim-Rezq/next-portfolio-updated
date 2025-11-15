import Link from 'next/link'
import { projectsData } from '@/lib/data'
import ProjectCard from './projectCard'
import { ExternalLink } from 'lucide-react'

export function Projects() {
    const featuredProjects = projectsData.filter((project) => {
        return project.featured === true
    })
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
                    {featuredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* View All Projects Link */}
                <div className='mt-12 text-center'>
                    <Link
                        href='/projects'
                        className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition'
                    >
                        View All Projects
                        <ExternalLink size={18} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
