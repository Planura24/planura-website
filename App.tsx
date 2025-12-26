
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Approach from './pages/Approach';
import Contact from './pages/Contact';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Simple routing based on state, reset scroll on change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'diensten':
        return <Services />;
      case 'over-ons':
        return <About />;
      case 'aanpak':
        return <Approach />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onPageChange={setCurrentPage} />
      
      {/* Visual background details for the whole site */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-emerald-100/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-100/20 rounded-full blur-[100px]"></div>
      </div>
    </div>
  );
};

export default App;
