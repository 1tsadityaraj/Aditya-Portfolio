import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Aggressively unregister any existing service workers to prevent errors
if ('serviceWorker' in navigator) {
  // Unregister all service workers
  navigator.serviceWorker.getRegistrations().then((registrations) => {
    registrations.forEach((registration) => {
      registration.unregister().catch(() => {
        // Silently ignore unregistration errors
      })
    })
  }).catch(() => {
    // Silently ignore errors
  })

  // Also try to unregister by scope
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister().catch(() => {
      // Silently ignore errors
    })
  }).catch(() => {
    // Silently ignore errors
  })
}

// Additional error suppression (backup to HTML script)
if (typeof window !== 'undefined') {
  const suppressWorkerErrors = () => {
    const originalError = console.error;
    console.error = (...args) => {
      const msg = args.map(String).join(' ');
      if (msg.includes('worker.js') || 
          msg.includes('Failed to fetch') ||
          msg.includes('site.webmanifest') ||
          msg.includes('worker.js:28') ||
          msg.includes('worker.js:23')) {
        return;
      }
      originalError.apply(console, args);
    };
  };
  
  // Run immediately
  suppressWorkerErrors();
  
  // Also run after a short delay to catch late errors
  setTimeout(suppressWorkerErrors, 100);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
