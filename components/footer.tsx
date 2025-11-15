export function Footer() {
    return (
        <footer className='border-t border-border bg-background px-6 py-8'>
            <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
                <p className='text-sm text-muted-foreground'>
                    © 2025 Ibrahim Rezq. All rights reserved.
                </p>
                <div className='flex gap-6 text-sm text-muted-foreground'>
                    <a
                        href='https://github.com/Ibrahim-Rezq'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='hover:text-foreground transition-colors'
                    >
                        GitHub
                    </a>
                    <a
                        href='mailto:ebrahimamin391@gmail.com'
                        className='hover:text-foreground transition-colors'
                    >
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
