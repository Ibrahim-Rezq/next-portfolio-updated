import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/providers/theme-provider'
import './globals.css'
import ScrollToTop from '@/components/layout/scroll-to-top'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'

const _roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ibrahim Rezq - Frontend Developer',
	description:
		'Frontend Developer specialized in React and Next.js. Building responsive UIs and production-ready applications.',
	icons: {
		icon: [
			{
				url: '/icon.png'
			}
		],
		apple: '/apple-icon.png'
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning className={_roboto.className}>
			<body className={`font-sans antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					storageKey="portfolio-theme"
					disableTransitionOnChange
				>
					<Navigation />
					{children}
					<Footer />
				</ThemeProvider>
				<Analytics />
				<ScrollToTop />
			</body>
		</html>
	)
}
