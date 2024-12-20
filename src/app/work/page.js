import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WorkSection from '../components/WorkSection';
import { getLastEditDate } from '../utils/getLastEditDate';

const lastEditDate = getLastEditDate();

export default function Work() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
      <Navbar page={'Work'} />
      <div className="container mt-24 mx-auto px-12 lg:px-16 py-0 lg:py-4">
        <WorkSection />
      </div>
      <Footer date={lastEditDate} />
    </main>
  );
}
