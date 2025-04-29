"use client"

import { useState } from "react"
import {
  Trophy,
  ArrowLeft,
  ArrowRight,
  LayoutGridIcon as LayoutVertical,
  LayoutGridIcon as LayoutHorizontal,
} from "lucide-react"
import SectionHeading from "./section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

const achievementsData = [
  {
    id: 1,
    title: "International Conference on IC-SFSR-24",
    date: "February 2024",
    description: "Runner up at NBNSCOE, Solapur for Research Presentation on Sustainable Technologies.",
    image: "/international.jpg?height=200&width=300",
    position: "Runner Up",
  },
 
  {
    id: 2,
    title: "Paper Presentation by ACES",
    date: "March 2024",
    description: "First prize in Paper Presentation hosted by ACES at AG Patil Institute of Technology.",
    image: "/agppi.jpg?height=1280&width=720",
    position: "First Place",
  },
  {
    id: 3,
    title: "Project Expo by SETCOM",
    date: "March 2024",
    description: "First place at Project Expo hosted by SETCOM at AG Patil Institue of Technology, Solapur.",
    image: "/setcom_agppi_proj.jpg?height=200&width=300",
    position: "Runner Up",
  },
  {
    id: 4,
    title: "WISOTECH-24 by VVP",
    date: "April 2024",
    description: " First prize in National Level Technical Symposium WISOTECH-24 at VVP Institute of Engineering",
    image: "/vvp_ppt.jpg?height=1280&width=720",
    position: "First Prize",
  },
  {
    id: 5,
    title: "National Level Technical Symposium (Dista 2k24)",
    date: "April 2024",
    description: "First prize at N B Navale Sinhgad College of Engineering for technical innovation",
    image: "/dista.jpg?height=140&width=300",
    position: "First Prize",
  },
   {
    id:6 ,
    title: "WISOTECH-24 (Spoorthy)",
    date: "March 2024",
    description: "First prize at VVP Institute of Engineering for Project Exhibition.",
    image: "/spoorthy.jpg?height=200&width=300",
    position: "First Prize",
  },
  
]

export default function Achievements() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextAchievement = () => {
    setActiveIndex((prev) => (prev === achievementsData.length - 1 ? 0 : prev + 1))
  }

  const prevAchievement = () => {
    setActiveIndex((prev) => (prev === 0 ? achievementsData.length - 1 : prev - 1))
  }

  return (
    <section id="achievements" className="py-16">
      <SectionHeading
        title="Achievements"
        subtitle="Recognition and awards I've received throughout my academic journey"
      />

      <div className="max-w-6xl mx-auto px-4">
        <Tabs defaultValue="vertical" className="w-full">
          <div className="flex justify-center mb-6">
            
          </div>

          {/* Vertical Timeline */}
          <TabsContent value="vertical" className="mt-0">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-200 dark:bg-emerald-900"></div>

              <div className="space-y-12">
                {achievementsData.map((achievement, index) => (
                  <div key={achievement.id} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-600 z-10 shadow-md"></div>

                    <div
                      className={cn(
                        "flex flex-col md:flex-row items-center md:items-start gap-8",
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse",
                      )}
                    >
                      {/* Date */}
                      <div
                        className={cn(
                          "w-full md:w-1/2 text-center",
                          index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12",
                        )}
                      >
                        <div className="bg-emerald-100 dark:bg-emerald-900/50 inline-block px-4 py-2 rounded-full text-emerald-800 dark:text-emerald-200 font-medium mb-2">
                          {achievement.date}
                        </div>
                      </div>

                      {/* Content */}
                      <Card
                        className={cn(
                          "w-full md:w-1/2 transform transition-all duration-300 hover:scale-105",
                          index % 2 === 0 ? "md:ml-12" : "md:mr-12",
                        )}
                      >
                        <CardContent className="p-0 overflow-hidden">
                          <div className="h-50 overflow-hidden">
                            <img
                              src={achievement.image || "/placeholder.svg"}
                              alt={achievement.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6">
                            <div className="flex items-center mb-2">
                              <Trophy className="h-5 w-5 text-emerald-600 mr-2" />
                              <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm font-medium px-2.5 py-0.5 rounded">
                                {achievement.position}
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                              {achievement.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Horizontal Timeline */}
          <TabsContent value="horizontal" className="mt-0">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute top-32 left-0 w-full h-1 bg-emerald-200 dark:bg-emerald-900"></div>

              <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <Button variant="outline" size="icon" onClick={prevAchievement} className="mb-4 md:mb-0">
                  <ArrowLeft className="h-4 w-4" />
                </Button>

                <div className="flex-1 overflow-hidden">
                  <div className="flex flex-col md:flex-row items-center justify-center">
                    {achievementsData.map((achievement, index) => (
                      <div
                        key={achievement.id}
                        className={cn(
                          "relative px-4 transition-all duration-500 ease-in-out",
                          index === activeIndex ? "opacity-100 scale-100" : "opacity-40 scale-95 hidden md:block",
                          index !== activeIndex && "md:hover:opacity-70 cursor-pointer",
                        )}
                        onClick={() => setActiveIndex(index)}
                      >
                        {/* Timeline dot */}
                        <div className="hidden md:block absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-emerald-600 z-10 shadow-md"></div>

                        {/* Date */}
                        <div className="hidden md:block text-center mb-6">
                          <div className="bg-emerald-100 dark:bg-emerald-900/50 inline-block px-4 py-2 rounded-full text-emerald-800 dark:text-emerald-200 font-medium">
                            {achievement.date}
                          </div>
                        </div>

                        {/* Content */}
                        <Card className="w-full md:w-64 lg:w-80 transform transition-all duration-300 hover:scale-105 mb-8 md:mb-0">
                          <CardContent className="p-0 overflow-hidden">
                            <div className="h-48 overflow-hidden">
                              <img
                                src={achievement.image || "/placeholder.svg"}
                                alt={achievement.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div className="p-6">
                              <div className="md:hidden text-center mb-2">
                                <div className="bg-emerald-100 dark:bg-emerald-900/50 inline-block px-4 py-2 rounded-full text-emerald-800 dark:text-emerald-200 font-medium">
                                  {achievement.date}
                                </div>
                              </div>
                              <div className="flex items-center mb-2">
                                <Trophy className="h-5 w-5 text-emerald-600 mr-2" />
                                <span className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-sm font-medium px-2.5 py-0.5 rounded">
                                  {achievement.position}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {achievement.title}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{achievement.description}</p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="outline" size="icon" onClick={nextAchievement} className="mt-4 md:mt-0">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              {/* Mobile indicators */}
              <div className="flex justify-center space-x-2 md:hidden">
                {achievementsData.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-colors",
                      index === activeIndex ? "bg-emerald-600" : "bg-emerald-200 dark:bg-emerald-800",
                    )}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
