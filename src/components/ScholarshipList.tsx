import { motion } from 'motion/react';
import ScholarshipCard from './ScholarshipCard';
import { TrendingUp } from 'lucide-react';

export default function ScholarshipList() {
  const scholarships = [
    {
      title: 'Beasiswa Indonesia Maju 2025',
      badge: 'Umum',
      organization: 'Kementerian Pendidikan dan Kebudayaan',
      location: 'Indonesia',
      deadline: '20 November 2025',
      fundingType: 'Full Funding',
      description: 'Program beasiswa penuh untuk mahasiswa berprestasi di bidang akademik maupun non-akademik dengan fokus pengembangan kepemimpinan dan inovasi.',
    },
    // Add more scholarships as needed
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </motion.div>
          <h2 
            className="text-gray-900"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.75rem' }}
          >
            Menampilkan{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              {scholarships.length} beasiswa
            </span>
          </h2>
        </div>
        
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
        />
      </motion.div>

      {/* Scholarship Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard
            key={index}
            {...scholarship}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
