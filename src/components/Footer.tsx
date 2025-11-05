import { motion } from 'motion/react';
import { GraduationCap, Mail, Phone, MapPin, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { label: 'Beranda', href: '#' },
    { label: 'Beasiswa', href: '#' },
    { label: 'Tentang Kami', href: '#' },
  ];

  const supportLinks = [
    { label: 'FAQ', href: '#' },
    { label: 'Panduan', href: '#' },
    { label: 'Kontak', href: '#' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'info@scholarlink.id', href: 'mailto:info@scholarlink.id' },
    { icon: Phone, text: '+62 123 456 789', href: 'tel:+62123456789' },
    { icon: MapPin, text: 'Kendari, Indonesia', href: '#' },
  ];

  return (
    <footer className="relative mt-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"
        />

        {/* Decorative Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-md opacity-50"
                />
                <div className="relative bg-gradient-to-br from-blue-500 to-green-400 p-2 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xl tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                  <span className="text-blue-400">Scholar</span>
                  <span className="text-green-400">Link</span>
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
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                </motion.div>
              </div>
            </div>
            <p 
              className="text-gray-300 text-sm leading-relaxed"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Platform informasi beasiswa terlengkap untuk mewujudkan impian pendidikanmu.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-4 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem' }}
            >
              Tautan Cepat
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover/link:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-4 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem' }}
            >
              Dukungan
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group/link"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    <motion.div
                      className="w-1.5 h-1.5 rounded-full bg-green-400 opacity-0 group-hover/link:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 
              className="mb-4 text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.125rem' }}
            >
              Hubungi Kami
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-start gap-3 group/contact"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover/contact:bg-white/10 transition-colors mt-0.5"
                      >
                        <Icon className="w-4 h-4 text-blue-400" />
                      </motion.div>
                      <span className="text-sm leading-relaxed">{item.text}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p 
            className="text-gray-400 text-sm flex items-center justify-center gap-2"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            © 2025 ScholarLink. All Rights Reserved.
            <span className="inline-flex items-center gap-1">
              Made with 
              <motion.div
                animate={{ 
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="w-4 h-4 text-red-400 fill-red-400" />
              </motion.div>
            </span>
          </p>
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-50" />
    </footer>
  );
}
