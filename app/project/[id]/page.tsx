import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Code2, Zap, AlertCircle, ExternalLink } from 'lucide-react'
import { LiaGithub } from 'react-icons/lia'
import { getProjectById, getAllProjects } from '@/lib/consts'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const project = getProjectById(id)

    if (!project) {
        return {
            title: 'Project Not Found',
        }
    }

    return {
        title: `${project.name} - Ibrahim Rezq`,
        description: project.description,
    }
}

export function generateStaticParams() {
    return getAllProjects().map((project) => ({
        id: project.id,
    }))
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params
    const project = getProjectById(id)

    if (!project) {
        notFound()
    }

    // Get related projects (exclude current)
    const relatedProjects = getAllProjects()
        .filter((p) => p.id !== project.id)
        .slice(0, 3)

    return (
        <div className='bg-background text-foreground min-h-screen flex flex-col'>
            <Navigation />

            <main className='grow'>
                {/* Back Link */}
                <div className='bg-card border-b border-border'>
                    <div className='max-w-4xl mx-auto px-6 py-4'>
                        <Link
                            href='/projects'
                            className='inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium'
                        >
                            <ArrowLeft size={18} />
                            Back to Projects
                        </Link>
                    </div>
                </div>

                {/* Project Header */}
                <section className='py-12 px-6 bg-card border-b border-border'>
                    <div className='max-w-4xl mx-auto'>
                        <h1 className='text-5xl font-bold mb-6'>
                            {project.name}
                        </h1>

                        {/* Tech Stack */}
                        <div className='flex flex-wrap gap-2 mb-8'>
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className='px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm'
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Project Links */}
                        <div className='flex flex-wrap gap-4'>
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition'
                            >
                                <LiaGithub size={20} />
                                View on GitHub
                                <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Project Image */}
                <section className='py-12 px-6'>
                    <div className='max-w-4xl mx-auto'>
                        <div className='relative h-96 w-full overflow-hidden rounded-lg border border-border bg-muted'>
                            <Image
                                src={
                                    project.image ||
                                    '/placeholder.svg?height=384&width=800&query=project showcase'
                                }
                                alt={project.name}
                                fill
                                className='object-cover'
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* Project Details */}
                <section className='py-12 px-6 bg-card'>
                    <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'>
                        {/* Problem */}
                        {project.problem && (
                            <div className='border border-border rounded-lg p-6'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <AlertCircle
                                        className='text-accent'
                                        size={24}
                                    />
                                    <h3 className='text-lg font-semibold'>
                                        Problem
                                    </h3>
                                </div>
                                <p className='text-muted-foreground'>
                                    {project.problem}
                                </p>
                            </div>
                        )}

                        {/* Solution */}
                        {project.solution && (
                            <div className='border border-border rounded-lg p-6'>
                                <div className='flex items-center gap-3 mb-3'>
                                    <Code2 className='text-primary' size={24} />
                                    <h3 className='text-lg font-semibold'>
                                        Solution
                                    </h3>
                                </div>
                                <p className='text-muted-foreground'>
                                    {project.solution}
                                </p>
                            </div>
                        )}

                        {/* Technologies */}
                        <div className='border border-border rounded-lg p-6'>
                            <div className='flex items-center gap-3 mb-3'>
                                <Zap className='text-secondary' size={24} />
                                <h3 className='text-lg font-semibold'>Stack</h3>
                            </div>
                            <p className='text-muted-foreground'>
                                {project.tech.join(', ')}
                            </p>
                        </div>
                    </div>

                    {/* Full Description */}
                    <div className='border border-border rounded-lg p-8'>
                        <h2 className='text-2xl font-bold mb-4'>
                            Project Overview
                        </h2>
                        <p className='text-muted-foreground leading-relaxed text-lg mb-6'>
                            {project.fullDescription}
                        </p>

                        {/* Key Features */}
                        {project.keyFeatures &&
                            project.keyFeatures.length > 0 && (
                                <div className='mb-8'>
                                    <h3 className='text-xl font-semibold mb-4'>
                                        Key Features
                                    </h3>
                                    <ul className='space-y-3'>
                                        {project.keyFeatures.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className='flex items-start gap-3'
                                                >
                                                    <span className='inline-block w-2 h-2 rounded-full bg-primary mt-2 shrink-0' />
                                                    <span className='text-muted-foreground'>
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}

                        {/* Challenges */}
                        {project.challenges &&
                            project.challenges.length > 0 && (
                                <div>
                                    <h3 className='text-xl font-semibold mb-4'>
                                        Challenges & Solutions
                                    </h3>
                                    <ul className='space-y-3'>
                                        {project.challenges.map(
                                            (challenge, index) => (
                                                <li
                                                    key={index}
                                                    className='flex items-start gap-3'
                                                >
                                                    <span className='inline-block w-2 h-2 rounded-full bg-accent mt-2 shrink-0' />
                                                    <span className='text-muted-foreground'>
                                                        {challenge}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            )}
                    </div>
                </section>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section className='py-16 px-6 border-t border-border'>
                        <div className='max-w-4xl mx-auto'>
                            <h2 className='text-3xl font-bold mb-8'>
                                More Projects
                            </h2>
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                                {relatedProjects.map((relatedProject) => (
                                    <Link
                                        key={relatedProject.id}
                                        href={`/projects/${relatedProject.id}`}
                                        className='group border border-border rounded-lg overflow-hidden bg-card hover:border-primary transition-all hover:shadow-lg'
                                    >
                                        <div className='relative h-40 w-full overflow-hidden bg-muted'>
                                            <Image
                                                src={
                                                    relatedProject.image ||
                                                    '/placeholder.svg?height=160&width=300&query=project thumbnail'
                                                }
                                                alt={relatedProject.name}
                                                fill
                                                className='object-cover group-hover:scale-105 transition-transform duration-300'
                                            />
                                        </div>
                                        <div className='p-4'>
                                            <h3 className='font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                                                {relatedProject.name}
                                            </h3>
                                            <p className='text-sm text-muted-foreground line-clamp-2'>
                                                {relatedProject.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>

            <Footer />
        </div>
    )
}
