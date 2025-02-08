'use client';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from './store';

interface MapCRUDProviderProps {
  children: ReactNode;
}

export default function MapCRUDProvider({ children }: MapCRUDProviderProps) {
  return <Provider store={store}>{children}</Provider>;
}