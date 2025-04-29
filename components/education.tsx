import { GraduationCap, Calendar } from "lucide-react"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"

const educationData = [
  {
    institution: "N B Navale Sinhgad College of Engineering",
    location: "Solapur, India",
    degree: "BTech in Electronics and Telecommunications",
    score: "CGPA - 8.76",
    period: "Graduating July 2026",
  },
  {
    institution: "Sangmeshwar Junior College",
    location: "Solapur, India",
    degree: "12th Grade",
    score: "70.50%",
    period: "August 2022",
  },
  {
    institution: "ST Thomas English Medium School",
    location: "Solapur, India",
    degree: "10th Grade (ICSE)",
    score: "89.80%",
    period: "July 2020",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-16">
      <SectionHeading title="Education" subtitle="My academic journey and qualifications" />

      <div className="space-y-6 max-w-4xl mx-auto">
        {educationData.map((item, index) => (
          <Card key={index} className="border-l-4 border-emerald-600">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
                    <GraduationCap className="h-5 w-5 mr-2 text-emerald-600" />
                    {item.degree}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                    {item.institution}, {item.location}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Score: {item.score}</p>
                </div>
                <div className="mt-2 md:mt-0 flex items-center text-gray-500 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{item.period}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
