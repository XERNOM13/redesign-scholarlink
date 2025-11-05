import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ScholarshipList from './components/ScholarshipList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <HeroSection />
      <ScholarshipList />
      <Footer />
    </div>
  );
}
