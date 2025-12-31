import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Enhanced Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -right-20 w-[28rem] h-[28rem] bg-purple-500/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-500 font-semibold mb-4 text-lg"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Atharva Kamble
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-6 font-medium"
            >
              Full Stack MERN Developer{" "}
              <span className="text-blue-500">|</span> Computer Science Student
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 text-lg leading-relaxed"
            >
              B.E. Computer Science student passionate about building modern web
              applications using MERN stack. Turning ideas into elegant,
              functional solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 rounded-full px-8 py-6 text-base font-semibold"
              >
                View Projects
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 border-2 border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500 text-base font-semibold transition-all duration-300"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
              >
                <Github className="w-6 h-6 text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-6 h-6 text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:codebyatharva21@gmail.com"
                className="p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-6 h-6 text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Enhanced */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Animated Glow effect behind image */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl"
              />
              
              {/* Image container with gradient border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden ring-4 ring-gray-900">
                  <img 
                    src="pfp.jpeg" 
                    alt="Atharva Kamble"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating decorations - Enhanced */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [12, 18, 12]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl rotate-12 flex items-center justify-center text-2xl shadow-lg shadow-purple-500/50"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, 12, 0],
                  rotate: [-12, -18, -12]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-4 -left-6 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl -rotate-12 flex items-center justify-center text-xl shadow-lg shadow-blue-500/50"
              >
                ⚡
              </motion.div>
              
              {/* Additional floating element */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg rotate-45 flex items-center justify-center text-lg shadow-lg shadow-cyan-500/50"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Enhanced */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300 font-medium">
              Scroll Down
            </span>
            <div className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
              <ArrowDown className="w-5 h-5 text-blue-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;