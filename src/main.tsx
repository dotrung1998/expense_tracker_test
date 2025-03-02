import { StrictMode } from 'react';
    import { createRoot } from 'react-dom/client';
    import App from './App'; // Corrected import path
    import './index.css';

    const container = document.getElementById('root');

    if (container) {
      const root = createRoot(container);
      root.render(
        <StrictMode>
          <App />
        </StrictMode>
      );
    } else {
      console.error("Root element not found. Make sure your index.html has a div with id='root'.");
    }
