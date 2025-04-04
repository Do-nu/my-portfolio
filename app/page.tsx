import type React from "react"
import Link from "next/link"
import Image from "next/image"
import Donu from '../public/IMG-20240308-WA0007.jpg'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Code,
  Palette,
  Smartphone,
  Database,
  Server,
} from "lucide-react"

// Add these TypeScript interfaces at the top of the file, before the Portfolio component
interface Project {
  title: string
  description: string
  image: string
  category: string
  technologies: string[]
}

interface SkillCardProps {
  icon: React.ReactNode
  title: string
  skills: string[]
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 backdrop-blur-md bg-black/70 border-b border-[#ce74ce]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            <span className="font-light text-[#ce74ce]">Donu</span> Forghe
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="#about" className="text-white/80 hover:text-[#c8a2c8] transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-white/80 hover:text-[#c8a2c8] transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-white/80 hover:text-[#c8a2c8] transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-white/80 hover:text-[#c8a2c8] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#c8a2c8] hover:bg-[#c8a2c8]/80 text-black">
            <Mail className="mr-2 h-4 w-4" /> Get in Touch
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#c8a2c8] to-transparent" />
            <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
              {Array.from({ length: 100 }).map((_, i) => (
                <div key={i} className="border-[0.5px] border-[#c8a2c8]/10" />
              ))}
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-1">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2 space-y-6">
                <div className="inline-block px-3 py-1 bg-[#c8a2c8]/10 text-[#c8a2c8] rounded-full text-sm font-medium mb-2">
                  Frontend Developer
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Creating <span className="text-[#c8a2c8]">beautiful</span> web experiences
                </h1>
                <p className="text-lg text-white/70">
                  {`I'm a passionate frontend developer specializing in creating responsive, user-friendly websites and
                  applications with modern technologies.`}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-[#c8a2c8] hover:bg-[#c8a2c8]/80 text-black">
                    View My Work <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="border-[#c8a2c8] text-[#c8a2c8] hover:bg-[#c8a2c8]/10">
                    Download Resume
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href="https://github.com/Do-nu" className="text-white/60 hover:text-[#c8a2c8] transition-colors">
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link href="https://linkedin.com/in/donubari-forghe" className="text-white/60 hover:text-[#c8a2c8] transition-colors">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link href="mailto:donuforghe@gmail.com" className="text-white/60 hover:text-[#c8a2c8] transition-colors">
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#c8a2c8]/30">
                  <Image
                    src={Donu}
                    alt="Donu Developer"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <Image
                  src={Donu}
                  alt="About Me"
                  width={500}
                  height={600}
                  className="rounded-lg shadow-lg shadow-[#c8a2c8]/20"
                />
              </div>
              <div className="md:w-1/2 space-y-6">
                <h2 className="text-3xl font-bold">
                  About <span className="text-[#c8a2c8]">Me</span>
                </h2>
                <p className="text-white/70">
                  {`Hello! I'm Donubari (Donu works too), a frontend developer with a passion for creating beautiful, functional, and
                  user-friendly websites. With over 3 years of experience in the field, I've worked on a variety of
                  projects ranging from small business websites to large-scale web applications.`}
                </p>
                <p className="text-white/70">
                  My journey in web development began when I discovered my love for combining creativity with logical
                  problem-solving. I enjoy the process of turning ideas into reality through code and design.
                </p>
                <p className="text-white/70">
                  {`When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, reading,
                  or enjoying outdoor activities to recharge my creative energy.`}
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                  {/* <div className="space-y-1">
                    <h3 className="font-medium text-[#c8a2c8]">Education</h3>
                    <p className="text-white/70">B.S. Computer Science</p>
                    <p className="text-sm text-white/50">University of Technology</p>
                  </div> */}
                  <div className="space-y-1">
                    <h3 className="font-medium text-[#c8a2c8]">Experience</h3>
                    <p className="text-white/70">3+ Years</p>
                    <p className="text-sm text-white/50">Frontend Development</p>
                  </div>
                  {/* <div className="space-y-1">
                    <h3 className="font-medium text-[#c8a2c8]">Location</h3>
                    <p className="text-white/70">San Francisco, CA</p>
                    <p className="text-sm text-white/50">Available for Remote Work</p>
                  </div> */}
                  <div className="space-y-1">
                    <h3 className="font-medium text-[#c8a2c8]">Languages</h3>
                    <p className="text-white/70">English</p>
                    <p className="text-sm text-white/50">Fluent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                My <span className="text-[#c8a2c8]">Projects</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project represents a unique challenge and showcases different
                skills and technologies.
              </p>
            </div>

            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-black/30 border border-[#c8a2c8]/20">
                  <TabsTrigger value="all" className="text-white data-[state=active]:bg-lilac data-[state=active]:text-black">All Projects</TabsTrigger>
                  <TabsTrigger value="websites" className="text-white data-[state=active]:bg-lilac data-[state=active]:text-black">Websites</TabsTrigger>
                  <TabsTrigger value="apps" className="text-white data-[state=active]:bg-lilac data-[state=active]:text-black">Web Apps</TabsTrigger>
                  <TabsTrigger value="ui" className="text-white data-[state=active]:bg-lilac data-[state=active]:text-black">UI Design</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project: Project, index: number) => (
                    <ProjectCard key={index} project={project} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="websites" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p: Project) => p.category === "Website")
                    .map((project: Project, index: number) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="apps" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p: Project) => p.category === "Web App")
                    .map((project: Project, index: number) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="ui" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects
                    .filter((p: Project) => p.category === "UI Design")
                    .map((project: Project, index: number) => (
                      <ProjectCard key={index} project={project} />
                    ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">
                My <span className="text-[#c8a2c8]">Skills</span>
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                {`I've worked with a variety of technologies and tools throughout my career. Here are some of the key
                skills I bring to the table.`}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <SkillCard
                icon={<Code className="h-8 w-8 text-[#c8a2c8]" />}
                title="Frontend Development"
                skills={["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Vue.js"]}
              />
              <SkillCard
                icon={<Palette className="h-8 w-8 text-[#c8a2c8]" />}
                title="UI/UX Design"
                skills={["Figma", "Adobe XD", "Responsive Design", "User Experience", "Wireframing", "Prototyping"]}
              />
              <SkillCard
                icon={<Smartphone className="h-8 w-8 text-[#c8a2c8]" />}
                title="Mobile Development"
                skills={["React Native", "Progressive Web Apps", "Mobile-First Design", "Cross-Browser Compatibility"]}
              />
              <SkillCard
                icon={<Database className="h-8 w-8 text-[#c8a2c8]" />}
                title="Backend Knowledge"
                skills={["Node.js", "Express", "RESTful APIs", "GraphQL", "Firebase", "MongoDB"]}
              />
              <SkillCard
                icon={<Server className="h-8 w-8 text-[#c8a2c8]" />}
                title="DevOps & Tools"
                skills={["Git", "GitHub", "CI/CD", "Vercel", "Netlify", "Docker", "AWS"]}
              />
              <SkillCard
                icon={<Code className="h-8 w-8 text-[#c8a2c8]" />}
                title="Other Skills"
                skills={["Tailwind CSS", "SASS/SCSS", "Redux", "Jest", "Cypress", "Storybook", "Webpack"]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-black/40 p-8 md:p-12 rounded-xl border border-[#c8a2c8]/20 shadow-lg shadow-[#c8a2c8]/10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">
                  Get In <span className="text-[#c8a2c8]">Touch</span>
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto">
                  {`Have a project in mind or want to discuss potential opportunities? I'd love to hear from you! Fill out
                  the form below and I'll get back to you as soon as possible.`}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-[#c8a2c8]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 bg-black/50 border border-[#c8a2c8]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a2c8]/50 text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-[#c8a2c8]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 bg-black/50 border border-[#c8a2c8]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a2c8]/50 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#c8a2c8]">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-2 bg-black/50 border border-[#c8a2c8]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a2c8]/50 text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-medium text-[#c8a2c8]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      className="w-full px-4 py-2 bg-black/50 border border-[#c8a2c8]/30 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c8a2c8]/50 text-white resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-[#c8a2c8] hover:bg-[#c8a2c8]/80 text-black">Send Message</Button>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-[#c8a2c8]/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <Mail className="h-6 w-6 mx-auto text-[#c8a2c8]" />
                    <h3 className="font-medium">Email</h3>
                    <p className="text-white/70">donuforghe@gmail.com</p>
                  </div>
                  <div className="space-y-2">
                    <Linkedin className="h-6 w-6 mx-auto text-[#c8a2c8]" />
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-white/70">linkedin.com/in/donubari-forghe</p>
                  </div>
                  <div className="space-y-2">
                    <Github className="h-6 w-6 mx-auto text-[#c8a2c8]" />
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-white/70">github.com/Do-nu</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-[#c8a2c8]/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link href="/" className="text-xl font-bold text-[#c8a2c8]">
                <span className="font-light">Donu</span> Forghe
              </Link>
              <p className="text-sm text-white/50 mt-1">© {new Date().getFullYear()} All Rights Reserved</p>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-white/60 hover:text-[#c8a2c8] transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#c8a2c8] transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-white/60 hover:text-[#c8a2c8] transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Project Card Component
function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden bg-black/40 border-[#c8a2c8]/20 hover:border-[#c8a2c8]/50 transition-all duration-300 group">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex gap-2">
            <Button size="sm" variant="outline" className="bg-black/50 border-white/20 text-white hover:bg-black/70">
              <ExternalLink className="h-4 w-4 mr-1" /> View
            </Button>
            <Button size="sm" variant="outline" className="bg-black/50 border-white/20 text-white hover:bg-black/70">
              <Github className="h-4 w-4 mr-1" /> Code
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{project.title}</h3>
          <span className="text-xs bg-[#c8a2c8]/20 text-[#c8a2c8] px-2 py-1 rounded-full">{project.category}</span>
        </div>
        <p className="text-white/70 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="text-xs bg-black/50 border border-[#c8a2c8]/30 px-2 py-1 rounded-full text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// Skill Card Component
function SkillCard({ icon, title, skills }: SkillCardProps) {
  return (
    <div className="bg-black/40 border border-[#c8a2c8]/20 rounded-xl p-6 hover:border-[#c8a2c8]/50 transition-all duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="font-bold text-lg ml-3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string, index: number) => (
          <span key={index} className="text-sm bg-black/50 border border-[#c8a2c8]/30 px-3 py-1 rounded-full text-white/80">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

// Sample project data
const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web App",
    technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Portfolio Website",
    description: "A creative portfolio website for a photographer showcasing their work with a beautiful gallery.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Website",
    technologies: ["HTML", "CSS", "JavaScript", "GSAP"],
  },
  {
    title: "Task Management App",
    description: "A productivity app that helps users organize tasks, set deadlines, and track progress.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web App",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
  },
  {
    title: "Restaurant Website",
    description: "A website for a local restaurant featuring online reservations and menu browsing.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Website",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Travel Blog",
    description: "A blog website for travel enthusiasts with content management system and comment functionality.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Web App",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Dashboard UI Kit",
    description: "A comprehensive UI kit for creating admin dashboards and data visualization interfaces.",
    image: "/placeholder.svg?height=300&width=500",
    category: "UI Design",
    technologies: ["Figma", "Adobe XD", "Sketch"],
  },
]

