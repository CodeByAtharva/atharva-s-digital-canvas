import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, Send, Loader2, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('validation');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Initialize EmailJS
      const emailjs = (await import('@emailjs/browser')).default;
      
      // EmailJS Configuration
      const SERVICE_ID = 'service_k2cx589';
      const TEMPLATE_ID = 'template_774mdee';
      const PUBLIC_KEY = '9IMGar6SZXgcJntgo';
      
      // Get current time in a readable format
      const currentTime = new Date().toLocaleString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
      
      // Prepare template parameters - matching your template exactly
      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        time: currentTime,
      };
      
      console.log('Sending email with params:', templateParams);
      
      // Send email using EmailJS
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', response);

      setSubmitStatus('success');
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contacts = [
    { 
      icon: Mail, 
      label: "Email",
      value: "codebyatharva21@gmail.com", 
      href: "mailto:codebyatharva21@gmail.com",
      color: "blue"
    },
    { 
      icon: Phone, 
      label: "Phone",
      value: "+91 9552851437", 
      href: "tel:+919552851437",
      color: "green"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn",
      value: "Connect with me", 
      href: "https://www.linkedin.com/in/atharva-kamble-10685928b/",
      color: "cyan"
    },
    { 
      icon: Github, 
      label: "GitHub",
      value: "View my repositories", 
      href: "https://github.com/CodeByAtharva/",
      color: "purple"
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", glow: "hover:shadow-blue-500/20" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", glow: "hover:shadow-green-500/20" },
      cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", glow: "hover:shadow-cyan-500/20" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", glow: "hover:shadow-purple-500/20" },
    };
    return colors[color];
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
              <span className="text-blue-400 font-semibold text-sm">CONTACT</span>
            </div>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-8 shadow-xl h-full">
                <h3 className="font-display text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                    <Input
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-500 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-500 rounded-xl h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="bg-gray-900/50 border-gray-700 focus:border-blue-500 text-white placeholder:text-gray-500 rounded-xl resize-none"
                    />
                  </div>

                  {submitStatus === 'validation' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">Please fill in all fields correctly.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400"
                    >
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400"
                    >
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm font-medium">Failed to send. Please check your EmailJS configuration or contact me directly.</span>
                    </motion.div>
                  )}

                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-6 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Contact Information - Takes 2 columns */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="lg:col-span-2"
            >
              <div className="space-y-4 h-full flex flex-col">
                <div className="mb-2">
                  <h3 className="font-display text-2xl font-bold text-white mb-3">Contact Info</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Feel free to reach out through any of these channels.
                  </p>
                </div>

                <div className="space-y-3 flex-1">
                  {contacts.map((contact, index) => {
                    const colors = getColorClasses(contact.color);
                    return (
                      <motion.a
                        key={index}
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ x: 4, scale: 1.01 }}
                        className={`flex items-center gap-3 p-4 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-xl shadow-lg ${colors.glow} transition-all duration-300 group`}
                      >
                        <motion.div
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                          transition={{ duration: 0.5 }}
                          className={`p-2.5 rounded-lg ${colors.bg} border ${colors.border} flex-shrink-0`}
                        >
                          <contact.icon className={`w-5 h-5 ${colors.text}`} />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-gray-400 mb-0.5">{contact.label}</p>
                          <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">
                            {contact.value}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors flex-shrink-0" />
                      </motion.a>
                    );
                  })}
                </div>

                {/* Location Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                  className="p-5 bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/30 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 mb-0.5">Location</p>
                      <p className="text-sm font-semibold text-white">Pune, Maharashtra, India</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;