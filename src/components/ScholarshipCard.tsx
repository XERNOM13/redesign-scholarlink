import { motion } from 'motion/react';
import { Building2, MapPin, Calendar, ExternalLink, ChevronRight, Award, Sparkles } from 'lucide-react';

interface ScholarshipCardProps {
  title: string;
  badge: string;
  organization: string;
  location: string;
  deadline: string;
  fundingType: string;
  description: string;
  index: number;
}

export default function ScholarshipCard({
  title,
  badge,
  organization,
  location,
  deadline,
  fundingType,
  description,
  index,
}: ScholarshipCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white rounded-2xl border border-gray-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Gradient Border Effect on Hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%)',
        }}
      />

      {/* Decorative Corner Gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-green-500/10 rounded-bl-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 
              className="text-xl text-gray-900 mb-2 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, lineHeight: 1.3 }}
            >
              {title}
            </h3>
          </div>
          
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full shadow-md"
          >
            <Award className="w-3.5 h-3.5" />
            <span className="text-xs" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}>
              {badge}
            </span>
          </motion.div>
        </div>

        {/* Info Items */}
        <div className="space-y-2.5 mb-5">
          <motion.div 
            className="flex items-center gap-2.5 text-gray-600 group/item"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 group-hover/item:bg-blue-100 transition-colors">
              <Building2 className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{organization}</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2.5 text-gray-600 group/item"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-50 group-hover/item:bg-green-100 transition-colors">
              <MapPin className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>{location}</span>
          </motion.div>

          <motion.div 
            className="flex items-center gap-2.5 text-gray-600 group/item"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-50 group-hover/item:bg-purple-100 transition-colors">
              <Calendar className="w-4 h-4 text-purple-600" />
            </div>
            <span className="text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Deadline: <span style={{ fontWeight: 600 }}>{deadline}</span>
            </span>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-5" />

        {/* Funding Type */}
        <div className="mb-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg border border-blue-100/50">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span 
              className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
            >
              {fundingType}
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className="text-gray-600 text-sm leading-relaxed mb-6"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 relative px-5 py-3 rounded-xl overflow-hidden group/btn"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover/btn:from-blue-700 group-hover/btn:to-indigo-700 transition-all duration-300" />
            
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover/btn:opacity-100"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
            
            <span 
              className="relative z-10 text-white flex items-center justify-center gap-2"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Apply Sekarang
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ExternalLink className="w-4 h-4" />
              </motion.div>
            </span>

            <motion.div
              className="absolute inset-0 rounded-xl opacity-0 group-hover/btn:opacity-100"
              initial={false}
              whileHover={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.4), 0 10px 30px rgba(59, 130, 246, 0.2)',
              }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-5 py-3 bg-white border-2 border-gray-200 hover:border-blue-300 rounded-xl transition-all duration-300 group/btn relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-green-50 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            
            <span 
              className="relative z-10 text-gray-700 group-hover/btn:text-gray-900 flex items-center justify-center gap-2 transition-colors"
              style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
            >
              Lihat Detail
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
