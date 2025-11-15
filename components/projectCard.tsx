import Image from 'next/image'
import Link from 'next/link'
import { LiaGithub } from 'react-icons/lia'
import { ArrowRight, BadgeCheckIcon, ExternalLink } from 'lucide-react'
import { Badge } from './ui/badge'
import { Project } from '@/lib/data'

function ProjectCard({ project }: { project: Project }) {
    const { id, image, name, github, liveDemo, description, tech, featured } =
        project

    return (
        <article
            key={id}
            className='relative group border border-border rounded-lg overflow-hidden bg-card hover:border-primary transition-all duration-300 hover:shadow-lg'
        >
            {featured && (
                <Badge
                    variant='secondary'
                    className='absolute right-4 top-4 z-10'
                >
                    <BadgeCheckIcon />
                    Freatured
                </Badge>
            )}
            {
                <div className='relative h-48 w-full overflow-hidden bg-muted'>
                    <Image
                        src={image || '/placeholder.svg'}
                        alt={name}
                        fill
                        className='object-cover group-hover:scale-105 transition-transform duration-300'
                    />
                </div>
            }

            <div className='p-6'>
                <Link href={`/projects/${project.id}`} className='group/link'>
                    <h2 className='text-2xl font-semibold mb-3 group-hover/link:text-primary transition-colors line-clamp-2'>
                        {name}
                    </h2>
                </Link>
                <p className='text-muted-foreground text-sm leading-relaxed mb-4'>
                    {description}
                </p>

                <div className='mb-6 flex flex-wrap gap-2'>
                    {tech.slice(0, 3).map((tech, i) => (
                        <span
                            key={i}
                            className='text-xs bg-primary/10 text-primary px-3 py-1 rounded-full'
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className='flex items-center gap-4 pt-4 border-t border-border'>
                    <Link
                        href={`/projects/${id}`}
                        className='inline-flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all font-medium'
                    >
                        View Details
                        <ArrowRight size={16} />
                    </Link>
                    <a
                        href={github}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
                    >
                        <LiaGithub size={16} />
                    </a>
                    {liveDemo && (
                        <a
                            href={liveDemo}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'
                        >
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
