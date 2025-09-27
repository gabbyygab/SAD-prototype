import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Announcements from "../components/Announcements";
import QuickLinks from "../components/QuickLinks";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Announcements />
        <QuickLinks />
      </main>
      <Footer />
    </div>
  );
}
