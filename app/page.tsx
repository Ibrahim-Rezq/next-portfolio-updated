import { Hero } from '@/components/landing/hero'
import { Projects } from '@/components/landing/projects'
import { Experience } from '@/components/landing/experience'
import { Skills } from '@/components/landing/skills'
import { Contact } from '@/components/landing/contact'

export default function Home() {
	return (
		<div className="bg-background text-foreground">
			<main>
				<Hero />
				<Projects />
				<Experience />
				<Skills />
				<Contact />
			</main>
		</div>
	)
}
