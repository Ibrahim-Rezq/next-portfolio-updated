import { Code2, Zap, Database, Wrench, GitBranch, Layers, Package, Settings } from 'lucide-react'

const skillCategories = [
  {
    category: 'Languages',
    icon: Code2,
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: Layers,
    skills: ['React', 'Next.js', 'jQuery', 'Tailwind CSS'],
  },
  {
    category: 'State & Data',
    icon: Database,
    skills: ['Context API', 'Redux', 'Supabase', 'Prisma'],
  },
  {
    category: 'Backend & APIs',
    icon: Zap,
    skills: ['Strapi', 'Django (integration)', 'REST APIs'],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git', 'Vercel', 'GitHub'],
  },
]

const certifications = [
  {
    title: 'React Development Cross-Skilling',
    issuer: 'EGFWD | Udacity',
    link: 'https://www.udacity.com/certificate/PMERELDP',
    icon: '🎓',
  },
  {
    title: 'Advanced Full-Stack Web Development',
    issuer: 'EGFWD | Udacity',
    link: 'https://www.udacity.com/certificate/HSTAJZGN',
    icon: '🏆',
  },
  {
    title: 'Front End Web Development Professional',
    issuer: 'EGFWD | Udacity',
    link: 'https://www.udacity.com/certificate/VYQX7CPL',
    icon: '⭐',
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground">
            Technologies and tools I work with regularly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <div
                key={index}
                className="border border-border rounded-lg p-6 bg-card hover:border-primary transition-colors hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <IconComponent size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-primary/5 text-foreground rounded-md text-sm font-medium border border-border"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="border-t border-border pt-16">
          <h3 className="text-2xl font-bold mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-start p-6 border border-border rounded-lg hover:border-primary hover:bg-card transition-all hover:shadow-md"
              >
                <span className="text-4xl mb-4">{cert.icon}</span>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {cert.issuer}
                </p>
                <div className="text-xs text-primary font-medium group-hover:underline">
                  View Credential →
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
