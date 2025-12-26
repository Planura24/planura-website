
import React from 'react';
import { SERVICES } from '../constants';
import { Page } from '../types';

interface HomeProps {
  onPageChange: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold tracking-wide uppercase mb-6">
              Expertise in de Omgevingswet
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              Ruimte voor ambitie, <span className="text-emerald-600">grip op de procedure.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              Planura adviseert overheden, ontwikkelaars en ondernemers bij complexe ruimtelijke vraagstukken. Wij maken plannen haalbaar binnen de kaders van de nieuwe Omgevingswet.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-200/50"
              >
                Start uw project
              </button>
              <button 
                onClick={() => onPageChange('diensten')}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-all"
              >
                Onze diensten
              </button>
            </div>
          </div>
        </div>
        
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-200 hidden lg:block skew-x-[-12deg] translate-x-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" 
            alt="Architectuur en ruimtelijke ordening" 
            className="w-full h-full object-cover opacity-90 skew-x-[12deg] -translate-x-12"
          />
        </div>
      </section>

      {/* Trust Indicators / Stats */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:border-r border-slate-100">
              <div className="text-3xl font-bold text-slate-900">15+ Jaar</div>
              <div className="text-slate-500 text-sm mt-1">Ervaring in de sector</div>
            </div>
            <div className="text-center md:border-r border-slate-100">
              <div className="text-3xl font-bold text-slate-900">100%</div>
              <div className="text-slate-500 text-sm mt-1">Focus op haalbaarheid</div>
            </div>
            <div className="text-center md:border-r border-slate-100">
              <div className="text-3xl font-bold text-slate-900">Landelijk</div>
              <div className="text-slate-500 text-sm mt-1">Actief in heel Nederland</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-900">Omgevingswet</div>
              <div className="text-slate-500 text-sm mt-1">Gespecialiseerd advies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Onze Expertise</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Van kleinschalige initiatieven tot grootschalige gebiedsontwikkeling. Planura biedt de strategische regie die nodig is.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group">
                <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button 
                  onClick={() => onPageChange('diensten')}
                  className="text-emerald-600 font-semibold flex items-center hover:translate-x-1 transition-transform"
                >
                  Lees meer
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Overleg ruimtelijke plannen" 
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Waarom Planura?</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Proceskennis & Juridische borging</h4>
                    <p className="text-slate-600 mt-1">We kennen de weg in de procedures en zorgen voor plannen die juridisch standhouden bij de Raad van State.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Brug tussen overheid en markt</h4>
                    <p className="text-slate-600 mt-1">Wij spreken de taal van de ambtenaar en begrijpen de businesscase van de ontwikkelaar.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-slate-900">Klaar voor de Omgevingswet</h4>
                    <p className="text-slate-600 mt-1">Specialist in het nieuwe stelsel, participatietrajecten en integrale afwegingen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Uw plannen realiseren?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Plan een vrijblijvend kennismakingsgesprek in en ontdek hoe wij uw ruimtelijke ambities kunnen versnellen.
          </p>
          <button 
            onClick={() => onPageChange('contact')}
            className="bg-emerald-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/20"
          >
            Neem direct contact op
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
