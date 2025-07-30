// src/components/Portfolio.jsx
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Code, Database, Smartphone, Globe, Star, Calendar, User, Briefcase, GraduationCap, Award, ArrowUp } from 'lucide-react';
import profileImage from './images/i4.jpg'
import middleImage from './images/I3.jpg'


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  
  const roles = ['Frontend Developer', 'Data Analyst', 'React Specialist', 'Node.js Expert'];
  const currentRoleRef = useRef(0);
  const charIndexRef = useRef(0);
  const isTypingRef = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const typeWriter = () => {
      const currentRoleText = roles[currentRoleRef.current];
      
      if (isTypingRef.current) {
        if (charIndexRef.current < currentRoleText.length) {
          setTypedText(currentRoleText.substring(0, charIndexRef.current + 1));
          charIndexRef.current++;
        } else {
          isTypingRef.current = false;
          setTimeout(() => {
            isTypingRef.current = false;
          }, 2000);
        }
      } else {
        if (charIndexRef.current > 0) {
          setTypedText(currentRoleText.substring(0, charIndexRef.current - 1));
          charIndexRef.current--;
        } else {
          isTypingRef.current = true;
          currentRoleRef.current = (currentRoleRef.current + 1) % roles.length;
        }
      }
    };

    const interval = setInterval(typeWriter, isTypingRef.current ? 100 : 50);
    return () => clearInterval(interval);
  }, [typedText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const experiences = [
    {
      company: "Barclays",
      position: "Data Analyst",
      period: "Jul 2023 - Present",
      description: "Supported critical credit applications at Barclays by automating processes, reducing incidents through root cause fixes, and driving stability improvements across production systems.",
      achievements: ["Cut incidents by 30% via automation","Automated vendor feed handling","Led global event support and changes"]
    },
    {
      company: "Prodigal SoftTech India Pvt. Ltd",
      position: "Data Analyst",
      period: "Nov 2022 - Jul 2023",
      description: "Designed and developed a Flutter-based Android application, increasing user interaction by 20%. Refactored database queries and indexing, reducing data fetch latency by 25%.",
      achievements: [  "Built Flutter app; boosted interaction by 20%","Reduced fetch latency by 25%","Cleaned large data for ML insights"]
    },
    {
      company: "Petro IT",
      position: "Frontend Developer",
      period: "Jan 2020 - May 2021",
      description: "Developed Flutter-based Android apps, improving user engagement by 20%. Managed databases, reducing data retrieval time by 25%.",
      achievements: [  "Enhanced app engagement by 20%","Cut data load time by 25%","Shipped stable mobile releases"]
    }
  ];

  const projects = [
    {
      title: "Feed Management Application",
      description: "Engineered a scalable backend for feed data parsing and automation, boosting processing speed by 50%.",
      image: "https://www.shutterstock.com/shutterstock/photos/2428568631/display_1500/stock-photo-ai-driven-workflow-automating-data-management-analytics-and-business-reports-with-kpis-predictive-2428568631.jpg",
      tech: ["Python, Shell Script, JavaScript"],
      github: "#",
      live: "#"
    },
    {
      title: "Vehicle Detection and Speed Tracking System",
      description: "A frame-based tracking algorithm that improves motion detection accuracy by 35% over baseline models",
      image: "https://www.aldridgetrafficcontrollers.com.au/Images/UserUploadedImages/233/Technical_drawing_Grey.jpg",
      tech: ["Python", "OpenCV", "Computer Vision"],
      github: "#",
      live: "#"
    },
    {
      title: "Sashakt - Empowering the Urban Labourers",
      description: "A blockchain-based attendance and payroll management system designed to ensure transparency and timely payments for urban laborers.",
      image: "https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/202106/MIT-Algorand-01_0.jpg?itok=kc8Jm3nW",
      tech: ["HTML", "CSS", "JavaScript", "Solidity", "Web3.js"],
      github: "#",
      live: "#"
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"], icon: Globe },
    { category: "Backend", items: ["Node.js", "Python", "Express", "Django", "GraphQL"], icon: Database },
    { category: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"], icon: Smartphone },
    { category: "Tools", items: ["Docker", "AWS", "Git", "MongoDB", "PostgreSQL"], icon: Code }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 capitalize ${
                      activeSection === item
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current h-0.5 w-6 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                  <span className={`bg-current h-0.5 w-6 my-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`bg-current h-0.5 w-6 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 rounded-md transition-all duration-300 capitalize w-full text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-400/50 shadow-2xl animate-pulse"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Ananya Sharma
          </h1>
          
          <div className="text-xl md:text-3xl text-gray-300 mb-8 h-12 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold min-w-[300px] text-left">
              {typedText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            "Data Analyst skilled in SQL, Python, and visualization, turning complex data into actionable 
            insights and automation-driven solutions."
.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m Ananya Sharma, a Data Analyst passionate about transforming raw data into meaningful 
                insights that drive smart business decisions. I specialize in SQL, Python, and data visualization tools 
                like Tableau and Power BI, with experience in automating processes, streamlining workflows, 
                and uncovering trends through data storytelling.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working at Barclays, I focus on and building automation solutions for difficult data that saves time and reduce manual effort. 
                My approach combines analytical thinking with a problem-solving mindset to deliver accurate, actionable, and impactful solutions. 
                When I’m not analyzing datasets, you can find me exploring new tools, learning about finance and technology, or engaging in creative projects.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="text-blue-400" size={20} />
                  <span className="text-gray-300">Pune, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="text-blue-400" size={20} />
                  <span className="text-gray-300">3 Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <GraduationCap className="text-blue-400" size={20} />
                  <span className="text-gray-300">CS Degree</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="text-blue-400" size={20} />
                  <span className="text-gray-300">20+ Projects</span>
                </div>
              </div>
              
            
              <button 
              onClick={() => {
               const link = document.createElement('a');
              link.href = 'https://drive.google.com/file/d/1Us9FDZOpbZLpYVagxpf8_qFJQ8MvwFBz/view?usp=sharing ';
              link.download = 'AnanyaSharma_Resume.pdf';
              link.click();
              }}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
                <Download size={20} />
                <span>Download Resume</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={middleImage}
                  alt="About me"
                  style={{ width: '400px', height: '500px' }}
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </div>
          
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-500" />
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-12 md:ml-0`}>
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-center mb-4">
                      <Briefcase className="text-blue-400 mr-3" size={24} />
                      <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                    </div>
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">{exp.company}</h4>
                    <p className="text-gray-400 mb-4">{exp.period}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center">
                          <Star className="text-yellow-400 mr-2" size={16} />
                          <span className="text-gray-300 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <skillGroup.icon className="text-blue-400 mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                <div className="space-y-3">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-gray-300">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={12}
                            className={`${starIndex < 4 ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
     
      <section className="py-20 bg-slate-900">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
    
    <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
      Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {/* Email */}
      <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
        <p className="text-gray-300">ananyasharma07040@gmail.com</p>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <Phone className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
        <p className="text-gray-300">+91 9009624513</p>
      </div>

      {/* Location */}
      <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
          <MapPin className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
        <p className="text-gray-300">Pune, India</p>
      </div>
    </div>

    {/* Social Links */}
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
      <div className="flex justify-center space-x-4">
        <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
          <Github className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
          <Linkedin className="w-6 h-6 text-white" />
        </a>
        <a href="#" className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300">
          <Mail className="w-6 h-6 text-white" />
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Ananya Sharma. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-50"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
};

export default Portfolio;