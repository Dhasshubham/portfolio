"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"

interface FormData {
  name: string
  email: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-green-200 bg-green-50 dark:bg-green-950 dark:border-green-800 animate-fade-in-up">
              <CardContent className="pt-6 p-4 sm:p-6">
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-600 mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl sm:text-2xl font-semibold text-green-800 dark:text-green-200 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm sm:text-base text-green-700 dark:text-green-300 mb-6 leading-relaxed">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
                >
                  Send Another Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">Get In Touch</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty px-4 leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's create something amazing
            together.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Information */}
            <div
              className={`transition-all duration-700 delay-200 ${
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6 px-4 lg:px-0">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6 sm:mb-8 text-pretty px-4 lg:px-0 text-sm sm:text-base leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. Feel
                free to reach out through any of the channels below.
              </p>

              <div className="space-y-4 sm:space-y-6 px-4 lg:px-0">
                <div className="flex items-center group">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">Email</p>
                    <a
                      href="mailto:shubhamdhas123@gmail.com"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm sm:text-base"
                    >
                      shubhamdhas123@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">Phone</p>
                    <a
                      href="tel:+919322278993"
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm sm:text-base"
                    >
                      +91 9322278993
                    </a>
                  </div>
                </div>

                <div className="flex items-center group">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <div>
                    <p className="font-medium text-foreground text-sm sm:text-base">Location</p>
                    <p className="text-muted-foreground text-sm sm:text-base">Pune, Maharastra, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card
              className={`border-border transition-all duration-700 delay-400 ${
                isIntersecting ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-card-foreground text-lg sm:text-xl">Send a Message</CardTitle>
                <CardDescription className="text-sm sm:text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-card-foreground text-sm sm:text-base">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`mt-1 transition-all duration-200 focus:scale-[1.02] text-sm sm:text-base ${errors.name ? "border-destructive" : ""}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 animate-fade-in">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-card-foreground text-sm sm:text-base">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`mt-1 transition-all duration-200 focus:scale-[1.02] text-sm sm:text-base ${errors.email ? "border-destructive" : ""}`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 animate-fade-in">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-card-foreground text-sm sm:text-base">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className={`mt-1 min-h-[100px] sm:min-h-[120px] transition-all duration-200 focus:scale-[1.02] text-sm sm:text-base ${errors.message ? "border-destructive" : ""}`}
                      placeholder="Tell me about your project or how I can help you..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-xs sm:text-sm mt-1 animate-fade-in">{errors.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transform hover:scale-105 transition-all duration-200 disabled:hover:scale-100 text-sm sm:text-base py-2 sm:py-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
