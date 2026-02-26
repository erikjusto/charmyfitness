
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PurposeSection from './components/PurposeSection';
import FabricSection from './components/FabricSection';
import PrivateLabelSection from './components/PrivateLabelSection';
import ProductCatalog from './components/ProductCatalog';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#E6B7B2] selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <PurposeSection />
        <FabricSection />
        <PrivateLabelSection />
        <ProductCatalog />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
