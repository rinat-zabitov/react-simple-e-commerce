import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import { FilterProvider } from './context/FilterContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <FilterProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FilterProvider>
);
