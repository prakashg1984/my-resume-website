import { motion } from 'framer-motion'
import { Header } from './components/Header'
import { ProfessionalSummary } from './components/ProfessionalSummary'
import { TechnicalSkills } from './components/TechnicalSkills'
import { ProfessionalExperience } from './components/ProfessionalExperience'
import { Education } from './components/Education'
import { CareerCounter } from './components/CareerCounter'
import { Certifications } from './components/Certifications'
import { ArticlesAndBlogs } from './components/ArticlesAndBlogs'
import { Contact } from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <ProfessionalSummary />
          <TechnicalSkills />
          <ProfessionalExperience />
          <Education />
          <CareerCounter />
          <Certifications />
          <ArticlesAndBlogs />
          <Contact />
        </motion.div>
      </main>
    </div>
  )
}

export default App
