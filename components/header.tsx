"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg sm:text-xl font-bold text-foreground">Shubham Dhas</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm lg:text-base text-foreground hover:text-accent transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm lg:text-base text-foreground hover:text-accent transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm lg:text-base text-foreground hover:text-accent transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="text-foreground hover:text-accent h-8 w-8 sm:h-10 sm:w-10"
            >
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 sm:h-5 sm:w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground hover:text-accent h-8 w-8 sm:h-10 sm:w-10"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-background/95 backdrop-blur-lg border-t border-border/50 rounded-b-lg shadow-lg">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-4 py-3 text-base text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block w-full text-left px-4 py-3 text-base text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-3 text-base text-foreground hover:text-accent hover:bg-accent/10 rounded-md transition-all duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
