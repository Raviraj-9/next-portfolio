"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, Linkedin, Github, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="py-20 md:py-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
          <h2 className="text-emerald-600 font-semibold text-lg mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Mallangouda Patil
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Electronics and Telecommunications Engineering
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="tel:+917020393352"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              <Phone className="h-5 w-5 mr-2" />
              <span>+91 7020393352</span>
            </a>
            <a
              href="mailto:mrpatil2004@gmail.com"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              <Mail className="h-5 w-5 mr-2" />
              <span>mrpatil2004@gmail.com</span>
            </a>
          
            <a
              href="https://github.com/Raviraj-9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500"
            >
              <Github className="h-5 w-5 mr-2" />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-4">
            
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
            <Button variant="outline" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-600">
            <img
              src="/pfp.jpg?height=320&width=320"
              alt="Mallangouda Patil"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
