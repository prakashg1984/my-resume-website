import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Briefcase, Calendar } from 'lucide-react'

export function CareerCounter() {
  const careerStats = [
    {
      company: "Tech Mahindra",
      role: "Technology Architect",
      period: "JAN 2022 – Till Date",
      currentDesignation: "Technology Architect – (Jan 2022 – Till Date)",
      highlights: [
        "Technical Migration and Modernization of legacy Services into Spring Boot Microservices",
        "Migrate deployment from OnPrem to Azure",
        "Leading Digital Enterprise Platform and Transformation Solutions for US Telecom giant"
      ]
    },
    {
      company: "Infosys",
      role: "Technology Architect",
      period: "JULY 2006 – DEC 2021",
      lastDesignation: "Technology Architect – (Jan 2019 – Dec 2021)",
      highlights: [
        "Order capture and Orchestration engine implementation for US Telecom Client",
        "Ranking Algorithm Portal for US Client",
        "Service and Inventory Data Migration and Consolidation",
        "Implementation of Telecom OSS/BSS Stack for Belgium Telecom Giant",
        "Developed Migration Scripts and ETL solutions for data migration for UK Telecom Client",
      ]
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
            <Briefcase className="w-6 h-6 text-blue-600" />
            Career Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {careerStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-6 border border-blue-200 dark:border-slate-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                    {stat.company}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">
                    {stat.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="w-4 h-4" />
                    {stat.period}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="mb-3">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    {stat.currentDesignation || stat.lastDesignation}
                  </h4>
                </div>
                
                <ul className="space-y-2">
                  {stat.highlights.map((highlight, highlightIndex) => (
                    <motion.li
                      key={highlightIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.05 * highlightIndex }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                    >
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  )
}
