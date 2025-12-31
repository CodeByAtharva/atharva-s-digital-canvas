import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Code, Sparkles, Briefcase, Calendar } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm">
              <span className="text-blue-400 font-semibold text-sm">ABOUT ME</span>
            </div>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Know More{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My journey in technology, education, and achievements that shape who I am
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30"
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">Who I Am</h3>
                  <p className="text-gray-400">Developer & Innovator</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am a <span className="text-blue-400 font-semibold">B.E. Computer Science student</span> and 
                  a <span className="text-purple-400 font-semibold">full stack MERN developer</span> with a passion for 
                  creating modern, scalable web applications that solve real-world problems.
                </p>

                <p>
                  With a strong foundation in both frontend and backend technologies, I thrive on 
                  tackling complex challenges and continuously expanding my skill set to stay at 
                  the cutting edge of web development.
                </p>

                <p>
                  My approach combines <span className="text-cyan-400 font-semibold">technical excellence</span> with 
                  creative problem-solving, ensuring every project I work on delivers both 
                  functionality and exceptional user experience.
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["React", "Node.js", "MongoDB", "Express", "JavaScript", "Tailwind"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-700/50 border border-gray-600/50 text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content - Timeline & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={containerVariants}
            className="space-y-6"
          >
            {/* Education Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-lg"
                  >
                    <GraduationCap className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display text-xl font-bold text-white">Education</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>Present</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">Academic Journey</p>
                    <h5 className="font-semibold text-gray-200 mb-2">B.E. – Computer Engineering</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      PVG College of Engineering and Technology, Pune
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Achievement Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, translateY: -4 }}
              className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-purple-500/10 transition-all duration-500 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl group-hover:bg-purple-500/20 transition-all duration-500" />
              <div className="relative">
                <div className="flex items-start gap-4 mb-4">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 shadow-lg"
                  >
                    <Award className="w-6 h-6 text-purple-400" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-display text-xl font-bold text-white">Achievement</h4>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>2025</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-400 mb-3">Recent Recognition</p>
                    <div className="flex items-start gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                      <h5 className="font-semibold text-gray-200">Top Finalist – MIT ADT Hackathon 2025</h5>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Selected among top finalists for demonstrating technical excellence and 
                      innovative problem-solving in a competitive programming challenge
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, translateY: -4 }}
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center shadow-xl hover:shadow-cyan-500/10 transition-all duration-500 group"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity"
                  />
                  <div className="relative">
                    <Briefcase className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                    <h4 className="font-display text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                      5+
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">Projects Completed</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, translateY: -4 }}
                className="bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 text-center shadow-xl hover:shadow-purple-500/10 transition-all duration-500 group"
              >
                <div className="relative">
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:opacity-100 opacity-0 transition-opacity"
                  />
                  <div className="relative">
                    <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                    <h4 className="font-display text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      4+
                    </h4>
                    <p className="text-gray-400 text-sm font-medium">Technologies Mastered</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;