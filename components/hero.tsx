"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { useTypingEffect } from "@/hooks/use-typing-effect"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { AnimatedBackground } from "@/components/animated-background"

export function Hero() {
  const { ref: heroRef, isIntersecting } = useIntersectionObserver({ threshold: 0.2 })

  const { displayedText: typedTitle, isComplete: titleComplete } = useTypingEffect({
    text: "Frontend Developer & Creative Problem Solver",
    speed: 80,
    delay: 500,
  })

  const { displayedText: typedSubtitle } = useTypingEffect({
    text: "I craft beautiful, responsive web experiences using modern technologies. Passionate about clean code, user experience, and bringing ideas to life.",
    speed: 30,
    delay: titleComplete ? 1000 : 0,
  })

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-card overflow-hidden pt-14 sm:pt-16"
    >
      <AnimatedBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 sm:mb-6 text-balance min-h-[120px] sm:min-h-[160px] lg:min-h-[200px] flex items-center justify-center px-2">
              <span className="inline-block leading-tight">
                {typedTitle}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </h1>

            <div className="min-h-[80px] sm:min-h-[100px] lg:min-h-[120px] flex items-start justify-center px-4">
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                {typedSubtitle}
              </p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 transition-all duration-700 delay-300 ${
                titleComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl w-full sm:w-auto text-sm sm:text-base"
                onClick={scrollToProjects}
              >
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg w-full sm:w-auto text-sm sm:text-base bg-transparent"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get In Touch
              </Button>
            </div>

            <div
              className={`flex justify-center space-x-6 sm:space-x-8 transition-all duration-700 delay-500 ${
                titleComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="https://www.linkedin.com/in/shubham-dhas-4305a9252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 p-2"
              >
                <Github className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/shubham-dhas-4305a9252"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 p-2"
              >
                <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:shubhamdhas123@gmail.com"
                className="text-muted-foreground hover:text-accent transition-all duration-200 transform hover:scale-110 hover:-translate-y-1 p-2"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
          titleComplete ? "opacity-100 translate-y-0" : "opacity-30 translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll to explore</span>
          <ArrowDown className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
        </div>
      </div>
    </section>
  )
}
