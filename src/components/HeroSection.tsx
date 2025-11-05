import { motion } from 'motion/react';
import { Search, Filter, ChevronDown, Sparkles, Star, Zap, BookOpen } from 'lucide-react';
import { useState } from 'react';

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="relative min-h-[500px] overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-green-500">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-20 h-20 border-4 border-white/20 rounded-2xl"
        />
        
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full"
        />

        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-40 left-1/4 w-12 h-12 border-4 border-yellow-400/30"
        />

        {/* Floating Icons */}
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-32 right-1/4"
        >
          <BookOpen className="w-8 h-8 text-white/30" />
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-32 right-1/3"
        >
          <Star className="w-10 h-10 text-yellow-300/40" />
        </motion.div>

        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-20"
        >
          <Zap className="w-6 h-6 text-green-300/40" />
        </motion.div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-auto">
            <motion.path
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              fill="white"
              fillOpacity="0.1"
              animate={{
                d: [
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                  "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-white text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}>
              Temukan Peluang Terbaik
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            <span className="block text-white text-5xl md:text-6xl lg:text-7xl mb-2" style={{ fontWeight: 900, lineHeight: 1.1 }}>
              Daftar Beasiswa
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="h-2 w-48 mx-auto bg-gradient-to-r from-yellow-400 via-pink-300 to-green-300 rounded-full"
            />
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="text-white/95 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400 }}
          >
            Jelajahi berbagai peluang beasiswa untuk mewujudkan impian pendidikanmu ✨
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-4 border border-white/50">
              <div className="flex flex-col md:flex-row gap-3">
                {/* Search Input */}
                <div className="flex-1 relative group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari beasiswa, penyelenggara, atau kategori..."
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border-2 border-transparent rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-300"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-xl border-2 border-blue-500 opacity-0 group-focus-within:opacity-100 pointer-events-none"
                    initial={false}
                    animate={{
                      boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.4)',
                    }}
                    whileFocus={{
                      boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.2)',
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Filter Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                  >
                    <Filter className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
                    <span className="text-gray-700 group-hover:text-gray-900">Semua Kategori</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3.5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 border-2 border-transparent hover:border-gray-200 group"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 500 }}
                  >
                    <span className="text-gray-700 group-hover:text-gray-900">Semua Tipe Pendanaan</span>
                    <ChevronDown className="w-4 h-4 text-gray-500 group-hover:rotate-180 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.3)',
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    Bersihkan
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
