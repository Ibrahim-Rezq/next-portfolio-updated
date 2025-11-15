import { experience } from '@/lib/data'

export function Experience() {
    return (
        <section id='experience' className='py-20 px-6 bg-background'>
            <div className='max-w-4xl mx-auto'>
                <div className='mb-16'>
                    <h2 className='text-4xl font-bold mb-4'>Experience</h2>
                    <p className='text-lg text-muted-foreground'>
                        A timeline of my professional journey and key
                        contributions.
                    </p>
                </div>

                <div className='space-y-12'>
                    {experience.map((job, index) => (
                        <div
                            key={index}
                            className='border-l-2 border-primary pl-8 relative'
                        >
                            <div className='absolute -left-3.5 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background' />

                            <div className='mb-4'>
                                <h3 className='text-2xl font-semibold mb-2'>
                                    {job.title}
                                </h3>
                                <p className='text-primary font-medium mb-2'>
                                    {job.company}
                                </p>
                                <p className='text-sm text-muted-foreground'>
                                    {job.period}
                                </p>
                            </div>

                            <ul className='space-y-2'>
                                {job.tasks.map((task, i) => (
                                    <li
                                        key={i}
                                        className='text-muted-foreground flex gap-3'
                                    >
                                        <span className='text-primary mt-1'>
                                            ▸
                                        </span>
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
