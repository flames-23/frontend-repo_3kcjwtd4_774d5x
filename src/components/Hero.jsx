import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80"></div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Interactive 3D Portfolio</span>
            </h1>
            <p className="mt-6 text-lg text-gray-700">
              I design and build delightful digital experiences. Explore my work below and play with the 3D scene above.
            </p>
            <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-black text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition-all">View Projects</a>
              <a href="#contact" className="rounded-full bg-white/70 backdrop-blur px-6 py-3 text-sm font-semibold ring-1 ring-black/10 hover:bg-white">Contact Me</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
