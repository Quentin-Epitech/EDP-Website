import Header from './components/Header';
import Hero from './components/Hero';
import Privacy from './components/Privacy';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ForLawFirms from './components/ForLawFirms';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main-content" className="sr-only">
        Aller au contenu principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Privacy />
        <Features />
        <HowItWorks />
        <ForLawFirms />
        <Download />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
