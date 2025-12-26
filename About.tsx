
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Over Planura</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Planura is ontstaan vanuit de overtuiging dat ruimtelijke ordening niet alleen gaat over regels, maar over het creëren van duurzame waarde voor de leefomgeving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Onze Missie</h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              De fysieke leefomgeving in Nederland is schaars en de uitdagingen zijn groot. Of het nu gaat om de woningbouwopgave, de energietransitie of klimaatadaptatie; alles vraagt om ruimte. 
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Planura helpt opdrachtgevers om door het woud van regelgeving heen te kijken en kansen te verzilveren. Wij geloven in heldere communicatie, eerlijk advies en een resultaatgerichte aanpak. Geen dikke rapporten die in de lade verdwijnen, maar plannen die tot uitvoering komen.
            </p>
          </div>
          <div className="relative">
             <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="Team Planura" className="rounded-2xl shadow-2xl relative z-10" />
             <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-emerald-500 rounded-2xl -z-0"></div>
          </div>
        </div>

        <div className="bg-slate-50 p-12 rounded-3xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Onze Kernwaarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-emerald-600 font-bold text-5xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Onafhankelijk</h3>
              <p className="text-slate-600">Wij geven eerlijk advies over de haalbaarheid van plannen, ook als dat betekent dat we kritisch moeten zijn.</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-600 font-bold text-5xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Deskundig</h3>
              <p className="text-slate-600">Onze kennis van de Omgevingswet en planologische kaders is altijd up-to-date en diepgaand.</p>
            </div>
            <div className="text-center">
              <div className="text-emerald-600 font-bold text-5xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Verbindend</h3>
              <p className="text-slate-600">Wij brengen verschillende belangen samen om tot een gedragen en duurzame oplossing te komen.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
