import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

export function ProfessionalExperience() {
  const experiences = [
    {
      title: "Technology Architect",
      company: "Tech Mahindra.",
      location: "Toronto, Canada",
      period: "2022 - Present",
      description: "Technical Migration and Modernization of legacy Services into Spring Boot Microservices and migrate the deployment from OnPrem to Azure.",
      responsibilities: [
        "Did the overall design of the new Architecture to Migrate legacy applications into an Event Based Architecture and CQRS pattern using Spring Boot Microservices, Kafka(Later into EventHub), Apache SOLR and Cassandra (Later into CosmosDB).",
        "Worked on the design and development of spring boot micro services for some of the APIs and deploying them in Kubernetes using Docker and Jenkins pipeline. Services are using latest Spring Boot technologies and for some use cases are using Spring-Batch, Spring-Cloud and Spring-Schedulers.",
        "Worked on the high-level design for porting these applications into Cloud and handling traffic on both On-Prem and Cloud with near real-time replications.",
        "Integrated the application with Some of the Cloud offerings in Azure including EventHub, CosmosDB, Logic Apps, App Config.",
        "Worked along with the Cloud infra team to solve the networking requirements for these Microservices and integrations with both Cloud and OnPrem applications.",
        "Designed and Implemented the automated region outage handling for Active-Active components.",
        "Worked on Java17 and SpringBoot 3 Migration of these services."
      ]
    },
    {
      title: "Technology Architect",
      company: "Infosys Technologies",
      location: "Dallas, TX, USA ; Toronto, Canada",
      period: "2014 - 2021",
      description: "Implementing an Order capture and Orchestration engine to process and manage all the Wireless, DTV and Uverse orders.",
      responsibilities: [
        "Handling the design and development of backend Rest APIs for capturing and processing the Orders in the system.",
        "Resposible for the Order Intake and Order Orchestration design. Integrated with different systems for Order Fulfillment, Billing and Payment Authorizations.",
        "Developed Rest APIs using Jersey and Jax-RS.",
        "Developed the Order Intake and Fulfillment APIs loosely based on TMForum Open API Standards.",
        "Developed Workflow Orchestration using Camunda BPM and Camel.",
        "Used ATG repository as a ORM layer for order and profile repositories.",
        "Used Hibernate for the rest of the data models.",
        "Worked on the design and development of spring boot micro services for some of the APIs and deploying them in Kubernetes using Docker and Jenkins pipeline.",
        "Worked on the design and development of Event-based architecture and CQRS patten using Kafka and MongoDB.",
        "Handled the technical lead/architect role in designing and developing APIs and in providing technical solution for various functional requirements.",
        "Worked at client side with direct interaction with client and business to elicit new requirements and convert them into technical solutions."
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
            Professional Experience
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="border-l-4 border-blue-600 pl-6 relative"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-sm text-slate-600 dark:text-slate-400 mt-2 lg:mt-0">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>
              <div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                    {exp.description}
                  </h3>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <motion.li
                    key={respIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * respIndex }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-slate-600 dark:text-slate-300"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>{responsibility}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </CardContent>
      </Card>
    </motion.section>
  )
}
