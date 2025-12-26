
import React from 'react';
import { NavItem, Service } from './types';

export const COLORS = {
  primary: '#0F172A', // Slate 900 - Authoritative & Professional
  secondary: '#059669', // Emerald 600 - Sustainable Growth & Physical Environment
  accent: '#2563EB', // Blue 600 - Strategic & Modern
  background: '#F8FAFC', // Slate 50 - Clean & Readable
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Diensten', id: 'diensten' },
  { label: 'Over ons', id: 'over-ons' },
  { label: 'Aanpak', id: 'aanpak' },
  { label: 'Contact', id: 'contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'strategisch-advies',
    title: 'Strategisch Advies',
    description: 'Wij vertalen complexe ambities naar haalbare ruimtelijke kaders. Van visievorming tot concrete haalbaarheidsanalyses.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 'omgevingswet',
    title: 'Omgevingswet Management',
    description: 'Begeleiding bij het nieuwe stelsel. Wij zorgen voor juridisch houdbare omgevingsplannen en efficiënte vergunningsprocedures.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 'gebiedsontwikkeling',
    title: 'Gebiedsontwikkeling',
    description: 'Regie op het proces tussen overheid en markt. Wij verbinden belangen en realiseren meerwaarde in de fysieke leefomgeving.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];
