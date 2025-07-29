"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Download,
  ExternalLink,
  ChevronUp,
  Moon,
  Sun,
  Phone,
  Instagram,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Award,
  Rocket,
  Zap,
  Code2,
  Server,
  Database,
  Settings,
  Shield,
  Target,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react"

export default function AppleStylePortfolio() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode
  const [activeSection, setActiveSection] = useState("hero")
  const [scrollY, setScrollY] = useState(0)
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const skillsRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set dark mode as default on first load
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme) {
      const isDark = savedTheme === "dark"
      setDarkMode(isDark)
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    } else {
      // First time visitor - set dark mode as default
      setDarkMode(true)
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    setIsLoaded(true)

    const handleScroll = () => setScrollY(window.scrollY)

    window.addEventListener("scroll", handleScroll)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "-50px" },
    )

    const sections = [heroRef, aboutRef, skillsRef, projectsRef, contactRef]
    sections.forEach((ref) => {
      if (ref.current) observer.observe(ref.current)
    })

    // Animate elements on scroll
    const animateElements = document.querySelectorAll(".scroll-animate")
    const elementObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1, rootMargin: "-100px" },
    )

    animateElements.forEach((el) => elementObserver.observe(el))

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
      elementObserver.disconnect()
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const skills = [
    {
      name: "Python Enthusiast",
      description: "Learned REST APIs with Flask and Python in 2025 - Udemy",
      image: "/Images/python-original.svg",
      category: "Backend",
      icon: Code2,
      color: "from-400 via-500 to-500",
      technologies: ["Python", "FastAPI",],
    },
    {
      name: "Container Orchestration & Scrpting",
      description: "Hands-on experience and Knowledge of Kubernetes(Basic), Docker, linux, and container security",
      image: "/Images/docker-original-wordmark.svg",
      category: "DevOps",
      icon: Server,
      color: "from-400 via-500 to-500",
      technologies: ["Kubernetes(Basic)", "Docker", "linux Command Line"],
    },
    {
      name: "Database & Montioring",
      description: "Knowledge of PostgreSQL, Grafana, Prometheus, along with hands-on experience",
      image: "/Images/postgresql-original.svg",
      category: "Database & Monitoring",
      icon: Database,
      color: "from-400 via-500 to-500",
      technologies: ["PostgreSQL", "Redis", "MongoDB", "Database Optimization", "Replication"],
    },
    {
    name: "Mechanical Engineering",
      description: "BE in Mechanical Engineering in 2022 - PSNA College of Engineering and Technology with CPGA 8.5",
      image: "/placeholder.svg?height=600&width=800&text=Mechanical+Engineering",
      category: "Education",
      icon: Briefcase,
      color: "from-gray-400 via-gray-500 to-gray-500",
      technologies: ["Mechanical Engineering", "Design Optimization", "Finite Element Analysis"],
    },
    {
      name: "Schooling and Higher Secondary",
      description: "Completed schooling and higher secondary in 2018 - Devangar Higher Secondary School with CPGA 7", 
      image: "/placeholder.svg?height=600&width=800&text=Schooling+Higher+Secondary",
      category: "Education",
      icon: Briefcase,
      color: "from-gray-400 via-gray-500 to-gray-500",
      technologies: ["Mechanical Engineering", "Design Optimization", "Finite Element Analysis"],
    },
    {
      name: "CI/CD Automation",
      description: "Hands-on experience with Git, GitHub, GitHub Actions, and automated testing pipelines",
      image: "/placeholder.svg?height=600&width=800&text=Jenkins+GitHub+Actions",
      category: "Automation",
      icon: Settings,
      color: "from-indigo-400 via-blue-500 to-purple-500",
      technologies: ["GitHub Actions", "Git", "GitHub"],
    },
  ]

  const projects = [
    {
      title: "Server Health Monitoring Automation Platform",
      subtitle: "Real-time infrastructure monitoring at scale",
      description:
        "Server Health Monitoring & Automation Platform — A real-world DevOps project using Python, Linux shell scripting, Docker, Kubernetes, PostgreSQL, and Grafana to automate infrastructure tasks, monitor system health, and expose REST APIs for task execution and observability.",
      technologies: ["FastAPI", "PostgreSQL", "Prometheus", "Grafana", "Kubernetes", "Python", "Docker","Linux Shell Scripting"],
      status: "Development",
      github: "https://github.com/HarshaVardhan1111/Server-Health-Monitoring-Automation-Platform.git",
      demo: "https://github.com/HarshaVardhan1111/Server-Health-Monitoring-Automation-Platform.git",
      image: "/Images/SHMA.jpg",
      metrics: { Devlopment_Stage: "3rd Phase", TotalPhase: "5" },
    },
    {
      title: "Studyspark AI",
      subtitle: "Master Anything with AI-Generated Flashcards & Practice Tests",
      description:
        "Collaborating on a full-stack web application built with React, TypeScript, Supabase, and PostgreSQL.I’m responsible for backend development, API integration, and managing GitHub version control and workflows. My work involves building and integrating RESTful APIs, handling data flow between frontend and backend, and ensuring efficient communication with Supabase. Additionally, I contribute to frontend UI fixes and feature components using HTML, CSS, and React",
      technologies: ["PostgreSQL", "REST API", "Supabase", "API integration", "React", "Typescript", "HTML", "CSS"],
      status: "Development",
      github: "https://github.com/HarshaVardhan1111/Spark-AI.git",
      image: "/Images/spark.jpg",
      metrics: { DevelopmentPhase: "2nd Phase", TotalPhase: "10", Completed: "45%" },
    },
    {
      title: "PradeepJoel Portfolio",
      subtitle: "Personal portfolio showcasing skills and projects",
      description:
        "A personal portfolio website built with React, TypeScript, and Tailwind CSS. It showcases my skills, projects, and experience in a visually appealing and responsive design. The site includes sections for an introduction, skills, projects, and contact information.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "HTML", "CSS"],
      status: "Development",
      github: "https://github.com/HarshaVardhan1111/PradeepJoel-Portfolio.git",
      image: "/Images/IMG_8393.jpeg",
      metrics: { DevelopmentPhase: "3rd Phase", TotalPhase: "5", Completed: "75%" },
    },
  ]
  const handleDownloadResume = () => {
    const resumeUrl = 'public\Harshaavardhan_Subramani_Devops.pdf'; // replace with your resume URL
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Harshaavardhan_Subramani_Devops.pdf'; // replace with your desired file name
    link.click();
  };

  const socialLinks = [
    {
      name: "GitHub",
      username: "HarshaVardhan1111",
      url: "https://github.com/HarshaVardhan1111",
      icon: Github,
      description: "Open source projects and contributions",
      color: "from-gray-600 to-gray-800",
      stats: "10+ repositories",
    },
    {
      name: "LinkedIn",
      username: "harshavardhans",
      url: "https://www.linkedin.com/in/harshaa-hv/",
      icon: Linkedin,
      description: "Professional network and career updates",
      color: "from-blue-600 to-blue-800",
      stats: "450+ connections",
    },
    {
      name: "Instagram",
      username: "@harshavardhan_rs_",
      url: "https://www.instagram.com/harshavardhan_rs_/",
      icon: Instagram,
      description: "Behind the scenes and personal moments",
      color: "from-pink-500 to-purple-600",
      stats: "Tech & Lifestyle",
    },
  ]

  const nextSkill = () => {
    setCurrentSkillIndex((prev) => (prev + 1) % skills.length)
  }

  const prevSkill = () => {
    setCurrentSkillIndex((prev) => (prev - 1 + skills.length) % skills.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSkill, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        darkMode ? "dark bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Apple-style Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Geometric Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 75% 25%, rgba(236, 72, 153, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)`,
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <div
            className="absolute top-20 left-20 w-32 h-32 border border-blue-200 dark:border-blue-800 rounded-2xl opacity-20 rotate-12"
            style={{ transform: `translateY(${scrollY * 0.05}px) rotate(${12 + scrollY * 0.01}deg)` }}
          />
          <div
            className="absolute top-40 right-32 w-24 h-24 border border-purple-200 dark:border-purple-800 rounded-full opacity-20"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          />
          <div
            className="absolute bottom-40 left-32 w-40 h-40 border border-pink-200 dark:border-pink-800 rounded-3xl opacity-20 -rotate-12"
            style={{ transform: `translateY(${scrollY * 0.02}px) rotate(${-12 - scrollY * 0.005}deg)` }}
          />
          <div
            className="absolute bottom-20 right-20 w-28 h-28 border border-green-200 dark:border-green-800 rounded-2xl opacity-20 rotate-45"
            style={{ transform: `translateY(${scrollY * -0.04}px) rotate(${45 + scrollY * 0.008}deg)` }}
          />
        </div>

        {/* Gradient Mesh */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `conic-gradient(from 0deg at 50% 50%, 
                        rgba(59, 130, 246, 0.1) 0deg, 
                        rgba(139, 92, 246, 0.1) 90deg, 
                        rgba(236, 72, 153, 0.1) 180deg, 
                        rgba(34, 197, 94, 0.1) 270deg, 
                        rgba(59, 130, 246, 0.1) 360deg)`,
            transform: `rotate(${scrollY * 0.02}deg)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/80 dark:bg-black/80 border-b border-gray-200/20 dark:border-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Harshaavardhan
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium tracking-wide transition-all duration-300 hover:text-blue-600 relative ${
                    activeSection === section ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-2xl bg-white/95 dark:bg-black/95 border-b border-gray-200/20 dark:border-gray-800/20">
            <div className="px-4 py-6 space-y-4">
              {["hero", "about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left capitalize text-lg font-medium tracking-wide transition-all duration-300 hover:text-blue-600 py-2 ${
                    activeSection === section ? "text-blue-600" : "text-gray-600 dark:text-gray-300"
                  }`}
                >
                  {section === "hero" ? "Home" : section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="min-h-screen flex items-center justify-center relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-8 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-8">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  Available for opportunities
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-none">
                <span className="block text-gray-900 dark:text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Harshaavardhan S
                </span>
              </h1>

              <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-300 tracking-wide">
                DevOps & Python Enthusiast
              </h2>
              <p className="text-lg sm:text-xl font-light text-gray-500 dark:text-gray-400 leading-relaxed">
                Architecting scalable infrastructure and building robust backend systems that power next-generation
                applications. Currently transforming digital experiences at{" "}
                <span className="text-blue-600 font-medium">Comcast</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => handleDownloadResume()}
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="px-8 py-4 text-lg font-medium rounded-2xl border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-3 h-5 w-5" />
                Explore Work
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 lg:py-32 relative z-10 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 scroll-animate">
              <div className="space-y-6 text-lg font-light leading-relaxed text-gray-600 dark:text-gray-300">
                <p>
                  I’m a driven Python Automation and DevOps Engineer at{" "}
                  <span className="text-blue-600 font-semibold">Comcast</span>, with 2.5 years of experience in building efficient, scalable infrastructure and automation solutions to support high-impact operations.
                  I specialize in backend automation using Python, REST APIs, Linux, and PostgreSQL, and have hands-on experience implementing CI/CD pipelines, Docker, Kubernetes, and monitoring with Prometheus and Grafana. I’ve successfully developed automation tools that reduced manual ad operations workflows and improved system reliability.
                </p>
                {/* <p>
                My focus is on bridging development and operations—creating systems that are not just functional, but also reliable, maintainable, and aligned with business goals.
                Currently, I’m deepening my expertise in DevOps and cloud-native technologies to deliver end-to-end infrastructure solutions that solve real-world problems.

                </p> */}
              </div>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-0 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Award className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-600 mb-1">2.5+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Years Experience</div>
                </Card>
                <Card className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-0 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <Rocket className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-purple-600 mb-1">3+</div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-300">Projects Completed</div>
                </Card>
              </div>
            </div>

            <div className="relative scroll-animate">
              <Card className="p-8 lg:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500">
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Ad Operation Analyst - 1</h3>
                      <p className="text-blue-600 font-medium">Comcast</p>
                      <p className="text-sm text-gray-500">2023 - Present</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Manage and monitor digital ad campaigns",
                      "Coordinate with sales and tech teams for campaign execution.",
                      "Built a status automation tool using Python, Pandas, and FuzzyMatching.",
                      "Reduced manual work through automation and improved reporting speed.",
                    ].map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <Zap className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <p className="text-sm font-light text-gray-600 dark:text-gray-300">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="relative scroll-animate">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div className="relative h-[500px] lg:h-[600px]">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSkillIndex
                        ? "opacity-100 transform translate-x-0"
                        : index < currentSkillIndex
                          ? "opacity-0 transform -translate-x-full"
                          : "opacity-0 transform translate-x-full"
                    }`}
                  >
                    <div className="grid lg:grid-cols-2 h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={skill.image || "/placeholder.svg"}
                          alt={skill.name}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-80`} />
                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute top-6 left-6">
                          <Badge className="bg-white/20 backdrop-blur-sm text-white border-white/30 px-4 py-2 rounded-full font-medium">
                            {skill.category}
                          </Badge>
                        </div>

                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex flex-wrap gap-2">
                            {skill.technologies.map((tech) => (
                              <Badge
                                key={tech}
                                className="bg-white/10 backdrop-blur-sm text-white border-white/20 text-xs px-3 py-1 rounded-full"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-white dark:bg-gray-900 p-8 lg:p-12 flex flex-col justify-center">
                        <div className="space-y-6">
                          <div
                            className={`w-16 h-16 bg-gradient-to-br ${skill.color} rounded-2xl flex items-center justify-center mb-6`}
                          >
                            <skill.icon className="h-8 w-8 text-white" />
                          </div>

                          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">{skill.name}</h3>
                          <p className="text-lg lg:text-xl font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSkill}
                className="rounded-full w-12 h-12 border-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-3">
                {skills.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSkillIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSkillIndex
                        ? "bg-blue-600 scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSkill}
                className="rounded-full w-12 h-12 border-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800 transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="py-20 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>

          <div className="space-y-20 lg:space-y-32">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center scroll-animate ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={`relative group ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {project.status && (
                      <Badge className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full font-medium">
                        {project.status}
                      </Badge>
                    )}

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        {Object.entries(project.metrics).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold">{value}</div>
                            <div className="text-xs opacity-80 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight">{project.title}</h3>
                    <p className="text-xl font-medium text-blue-600">{project.subtitle}</p>
                  </div>

                  <p className="text-lg font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button
                      variant="outline"
                      className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 px-6 py-3 rounded-2xl font-medium bg-transparent hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-3 h-5 w-5" />
                        View Code
                      </a>
                    </Button>
                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-2xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="mr-3 h-5 w-5" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20 scroll-animate">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-xl font-light text-gray-600 dark:text-gray-300 mt-8 max-w-2xl mx-auto">
              Ready to discuss your next project or explore opportunities? Let's build something extraordinary together.
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 scroll-animate">
            {[
              { icon: Mail, title: "Email", value: "harshajeys.11@gmail.com", color: "from-blue-500 to-blue-600" },
              { icon: Phone, title: "Phone", value: "+91 6369291823", color: "from-green-500 to-green-600" },
              { icon: MapPin, title: "Location", value: "India", color: "from-purple-500 to-purple-600" },
              { icon: Instagram, title: "Instagram", value: "@harshavardhan_rs_", color: "from-pink-500 to-pink-600" },
            ].map((contact, index) => (
              <Card
                key={index}
                className="p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl rounded-3xl text-center hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${contact.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  <contact.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{contact.title}</h3>
                <p className="text-sm font-light text-gray-600 dark:text-gray-300">{contact.value}</p>
              </Card>
            ))}
          </div>

          {/* Apple-style Social Media Section */}
          <div className="scroll-animate">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-12 tracking-tight">Follow My Journey</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {socialLinks.map((social, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="p-8 relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center`}
                      >
                        <social.icon className="h-6 w-6 text-white" />
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300" />
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-semibold mb-1">{social.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{social.username}</p>
                      </div>

                      <p className="text-sm font-light text-gray-600 dark:text-gray-300 leading-relaxed">
                        {social.description}
                      </p>

                      <div className="flex items-center justify-between pt-4">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{social.stats}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          asChild
                        >
                          <a href={social.url} target="_blank" rel="noopener noreferrer">
                            Visit
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 border-t border-gray-200/50 dark:border-gray-800/50 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Harshaavardhan S
            </h3>
            <p className="font-light text-gray-600 dark:text-gray-300">
              © 2024 Harshaavardhan S. Crafted with passion and precision.
            </p>
            <Button
              onClick={() => scrollToSection("hero")}
              className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              size="icon"
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
