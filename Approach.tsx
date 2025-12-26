
import React from 'react';

const Approach: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Onze Aanpak</h1>
          <p className="text-xl text-slate-600 max-w-3xl">
            Bij Planura werken we volgens een gestructureerd proces dat risico's minimaliseert en de kans op succes maximaliseert.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-0 md:border-l-0 md:flex md:justify-between mb-24">
          {[
            { step: 'Intake & Analyse', text: 'We beginnen met een grondige scan van het vigerende beleid en de fysieke kenmerken van de locatie.' },
            { step: 'Strategie & Advies', text: 'Vervolgens bepalen we de meest kansrijke weg: welke procedure is nodig en wat zijn de kritieke succesfactoren?' },
            { step: 'Planvorming', text: 'Het opstellen van de benodigde documenten en het coördineren van de verplichte onderzoeken.' },
            { step: 'Realisatie', text: 'Begeleiding tijdens de vergunningsfase en eventuele juridische procedures tot aan het definitieve besluit.' }
          ].map((item, index) => (
            <div key={index} className="mb-10 md:mb-0 md:w-1/4 relative px-8">
              <div className="absolute left-[-9px] top-0 md:left-1/2 md:-translate-x-1/2 md:-top-4 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white shadow-sm"></div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 md:text-center md:mt-8">{item.step}</h3>
              <p className="text-slate-600 text-sm md:text-center">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Recente Expertises</h2>
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900">Binnenstedelijke Herontwikkeling</h4>
                <p className="text-sm text-slate-600 mt-1">Transformatie van verouderde kantoorpanden naar woningbouw in de Randstad.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900">Energietransitie</h4>
                <p className="text-sm text-slate-600 mt-1">Planologische inpassing van zonneparken binnen kwetsbare landschappen.</p>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100">
                <h4 className="font-bold text-slate-900">Bedrijventerrein Logistiek</h4>
                <p className="text-sm text-slate-600 mt-1">Uitbreiding van logistieke centra met complexe geluids- en verkeersvraagstukken.</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-600 text-white p-12 rounded-2xl flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Directe meerwaarde</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed">
              Planura wordt vaak ingeschakeld op het moment dat een project vastloopt of wanneer een initiatiefnemer maximale zekerheid wil voorafgaand aan grote investeringen.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center"><svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Kortere doorlooptijden</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Juridisch robuuste plannen</li>
              <li className="flex items-center"><svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg> Hoger draagvlak bij overheid</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
