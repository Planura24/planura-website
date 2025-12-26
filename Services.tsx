
import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Onze Diensten</h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Planura biedt een integraal pakket aan diensten voor de fysieke leefomgeving. Onze aanpak is pragmatisch, strategisch en altijd gericht op een realiseerbaar eindresultaat.
          </p>
        </div>

        <div className="space-y-24">
          {/* Detailed Service 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4 block">01 / Strategie</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Strategisch Ruimtelijk Advies</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Elk groot project begint bij een heldere visie en een gedegen fundament. Wij ondersteunen overheden bij het opstellen van omgevingsvisies en marktpartijen bij het toetsen van hun ambities aan het vigerende beleid.
              </p>
              <ul className="space-y-3 mb-8">
                {['Locatie- en haalbaarheidsanalyses', 'Opstellen van ruimtelijke onderbouwingen', 'Strategische visievorming', 'Beleidstoetsing en herziening'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800" alt="Strategie" className="rounded-2xl shadow-xl" />
            </div>
          </div>

          {/* Detailed Service 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4 block">02 / Proces</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Begeleiding Omgevingswet</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                De Omgevingswet vraagt om een andere manier van werken: integraal, participatief en flexibel. Wij zijn uw gids in dit nieuwe landschap en verzorgen het volledige traject van melding tot besluit.
              </p>
              <ul className="space-y-3 mb-8">
                {['Begeleiding Omgevingsvergunningen', 'Coördinatie van milieu- en omgevingsonderzoeken', 'Inrichten van participatieprocessen', 'Digitalisering in het DSO'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=800" alt="Omgevingswet" className="rounded-2xl shadow-xl" />
            </div>
          </div>

          {/* Detailed Service 3 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-sm mb-4 block">03 / Realisatie</span>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Gebiedsontwikkeling & Regie</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Wij brengen publieke doelen en private belangen bij elkaar. Als onafhankelijk adviseur voeren wij de regie over het proces, bewaken we de voortgang en sturen we op de beoogde kwaliteit.
              </p>
              <ul className="space-y-3 mb-8">
                {['Projectmanagement gebiedsontwikkeling', 'Onderhandelingen en overeenkomsten (Anterieur)', 'Samenwerkingsvormen (PPS)', 'Risicomanagement'].map((item, idx) => (
                  <li key={idx} className="flex items-center text-slate-700">
                    <svg className="w-5 h-5 text-emerald-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <img src="https://images.unsplash.com/photo-1449156001935-d2873c8967bb?auto=format&fit=crop&q=80&w=800" alt="Gebiedsontwikkeling" className="rounded-2xl shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
