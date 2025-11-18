import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import ProjectCard from '@/components/projects/projectCard'
import { ExternalLink } from 'lucide-react'
import { links } from '@/lib/consts'
import { data as projects } from '@/lib/projects'
export const metadata = {
	title: 'Projects - Ibrahim Rezq',
	description: 'Explore my portfolio of projects showcasing React, Next.js, and full-stack development work.'
}

export default function ProjectsPage() {
	return (
		<div className="bg-background text-foreground min-h-screen flex flex-col">
			<main className="grow">
				{/* Page Header */}
				<section className="py-16 px-6 bg-card border-b border-border">
					<div className="max-w-6xl mx-auto">
						<h1 className="text-5xl font-bold mb-4">Featured Projects</h1>
						<p className="text-lg text-muted-foreground max-w-2xl">
							A collection of projects demonstrating my expertise in frontend development, full-stack
							engineering, and building production-ready applications with modern technologies.
						</p>
					</div>
				</section>

				{/* Projects Grid */}
				<section className="py-20 px-6">
					<div className="max-w-6xl mx-auto">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{projects.map((project) => (
								<ProjectCard key={project.id} project={project} />
							))}
						</div>
					</div>
				</section>
				<section className="py-16 px-6 bg-card border-t border-border">
					<div className="max-w-6xl mx-auto text-center">
						<h2 className="text-3xl font-bold mb-4">Ready to work together?</h2>
						<p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
							Let&apos;s create something amazing. Reach out to discuss your project or collaboration
							opportunities.
						</p>
						{links.navigation.contact && (
							<a
								href={links.navigation.contact}
								className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
							>
								Get in touch
								<ExternalLink size={18} />
							</a>
						)}
					</div>
				</section>
			</main>
		</div>
	)
}
