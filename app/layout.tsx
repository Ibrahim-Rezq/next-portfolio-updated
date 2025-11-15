import type { Metadata } from 'next'
// import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

// const _geist = Geist({ subsets: ['latin'] })
// const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Ibrahim Rezq - Frontend Developer',
    description:
        'Frontend Developer specialized in React and Next.js. Building responsive UIs and production-ready applications.',
    icons: {
        icon: [
            {
                url: '/icon.png',
            },
        ],
        apple: '/apple-icon.png',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning>
            <body className={`font-sans antialiased`}>
                <ThemeProvider
                    attribute='class'
                    defaultTheme='light'
                    enableSystem
                    storageKey='portfolio-theme'
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    )
}
