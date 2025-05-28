import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

/**
 * Reactive Portfolio – now with classic and colorful visual enhancements.
 */
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  const person = {
    name: "Navneet Kaur",
    tagline: "Full-stack Developer | Crafting delightful web experiences",
    summary:
      "I build performant web apps with React, Node, and a sprinkle of design magic.",
    links: {
      github: "https://github.com/NavneetKaur49",
      linkedin: "https://www.linkedin.com/in/navneetcodes/",
      email: "mailto:nav87170@gmail.com",
      resume: "/resume.pdf",
    },
  };

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "MySQL",
    "Python",
    "Go",
  ];

  const projects = [
    {
      title: "Event Management System",
      description:
        "A full-stack platform for creating and managing events, built with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/navneet-creator/Event-Management-System",
    },
    {
      title: "Mobile Weather App",
      description:
        "Progressive Web App that provides real-time weather updates and forecasts.",
      tech: ["Vue", "OpenWeather API"],
      link: "https://github.com/navneet-creator/Weather-App",
    },
    {
      title: "Conway's Game of Life",
      description:
        "Interactive simulation with adjustable speed and grid size using React hooks.",
      tech: ["React", "Canvas"],
      link: "https://github.com/navneet-creator/Game-of-Life",
    },
  ];

  const certifications = [
    {
      title: "Meta Front-End Developer Certificate",
      issuer: "Coursera / Meta",
      date: "May 2024",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ABCDEFG12345",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "Amazon Web Services",
      date: "March 2024",
      link: "https://aws.amazon.com/training/digital/aws-cloud-practitioner-essentials/",
    },
  ];

  const Header = () => (
    <header className="fixed top-0 w-full flex justify-between items-center p-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow z-50">
      <h1 className="text-lg font-bold tracking-wide">{person.name}</h1>
      <div className="flex items-center space-x-2">
        <Switch
          checked={dark}
          onCheckedChange={setDark}
          aria-label="Toggle dark mode"
        />
        {dark ? <Sun size={16} /> : <Moon size={16} />}
      </div>
    </header>
  );

  const Hero = () => (
    <section className="text-center py-24 px-4 bg-gradient-to-br from-yellow-100 via-pink-100 to-blue-100 dark:from-gray-900 dark:to-black">
      <motion.h2
        className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {person.tagline}
      </motion.h2>
      <p className="max-w-2xl mx-auto text-lg text-gray-800 dark:text-gray-300">
        {person.summary}
      </p>
      <div className="mt-6 flex justify-center space-x-6">
        <a href={person.links.github} aria-label="GitHub"           
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600 dark:hover:text-purple-300"><Github /></a>
        <a href={person.links.linkedin} aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 dark:hover:text-blue-300"><Linkedin /></a>
        <a href={person.links.email} aria-label="Email" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600 dark:hover:text-pink-300"><Mail /></a>
        <a
          href={person.links.resume}
          aria-label="Resume"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-sm bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full shadow hover:scale-105 transition-transform"
        >
          <ArrowUpRight size={16} /> <span>Resume</span>
        </a>
      </div>
    </section>
  );

  const Skills = () => (
    <section className="py-12 px-4 bg-white dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Skills</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
        {skills.map(skill => (
          <span
            key={skill}
            className="text-sm font-medium bg-gradient-to-r from-blue-200 to-purple-200 dark:from-gray-700 dark:to-gray-800 px-4 py-2 rounded-full shadow"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );

  const Projects = () => (
    <section className="py-12 px-4 bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-gray-800 dark:to-gray-900">
      <h3 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.title} className="shadow-xl border border-purple-200 dark:border-gray-700">
            <CardHeader>
              <h4 className="text-xl font-semibold text-purple-800 dark:text-purple-300">{project.title}</h4>
            </CardHeader>
            <CardContent>
              <p className="mb-2 text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Project ↗
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const Certifications = () => (
    <section className="py-12 px-4 bg-white dark:bg-gray-900">
      <h3 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">Certifications</h3>
      <div className="grid gap-4 max-w-3xl mx-auto">
        {certifications.map(cert => (
          <Card key={cert.title} className="shadow border border-gray-200 dark:border-gray-700">
            <CardHeader>
              <h4 className="text-lg font-semibold text-purple-700 dark:text-purple-300">{cert.title}</h4>
            </CardHeader>
            <CardContent className="text-gray-700 dark:text-gray-300">
              <p><strong>Issuer:</strong> {cert.issuer}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                View Certificate ↗
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );

  const Contact = () => (
    <section className="py-12 px-4 text-center bg-white dark:bg-gray-900">
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Let's Connect</h3>
      <p className="text-gray-600 dark:text-gray-400">Feel free to reach out through any of the platforms above.</p>
    </section>
  );

  const Footer = () => (
    <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-gray-800 dark:to-gray-900">
      © {new Date().getFullYear()} {person.name}. All rights reserved.
    </footer>
  );

  return (
    <div className="font-sans antialiased bg-white dark:bg-black text-black dark:text-white transition-colors">
      <Header />
      <main className="pt-20">
        <Hero />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
