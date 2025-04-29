import { Users } from "lucide-react"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"

const activitiesData = [
  "Co-Technical Secretary, NBNSCOE Solapur",
  "Conducted AI and Robotics Seminar for School Students",
]

export default function Activities() {
  return (
    <section id="activities" className="py-16">
      <SectionHeading title="Extracurricular Activities" subtitle="Leadership roles and community involvement" />

      <div className="max-w-3xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <ul className="space-y-4">
              {activitiesData.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <Users className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">{activity}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
