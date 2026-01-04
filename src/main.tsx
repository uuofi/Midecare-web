
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { AuthProvider } from './lib/auth';
import { LanguageProvider } from './lib/i18n';
import { applySiteImagesCssVars } from './lib/siteImages';
import './styles/index.css';

applySiteImagesCssVars();

createRoot(document.getElementById('root')!).render(
  <LanguageProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </LanguageProvider>
);
  