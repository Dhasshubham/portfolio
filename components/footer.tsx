import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left side - Name and tagline */}
          <div className="text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-2">Shubham Dhas</h3>
            <p className="text-sidebar-foreground/80 text-sm sm:text-base">
              Frontend Developer & Creative Problem Solver
            </p>
          </div>

          {/* Right side - Social links */}
          <div className="flex space-x-4 sm:space-x-6">
            <a
              href="https://github.com/Dhasshubham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors duration-200 p-2"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shubham-dhas-4305a9252"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors duration-200 p-2"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:shubhamdhas123@gmail.com"
              className="text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors duration-200 p-2"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-sidebar-border text-center">
          <p className="text-sidebar-foreground/60 flex items-center justify-center text-xs sm:text-sm">
            Made with <Heart className="h-3 w-3 sm:h-4 sm:w-4 mx-1 text-red-500" /> using React & Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
