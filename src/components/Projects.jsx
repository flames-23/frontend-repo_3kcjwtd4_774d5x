import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

export default function Projects() {
  const [projects, setProjects] = useState([
    { title: 'Motion Landing', description: 'Playful micro-interactions with Framer Motion', link: '#', tags: ['Framer Motion','React','Tailwind'] },
    { title: '3D Product Teaser', description: 'Interactive 3D hero powered by Spline', link: '#', tags: ['Spline','Three.js','UX'] },
    { title: 'API Dashboard', description: 'Data-rich dashboard with FastAPI backend', link: '#', tags: ['FastAPI','MongoDB','Charts'] },
  ])

  useEffect(() => {
    // Placeholder for future backend fetch
  }, [])

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-black text-white px-5 py-2 text-sm font-semibold">Work with me</a>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 backdrop-blur shadow hover:shadow-lg"
            >
              <div className="h-36 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100" />
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{p.description}</p>
                </div>
                <ExternalLink size={18} className="shrink-0 opacity-60 group-hover:opacity-100" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-black/5 px-3 py-1 text-xs font-semibold">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
