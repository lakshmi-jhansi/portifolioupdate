import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Internships from '@/components/Internships';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ui/ParticleBackground';

export default function Home() {
  return (
    <>
      {/* Fixed particle canvas layer */}
      <ParticleBackground />

      {/* Animated mesh gradient background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[#0A0A0F]" />
        <div
          className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #7C3AED, transparent 70%)' }}
        />
        <div
          className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #9333EA, transparent 70%)' }}
        />
        <div
          className="absolute top-[40%] right-[20%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #C084FC, transparent 70%)' }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Internships />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
