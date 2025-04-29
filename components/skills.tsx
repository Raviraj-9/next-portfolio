import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Terminal, Presentation } from "lucide-react"

const skillsData = {
  languages: ["Java", "C/C++", "JavaScript", "TypeScript"],
  frameworksAndLibraries: ["React.js", "Next.js", "Spring Boot", "OpenCV"],
  tools: ["Git", "ArduinoIDE", "Postman"],
  softSkills: [
    "Strong leadership and team management abilities",
    "Effective communicator with public speaking and presentation experience",
    "Collaborative team player with a proactive problem-solving approach"
  ]
};

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <SectionHeading title="Skills" subtitle="Technologies and tools I work with" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-full mr-3">
                <Code className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Languages</h3>
            </div>
            <ul className="space-y-2">
              {skillsData.languages.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-full mr-3">
                <Terminal className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Tools</h3>
            </div>
            <ul className="space-y-2">
              {skillsData.tools.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow md:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-emerald-100 dark:bg-emerald-900 rounded-full mr-3">
                <Presentation className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Soft Skills</h3>
            </div>
            <ul className="space-y-2">
              {skillsData.softSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 bg-emerald-600 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
