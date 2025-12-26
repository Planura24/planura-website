// Fixed: Added React import to provide the React namespace needed for React.ReactNode
import React from 'react';

export type Page = 'home' | 'diensten' | 'over-ons' | 'aanpak' | 'contact';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  id: Page;
}