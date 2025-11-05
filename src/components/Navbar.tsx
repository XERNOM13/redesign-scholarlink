import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('beranda');

  const navLinks = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'beasiswa', label: 'Beasiswa' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2 cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-md opacity-50"
              />
              <div className="relative bg-gradient-to-br from-blue-600 to-green-500 p-2 rounded-xl shadow-lg">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Scholar</span>
                <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Link</span>
              </span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <Sparkles className="w-4 h-4 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => setActiveLink(link.id)}
                  className="relative px-5 py-2 rounded-lg overflow-hidden transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeLink === link.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  <span 
                    className={`relative z-10 transition-all duration-300 ${
                      activeLink === link.id
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: activeLink === link.id ? 600 : 500 }}
                  >
                    {link.label}
                  </span>
                  
                  {activeLink === link.id && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-1/2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-6 py-2.5 rounded-xl overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-500 to-green-500"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                style={{ backgroundSize: '200% 200%' }}
              />
              
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{
                  scale: 1.5,
                  opacity: 0.3,
                  transition: { duration: 0.4 }
                }}
              />
              
              <span 
                className="relative z-10 text-white flex items-center gap-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                Daftar
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              
              <motion.div
                className="absolute inset-0 rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ 
                  opacity: 1,
                  boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
