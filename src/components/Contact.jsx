import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })
      const data = await res.json()
      if (res.ok) setStatus('Thanks! I will get back to you soon.')
      else setStatus(data.detail || 'Something went wrong')
    } catch (err) {
      setStatus('Unable to send right now.')
    }
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-black/10 bg-white/70 p-8 backdrop-blur shadow"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let’s build something</h2>
          <p className="mt-3 text-gray-700">Tell me about your project and I’ll get back within 24 hours.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input id="name" name="name" required className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input id="email" name="email" type="email" required className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea id="message" name="message" rows="5" required className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-black/20" />
            </div>

            <div className="flex items-center justify-between gap-4">
              <button type="submit" className="rounded-full bg-black text-white px-6 py-3 text-sm font-semibold">Send</button>
              <p className="text-sm text-gray-600">{status}</p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
