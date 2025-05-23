import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import SkillSection from './components/SkillSection';
import Footer from './components/Footer';
import { getLastEditDate } from './utils/getLastEditDate';

const lastEditDate = getLastEditDate();

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 lg:px-16 py-4">
        <HeroSection />
        <AboutSection />
        <SkillSection />
      </div>
      <Footer date={lastEditDate} />
    </main>
  );
}
