import { motion } from "framer-motion";
import { Download } from "lucide-react";

const FloatingCVButton = () => {
  const handleDownload = () => {
    // Replace with your actual CV file path
    const link = document.createElement('a');
    link.href = '/cv/Atharva_Kamble_CV.pdf'; // Put your CV in public/cv folder
    link.download = 'Atharva_Kamble_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleDownload}
        className="group relative p-4 md:p-5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl shadow-blue-500/40 hover:shadow-blue-500/60 transition-all duration-300"
        aria-label="Download CV"
      >
        {/* Animated ring effect */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
        />
        
        {/* Icon */}
        <Download className="w-5 h-5 md:w-6 md:h-6 text-white relative z-10" />
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-gray-900 border border-gray-700/50 text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none shadow-xl">
          Download Resume
          <div className="absolute top-full right-6 -mt-1 border-4 border-transparent border-t-gray-900" />
        </div>
      </motion.button>
    </motion.div>
  );
};

export default FloatingCVButton;