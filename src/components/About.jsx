import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Me</h2>
            <p className="text-gray-700 leading-relaxed">
              I’m a creative developer focused on building engaging, performant interfaces. I love combining motion, 3D, and thoughtful UX to tell compelling product stories.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {["React","Three.js","Framer Motion","Tailwind","FastAPI","MongoDB"].map((skill) => (
                <div key={skill} className="rounded-xl border border-black/10 bg-white/70 backdrop-blur py-3 px-4 text-sm font-semibold">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="aspect-[4/3] rounded-2xl border border-black/10 bg-gradient-to-br from-blue-50 to-purple-50 p-6 shadow-xl"
          >
            <div className="h-full w-full rounded-xl bg-white/70" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
