import { links } from '@/lib/consts'
import { Mail, Phone, Globe } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { LiaWhatsapp } from 'react-icons/lia'

export function Contact() {
	return (
		<section id="contact" className="py-20 px-6 bg-background">
			<div className="max-w-4xl mx-auto text-center">
				{/* Section Header */}
				<h2 className="text-4xl font-bold mb-6">Let&apos;s Work Together</h2>
				<p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
					I&apos;m always interested in hearing about new projects and opportunities. Whether you have a
					question or just want to say hi, feel free to reach out.
				</p>
				{/* Social Links */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
					<a
						href={links.socials.email}
						className="flex items-center justify-center gap-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-card transition-colors group"
					>
						<Mail size={20} className="text-primary" />
						<div className="text-left">
							<p className="text-sm text-muted-foreground">Email</p>
							<p className="font-semibold group-hover:text-primary transition-colors">
								ebrahimamin391@gmail.com
							</p>
						</div>
					</a>

					<a
						href={links.socials.whatsapp}
						className="flex items-center justify-center gap-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-card transition-colors group"
					>
						<LiaWhatsapp size={20} className="text-primary" />
						<div className="text-left">
							<p className="text-sm text-muted-foreground">Whatsapp</p>
							<p className="font-semibold group-hover:text-primary transition-colors">+20 128 787 7420</p>
						</div>
					</a>

					<a
						href={links.socials.blog || 'https://ibrahim-rezq.vercel.app'}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-card transition-colors group"
					>
						<Globe size={20} className="text-primary" />
						<div className="text-left">
							<p className="text-sm text-muted-foreground">Website</p>
							<p className="font-semibold group-hover:text-primary transition-colors">
								ibrahim-rezq.vercel.app
							</p>
						</div>
					</a>

					<a
						href={links.socials.github}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-3 p-4 border border-border rounded-lg hover:border-primary hover:bg-card transition-colors group"
					>
						<FaGithub size={20} className="text-primary" />
						<div className="text-left">
							<p className="text-sm text-muted-foreground">GitHub</p>
							<p className="font-semibold group-hover:text-primary transition-colors">Ibrahim-Rezq</p>
						</div>
					</a>
				</div>
				{/* CTA */}
				<a
					href={links.socials.email}
					className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
				>
					Send me an email
				</a>
			</div>
		</section>
	)
}
