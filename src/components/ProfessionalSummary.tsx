import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { User, Briefcase, Award } from 'lucide-react'

export function ProfessionalSummary() {
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
            <User className="w-6 h-6 text-blue-600" />
            Professional Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg"
          >
           Experienced Professional with 19 years of IT experience in Java, J2EE, UNIX, Oracle, ETL, AWS, Azure, Micro Services architecture,
Digital transformations, Cloud Migrations etc. With domain expertise in Telecom and Datacom. Extensive experience in
every stage of the software cycle including Requirement Analysis, Solution and Technical Design, Development, Testing,
Performance Tuning and Production Support. Having more than 10 years of good exposure with direct client interaction
in Europe, Canada, and the US. Good experiences in the role as Java Solutions/Technical Architect and Team lead
handling multiple projects and managing multiple teams. Currently handling the role of a Technical Architect and Lead for
implementing the Digital Enterprise Platform and Transformation Solutions for a Telecom giant. Hands on experience on
Digital Transformations and Cloud Migrations using some of the Niche Cloud Technologies on AWS and Azure. Currently
have valid PR for Canada.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-4 mt-6"
          >
            
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Architecture</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Designed and developed microservices and cloud-native solutions to migrate legacy systems into Microservices and deploy them into Azure Cloud. 
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Innovation</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Implemented cutting-edge technologies and best practices for cloud migrations and digital transformations including latest Microservices Architecture, Event Driven Design and latest CI-CD approaches.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-slate-200">Leadership</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Led multiples teams of 10+ developers to implement Modernization and Digital Transformation projects.
                </p>
              </div>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
