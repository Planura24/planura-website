
import React, { useState } from 'react';
import { NAV_ITEMS } from '../constants';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onPageChange: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button 
              onClick={() => onPageChange('home')}
              className="flex items-center space-x-2"
            >
              <div className="w-10 h-10 bg-slate-900 flex items-center justify-center rounded-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-900 font-heading">PLANURA</span>
            </button>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`text-sm font-medium transition-colors hover:text-emerald-600 ${
                  currentPage === item.id ? 'text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={() => onPageChange('contact')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-slate-800 transition-all"
            >
              Kennismaken
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onPageChange(item.id);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium ${
                  currentPage === item.id ? 'bg-emerald-50 text-emerald-600' : 'text-slate-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
