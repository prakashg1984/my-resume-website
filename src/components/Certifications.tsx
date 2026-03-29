import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Award, Calendar, ExternalLink } from 'lucide-react'

export function Certifications() {
  const certifications = [
    {
      name: "Information Framework (SID) Foundation Level Exam",
      issuer: "TM Forum",
      date: "2024",
      credentialId: "216113204"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google",
      date: "2023",
      credentialId: "6236783",
      verification: "https://www.skills.google/public_profiles/d19aa09b-e1c2-4828-aa71-13b3b15484af/badges/6236783?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share"
    },
    {
      name: "TM Forum Open API Foundation Level Exam",
      issuer: "TM Forum",
      date: "2024",
      credentialId: "234501353"
    },
    {
      name: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2025",
      credentialId: "59C45DAD9CD11CCF",
      verification: "https://learn.microsoft.com/api/credentials/share/en-us/PrakashGanaesan-3279/59C45DAD9CD11CCF?sharingId"
    },
    {
      name: "Prompt Engineering for Everyone",
      issuer: "Cognitive Class",
      date: "2026",
      credentialId: "20f38f2384854eeba8e6f0b5b0d5e72d",
      verification: "https://courses.cognitiveclass.ai/certificates/20f38f2384854eeba8e6f0b5b0d5e72d"
    },
    {
      name: "Python 101 for Data Science",
      issuer: "Cognitive Class",
      date: "2026",
      credentialId: "121e85b2aced4b6eb07ead9905d2b69d",
      verification: "https://courses.cognitiveclass.ai/certificates/121e85b2aced4b6eb07ead9905d2b69d"
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
            <Award className="w-6 h-6 text-blue-600" />
            Certifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-4 border border-blue-200 dark:border-slate-600 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 dark:text-slate-200 mb-2">
                      {cert.name}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      {cert.date}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      ID: {cert.credentialId}
                    </p>
                  </div>
                  
                  <motion.a
                    href={cert.verification}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-3 font-medium"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify Certificate
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
