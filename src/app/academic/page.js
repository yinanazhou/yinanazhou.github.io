import Navbar from '../components/Navbar';
import EducationSection from '../components/EducationSection';
import SchoolProjectsSection from '../components/SchoolProjectsSection';
import PublicationsSection from '../components/PublicationsSection';
import AwardsSection from '../components/AwardsSection';
import CertificatesSection from '../components/CertificatesSection';
import VolunteerSection from '../components/VolunteerSection';
import Footer from '../components/Footer';
import { getLastEditDate } from '../utils/getLastEditDate';

const lastEditDate = getLastEditDate();

export default function Academic() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-100 dark:bg-neutral-900">
      <Navbar page={'Academic'} />
      <div className="container min-h-[80vh] mt-24 mx-auto px-4 lg:px-16 py-4 ">
        <EducationSection />
        <SchoolProjectsSection />
        <PublicationsSection />
        <AwardsSection />
        <CertificatesSection />
        <VolunteerSection />
      </div>
      <Footer date={lastEditDate} />
    </main>
  );
}
