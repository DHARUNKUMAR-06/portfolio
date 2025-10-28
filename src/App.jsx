import React from 'react'
import { motion } from 'framer-motion'

const App = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  // Resume download function
  const downloadResume = () => {
    const resumeUrl = '/Dharunkumar_Resume_7_.pdf'
    const link = document.createElement('a')
    link.href = resumeUrl
    link.download = 'Dharunkumar_V_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Modern Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-800">Portfolio</span>
            </motion.div>
            
            <div className="flex space-x-6">
              {['about', 'work', 'contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-600 hover:text-blue-600 font-medium capitalize transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.button>
              ))}
              {/* Resume Download Button */}
              <motion.button
                onClick={downloadResume}
                className="text-gray-600 hover:text-blue-600 font-medium capitalize transition-colors duration-300 relative group"
                whileHover={{ y: -2 }}
              >
                Resume
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </motion.button>
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
          <div className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="text-sm font-medium text-blue-600 mb-4 inline-block px-3 py-1 bg-blue-100 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  👋 Hello, I'm Dharunkumar V
                </motion.div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                  Full Stack
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Developer
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Passionate Computer Science student with hands-on experience in developing responsive web applications using modern technologies. Enthusiastic about learning new technologies and solving real-world problems.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button
                    onClick={() => scrollToSection('work')}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View My Work
                  </motion.button>
                  <motion.button
                    onClick={downloadResume}
                    className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Download Resume
                  </motion.button>
                </div>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 mt-8">
                  {[
                    { number: "700+", label: "CodeChef Problems" },
                    { number: "100+", label: "LeetCode Problems" },
                    { number: "8.1/10", label: "CGPA" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl flex items-center justify-center">
                    <div className="text-6xl text-white">💻</div>
                  </div>
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⚡
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-2xl flex items-center justify-center text-xl shadow-lg"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  >
                    🚀
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Work/Projects Section */}
        <section id="work" className="min-h-screen py-20 bg-gray-50">
          <WorkSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20">
          <ContactSection downloadResume={downloadResume} />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-6 flex items-center justify-center text-white text-xl font-bold">
              DV
            </div>
            <p className="text-gray-400 mb-4">
              Crafting digital experiences with passion and precision
            </p>
            <div className="flex justify-center space-x-6 mb-6">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dharunkumar-v-6826152a5/', icon: '💼' },
                { name: 'GitHub', url: 'https://github.com/DHARUNKUMAR-06', icon: '💻' },
                { name: 'Twitter', url: 'https://x.com/dharunkumar04', icon: '🐦' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

// Work Section Component
const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Smart Task Manager",
      description: "Responsive task organizer with add/delete/track features. Improved user efficiency by simplifying daily task management.",
      category: "Frontend",
      technologies: ["React", "JavaScript", "HTML", "CSS"],
      image: "📋",
      accent: "from-green-500 to-emerald-500",
      githubUrl: "https://github.com/DHARUNKUMAR-06"
    },
    {
      id: 2,
      title: "Weather Report Finder",
      description: "Weather forecasting web app with API integration. Backend handled with Node.js and Express.js for reliable performance.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "Express.js", "API"],
      image: "🌤️",
      accent: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/DHARUNKUMAR-06"
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with seamless user experience and secure payments integration.",
      category: "Full Stack",
      technologies: ["React", "Node.js", "MongoDB", "Firebase"],
      image: "🛒",
      accent: "from-purple-500 to-pink-500",
      githubUrl: "https://github.com/DHARUNKUMAR-06"
    }
  ]

  const experiences = [
    {
      role: "React Developer Intern",
      company: "Crescent EdTech",
      period: "2025",
      achievements: [
        "Designed and developed responsive web interfaces using React, HTML, CSS, and JavaScript",
        "Integrated frontend with Firebase backend for authentication and real-time data updates",
        "Collaborated on backend services with Node.js and Express.js, reducing API response time by 15%"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience & Projects</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          My professional journey and personal projects that showcase my skills
        </p>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Professional Experience</h3>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                  <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                </div>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-gray-600">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
              {/* Project Image */}
              <div className={`h-48 bg-gradient-to-br ${project.accent} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center text-6xl text-white">
                  {project.image}
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600 text-center block"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View on GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Skills Section */}
      <motion.div
        className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Technical Skills</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              category: "Programming Languages",
              skills: ["C", "Java", "JavaScript", "Python"]
            },
            {
              category: "Web Development",
              skills: ["HTML", "CSS", "Node.js", "Express.js", "React.js", "MongoDB", "Firebase"]
            },
            {
              category: "Tools & Platforms",
              skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
            }
          ].map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-gray-800 mb-4">{skillGroup.category}</h4>
              <div className="flex flex-wrap justify-center gap-2">
                {skillGroup.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to create something amazing?</h3>
          <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with modern technology and exceptional design.
          </p>
          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start a Project
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

// Contact Section Component
// Contact Section Component
const ContactSection = ({ downloadResume }) => {
  // Function to handle form submission → opens Gmail compose
  const handleSendMessage = (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const projectType = e.target.projectType.value;
    const message = e.target.message.value;

    const subject = encodeURIComponent(`New ${projectType} Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Hi Dharun,
      You have a new message from your portfolio contact form:
      👤 Name: ${firstName} ${lastName}
      📧 Email: ${email}
      💼 Project Type: ${projectType}
      📝 Message: ${message}
      Regards,${firstName}`
    );

    window.location.href = `mailto:bhuvandharun0419@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Connect</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we can work together.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always open to discussing new opportunities, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            
            <motion.button
              onClick={downloadResume}
              className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 mb-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download My Resume
            </motion.button>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            {[
              {
                icon: "📧",
                title: "Email",
                value: "bhuvandharun0419@gmail.com",
                description: "I'll respond within 24 hours",
                link: "mailto:bhuvandharun0419@gmail.com"
              },
              {
                icon: "📍",
                title: "Location",
                value: "Namakkal, Tamil Nadu",
                description: "Open to remote work worldwide"
              },
              {
                icon: "💼",
                title: "Availability",
                value: "Available for projects",
                description: "Starting new collaborations"
              },
              {
                icon: "🎓",
                title: "Education",
                value: "B.E. Computer Science",
                description: "Muthayammal Engineering College"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="flex items-start space-x-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-gray-800">{item.title}</h4>
                  {item.link ? (
                    <a href={item.link} className="text-blue-600 hover:underline">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{item.value}</p>
                  )}
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {[
                { name: "GitHub", icon: "💻", url: "https://github.com/DHARUNKUMAR-06" },
                { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/dharunkumar-v-6826152a5/" },
                { name: "Twitter", icon: "🐦", url: "https://x.com/dharunkumar04" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-lg hover:bg-gray-200 transition-colors duration-300 hover:scale-110 transform"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSendMessage} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Dharun"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  placeholder="Kumar"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="abc@gmail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
              <select
                name="projectType"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
              >
                <option>Web Application</option>
                <option>Mobile App</option>
                <option>Website</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};


export default App