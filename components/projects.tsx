"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import projectsData from "@/data/projects.json"

interface Project {
  id: string
  title: string
  description: string
  image: string
  link?: string
  github?: string
  tags: string[]
  featured?: boolean
}

export function Projects() {
  const [projects] = useState<Project[]>(projectsData.slice(0, 3))
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="projects" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-card-foreground mb-3 sm:mb-4 px-4">
            Featured Projects
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 leading-relaxed">
            A showcase of my recent work, featuring modern web applications built with cutting-edge technologies and
            best practices.
          </p>
        </div>

        {/* Projects Grid - Show all 3 projects from JSON in a single grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-xl transition-all duration-500 border-border transform hover:-translate-y-2 ${
                isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <Badge
                      variant="secondary"
                      className="bg-accent text-accent-foreground animate-pulse text-xs sm:text-sm"
                    >
                      Featured
                    </Badge>
                  </div>
                )}
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-card-foreground text-lg sm:text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 pb-4">
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-4 sm:p-6 pt-0">
                {project.link && (
                  <Button
                    size="sm"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1 sm:flex-none text-xs sm:text-sm"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Live Demo
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm bg-transparent">
                    <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                    Code
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
