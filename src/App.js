import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ConnectivitySection from './components/ConnectivitySection';
import GlobalNetwork from './components/GlobalNetwork';
import Testimonials from './components/Testimonials';
import HowWeHelp from './components/HowWeHelp';
import NewsResources from './components/NewsResources';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ConnectivitySection />
      <GlobalNetwork />
      <Testimonials />
      <HowWeHelp />
      <NewsResources />
      <GetStarted />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;