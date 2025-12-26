
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate API call
    setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', message: '' });
        alert('Bedankt voor uw bericht. Wij nemen zo spoedig mogelijk contact met u op.');
    }, 1500);
  };

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 font-heading">Laten we kennismaken</h1>
            <p className="text-xl text-slate-600 mb-10">
              Heeft u een ruimtelijk vraagstuk of bent u benieuwd wat Planura voor uw project kan betekenen? Neem contact op voor een vrijblijvend adviesgesprek.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Bezoekadres</h4>
                  <p className="text-slate-600">Lijnbaansgracht 12, 1017 VV Amsterdam</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">E-mail</h4>
                  <p className="text-slate-600">info@planura.nl</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-slate-900">Telefoon</h4>
                  <p className="text-slate-600">+31 (0)20 123 45 67</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Naam</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Uw volledige naam"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">E-mailadres</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" 
                  placeholder="bijvoorbeeld@bedrijf.nl"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Uw bericht</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition-all" 
                  placeholder="Beschrijf kort uw project of vraag..."
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-4 rounded-lg font-bold text-lg text-white transition-all shadow-lg ${
                    submitted ? 'bg-slate-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
                }`}
              >
                {submitted ? 'Verzenden...' : 'Verzend aanvraag'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
