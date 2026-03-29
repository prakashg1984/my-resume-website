import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Code, Database, Cloud, Cpu, Server } from 'lucide-react'

export function TechnicalSkills() {
  const skills = {
    "Programming Languages": ["Java", "Python", "Groovy", "SQL"],
    "Java Technologies": ["Spring Boot", "Spring MVC", "Spring Security", "JPA/Hibernate", "Rest WS"],
    "Web Technologies": ["React", "HTML5", "CSS3", "RESTful APIs"],
    "Database & Storage": ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis", "Apache SOLR"],
    "Cloud Providers & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    "Cloud Solutions": ["EventHub", "AKS", "Cosmos DB", "Logic Apps", "ADX", "EC2", "S3", "RDS", "Lambda"],
    "Architecture & Patterns": ["Microservices", "Event-Driven", "Domain-Driven Design", "CI/CD", "CQRS"]
  }

  const icons = {
    "Programming Languages": Code,
    "Java Technologies": Cpu,
    "Web Technologies": Code,
    "Database & Storage": Database,
    "Cloud Providers & DevOps": Cloud,
    "Cloud Solutions": Cloud,
    "Architecture & Patterns": Server
  }

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
            <Code className="w-6 h-6 text-blue-600" />
            Technical Skills
          </CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {Object.entries(skills).map(([category, skillList], index) => {
              const Icon = icons[category as keyof typeof icons]
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4 border border-slate-200 dark:border-slate-600"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200">
                      {category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
