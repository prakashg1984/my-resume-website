import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Mail, Phone, MapPin, Linkedin, Github, Download } from 'lucide-react'

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "prakashg8@gmail.com",
      href: "mailto:prakashg8@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (647) 646-0761",
      href: "tel:+16476460761"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mississauga, ON",
      href: "#"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/prakashganaesan",
      href: "https://linkedin.com/in/prakashganaesan"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/prakashg",
      href: "https://github.com/prakashg1984/TechPocWorkspace"
    },
    {
      icon: Github,
      label: "Blog",
      value: "blog.com/prakashg",
      href: "http://pgtechworkspace941539389.wordpress.com/"
    }
  ]

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-2xl font-bold text-slate-800 dark:text-slate-200">
            <Mail className="w-6 h-6 text-blue-600" />
            Get In Touch
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              I'm always interested in discussing new opportunities, challenging projects, or innovative ideas.
              Feel free to reach out if you'd like to connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:prakashg8@gmail.com" className="inline-flex">
                <Button size="lg" className="gap-2">
                  <Mail className="w-5 h-5" />
                  Send Email
                </Button>
              </a>
              <a 
                href="/src/Prakash_JAVA_J2EE_TECHNOLOGY_ARCHITECT_March2026.pdf" 
                download="Prakash_JAVA_J2EE_TECHNOLOGY_ARCHITECT_March2026.pdf"
                className="inline-flex"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon
              return (
                <motion.a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : '_self'}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="flex items-center gap-3 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600 transition-colors group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{contact.label}</p>
                    <p className="font-semibold text-slate-800 dark:text-slate-200">{contact.value}</p>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center pt-6 border-t border-slate-200 dark:border-slate-700"
          >
            <p className="text-sm text-slate-500 dark:text-slate-400">
              © 2024 Prakash. All rights reserved. | Built with React & TypeScript
            </p>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
