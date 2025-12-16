import Hero from "./components/Hero.jsx";
import CardSection from "./components/cardsection.jsx";
import PastorMessage from "./components/Pastormessage";
import MassHours from "./components/MassHours";
import WorkingHours from "./components/WorkingHours.jsx";
import LeadersSection from "./components/LeadersSection.jsx";
import Footer from "./components/Footer.jsx";
import SubHero from "./components/subhero.jsx";
import UpcomingEvent from "./components/upcomingevent.jsx";
export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 px-4 pt-8">
      <Hero />
      <CardSection>
      <PastorMessage />
      <MassHours />
      <WorkingHours />  
      </CardSection> 
      <SubHero />
      <UpcomingEvent />
      <LeadersSection />  
      <Footer/>
      {/* We’ll add other sections here soon */}
    </main>
  );
}
