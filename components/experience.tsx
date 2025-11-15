const experience = [
  {
    title: 'Full-Stack Developer',
    company: 'AFDV Marketing',
    period: '02/2023 – 06/2023',
    tasks: [
      'Completed and refined a React-based event calendar for production readiness.',
      'Developed a Next.js frontend integrated with a Django backend for an e-commerce platform.',
      'Built an internal CMS to streamline content workflows.',
      'Collaborated with Python backend developers and led frontend architecture.',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'AFDV (via Upwork)',
    period: '01/2023 – 01/2023',
    tasks: [
      'Converted Figma template into responsive HTML, CSS, JS and jQuery.',
      'Integrated frontend UI with Django backend for event scheduling.',
      'Improved client-side data refresh and UI performance.',
    ],
  },
  {
    title: 'JavaScript Developer',
    company: 'Upwork',
    period: '07/2022 – 08/2022',
    tasks: [
      'Implemented user-tracking library in Next.js + Strapi + Supabase.',
      'Integrated tracking endpoints with backend APIs.',
      'Delivered foundational analytics for user behavior insights.',
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">
            A timeline of my professional journey and key contributions.
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="border-l-2 border-primary pl-8 relative">
              <div className="absolute -left-3.5 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />
              
              <div className="mb-4">
                <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                <p className="text-primary font-medium mb-2">{job.company}</p>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>

              <ul className="space-y-2">
                {job.tasks.map((task, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-primary mt-1">▸</span>
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
