import { MoveDown } from "lucide-react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Achievements from "@/components/achievements"
import Certifications from "@/components/certifications"
import Activities from "@/components/activities"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />

        <div className="flex justify-center my-12">
          <div className="animate-bounce bg-gray-200 dark:bg-gray-800 p-2 rounded-full">
            <MoveDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
          </div> 
        </div>

        <About />
        <Education />
        <Projects />
        <Skills />
        <Achievements />
        <Certifications />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
