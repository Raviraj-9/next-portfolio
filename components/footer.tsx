import { Linkedin, Github, Mail, Heart } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:mrpatil2004@gmail.com"
              className="p-2 bg-white dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-200 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>

          
        </div>
      </div>
    </footer>
  )
}
