'use client'

import { useState } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { links } from '@/lib/consts'

export function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const { theme, setTheme } = useTheme()

	const handleThemeToggle = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
			<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
				<a href={links.pages.home} className="text-xl font-bold text-primary">
					IR
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-8">
					{links.navigationLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							{link.label}
						</a>
					))}

					<button
						onClick={handleThemeToggle}
						className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
						aria-label="Toggle theme"
						title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
					>
						{theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
					</button>

					<a
						href={links.socials.email}
						className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition"
					>
						Get in touch
					</a>
				</div>

				{/* Mobile Navigation */}
				<button
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-foreground"
					aria-label="Toggle menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="md:hidden border-t border-border bg-card">
					<div className="max-w-6xl mx-auto px-6 py-4 space-y-3">
						{links.navigationLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
								onClick={() => setIsOpen(false)}
							>
								{link.label}
							</a>
						))}
						<button
							onClick={() => {
								handleThemeToggle()
								setIsOpen(false)
							}}
							className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded hover:bg-muted"
						>
							{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
						</button>
						<a
							href={links.socials.email}
							className="block text-sm px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition text-center"
						>
							Get in touch
						</a>
					</div>
				</div>
			)}
		</nav>
	)
}
