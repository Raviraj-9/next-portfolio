import { Award, ExternalLink } from "lucide-react"
import SectionHeading from "./section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const certificationsData = [
  {
    title: "Arduino Interfacing and Programming (VAP)",
    link: "https://drive.google.com/file/d/1cbAO-GIIVoMHbj854LG2m4J075pKpB0H/view",
  },
  {
    title: "Sensor Technologies (NPTEL)",
    link: "https://drive.google.com/file/d/1Vu_rFNggCTXiGzSonXC5EgOiYuYQ4QdI/view",
  },
  {
    title: "Java Programming (NPTEL)",
    link: "https://drive.google.com/file/d/1W-_xhDd23VC9oDyhgrLS8kcTxdSOdpgn/view",
  },
  {
    title: "Keyword Research Fundamentals - SEO (Simplilearn)",
    link: "https://tinyurl.com/yx7cnj8d",
  },
  {
    title: "Digital Marketing (Simplilearn)",
    link: "https://tinyurl.com/56kkd4ar",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <SectionHeading title="Certifications" subtitle="Professional courses and certifications I've completed" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {certificationsData.map((cert, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Award className="h-6 w-6 text-emerald-600 mr-3 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">{cert.title}</h3>
              </div>
              <div className="mt-4 flex justify-end">
                <Button variant="outline" size="sm" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Certificate
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
