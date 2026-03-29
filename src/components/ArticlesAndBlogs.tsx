import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { ExternalLink, BookOpen } from 'lucide-react'

export function ArticlesAndBlogs() {
  const articles = [
    {
      title: "Deploying Springboot App on Azure Container",
      url: "https://pgtechworkspace941539389.wordpress.com/2020/07/01/automated-service-deployment-using-jenkins-and-kubernetes-in-",
      description: "Learn how to deploy Spring Boot applications on Azure Container Instances with automated deployment strategies."
    },
    {
      title: "Deploying Springboot App on AWS ECS Fargate and exposing LB",
      url: "https://pgtechworkspace941539389.wordpress.com/2023/10/21/deploying-springboot-app-on-aws-ecs-fargate-and-exposing-lb/",
      description: "Complete guide to deploying Spring Boot applications on AWS ECS Fargate with Load Balancer configuration."
    },
    {
      title: "Automated Service deployment using Jenkins and Kubernetes",
      url: "https://pgtechworkspace941539389.wordpress.com/2020/07/01/automated-service-deployment-using-jenkins-and-kubernetes-in-",
      description: "Implement CI/CD pipelines with Jenkins and Kubernetes for automated service deployment."
    },
    {
      title: "Serverless Architecture - AWS Lambda and API Gateway",
      url: "https://pgtechworkspace941539389.wordpress.com/2020/07/01/aws-lambda- and-api-gateway/",
      description: "Building serverless applications using AWS Lambda and API Gateway for scalable solutions."
    },
    {
      title: "Metrics using Prometheus and Grafana",
      url: "https://pgtechworkspace941539389.wordpress.com/2020/07/21/springbootmetrics- using-prometheus-and-grafana/",
      description: "Implement application monitoring with Spring Boot metrics using Prometheus and Grafana."
    },
    {
      title: "Microservices Architecture – Spring Cloud",
      url: "https://pgtechworkspace941539389.wordpress.com/spring-cloud/",
      description: "Building microservices architecture using Spring Cloud framework and best practices."
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
            <BookOpen className="w-6 h-6 text-blue-600" />
            Articles and Blogs
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
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-600 rounded-lg p-4 border border-blue-200 dark:border-slate-600 hover:shadow-md transition-all duration-300 hover:scale-[1.02] group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-slate-800 dark:text-slate-200 text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-3">
                  {article.description}
                </p>
                
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium">
                  <BookOpen className="w-3 h-3" />
                  <span>Read Article</span>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6 text-center"
          >
            <a
              href="http://pgtechworkspace941539389.wordpress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <BookOpen className="w-5 h-5" />
              View All Articles
            </a>
          </motion.div>
        </CardContent>
      </Card>
    </motion.section>
  )
}
