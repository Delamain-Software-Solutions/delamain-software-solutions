import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/components/ThemeProvider'
import { initLiteMode } from '@/lib/liteMode'
import App from './App.tsx'
import './index.css'

initLiteMode();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <div className='bg-background'>
      <App />
    </div>
  </ThemeProvider>
);
