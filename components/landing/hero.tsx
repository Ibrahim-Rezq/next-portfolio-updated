import { links } from '@/lib/consts'
import Image from 'next/image'

export function Hero() {
	return (
		<section className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2  gap-12 items-center">
				{/* Hero Text */}
				<div className="space-y-6">
					<div>
						<p className="text-muted-foreground text-sm mb-2">Welcome to my portfolio</p>
						<h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">Ibrahim Rezq</h1>
						<p className="text-xl text-muted-foreground">Frontend Developer</p>
					</div>

					<p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
						I build responsive, production-ready UIs with React and Next.js. Specialized in TypeScript and
						modern JavaScript frameworks.
					</p>

					<div className="flex gap-4 pt-4">
						<a
							href={links.navigation.projects}
							className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition"
						>
							View Projects
						</a>
						<a
							href={links.navigation.contact}
							className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-card transition"
						>
							Contact
						</a>
					</div>
				</div>
				{/* Hero Image */}
				<div className="flex justify-center">
					<div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border-2 border-primary/30 shadow-xl">
						<Image
							src="/professional-developer-portrait.jpg"
							alt="Ibrahim Rezq - Frontend Developer"
							fill
							className="object-cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	)
}
