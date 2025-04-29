import { ExternalLink, Github } from "lucide-react"
import SectionHeading from "./section-heading"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projectsData = [
  {
    title: "Automatic Water Level Controller",
    description: [
      "Designed a user-friendly water level controller using Arduino and precise sensors",
      "Programmed the controller to effectively manage water levels without technical complications",
      "Enabled a remote monitoring feature for easy access and monitoring by users",
      "Ensured reliable performance through thorough testing and optimization processes",
    ],
    image: "/placeholder.svg?height=200&width=400",
    link: "https://github.com/Raviraj-9/Automatic-Water-Level-Controller.git",
  },
  {
    title: "TumorScope",
    description: [
      "Developed an AIML Model for accurate brain tumor detection from MRI Scan using Brain Tumor Dataset",
      "Led a cross functional team of 6 in hackathon managing project timeline and delegation effectively",
    ],
    image: "/placeholder.svg?height=200&width=400",
    link: "https://github.com/Raviraj-9/Automatic-Water-Level-Controller.git",
  },
  {
    title: "Gesture Controlled Whiteboard",
    description: [
      "Implemented real-time hand gesture recognition using OpenCV & CNN for a touchless whiteboard interface",
      "Canvas drawings can be saved", 
      "Enabled gesture-based interaction to support sign language users in digital environments",
       "Integrated a Flask backend to process and analyze gesture-based inputs efficiently"
    ],
    image: "/placeholder.svg?height=200&width=400",
    link: "https://github.com/Raviraj-9/Gesture-controlled-whiteboard.git",
  },
  {
    title: "Java-React Full Stack App",
    description: [
      "Built a full-stack web application using Java Spring Boot (backend) and React.js (frontend)",
      "Implemented secure JWT-based authentication and role-based access control using Spring Security",
      "Designed RESTful APIs and integrated MySQL using Spring Data JPA for managing customer records",
      "Enabled frontend-backend communication with Axios and CORS configuration",
    ],
    image: "/placeholder.svg?height=200&width=400",
    link: "https://github.com/Raviraj-9/java-spring-react-app.git",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <SectionHeading title="Projects" subtitle="Some of my recent work and technical projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
           
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{project.title}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {project.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-emerald-600 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
