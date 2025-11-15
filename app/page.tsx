import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
    return (
        <div className='bg-background text-foreground'>
            <Navigation />
            <main>
                <Hero />
                <Projects />
                <Experience />
                <Skills />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
