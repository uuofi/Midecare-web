import { Link } from 'react-router-dom';
import { Instagram, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../../lib/i18n';
import { INSTAGRAM_URL, WHATSAPP_PHONE_E164, getWhatsAppUrl } from '../../lib/socialLinks';

export default function Footer() {
  const { language, t } = useLanguage();
  const whatsappUrl = getWhatsAppUrl(WHATSAPP_PHONE_E164);
  const instagramHref = INSTAGRAM_URL || '/contact';
  const whatsappHref = whatsappUrl || '/contact';

  return (
    <footer className={`bg-gray-900 text-white ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                alt={t('appName')}
                className="w-10 h-10 rounded-lg object-contain"
                loading="lazy"
                decoding="async"
              />
              <span className="text-xl">{t('appName')}</span>
            </Link>
            <p className="text-gray-400 mb-4">
              {t('aboutText')}
            </p>
            <div className="flex gap-4">
              <a
                href={instagramHref}
                target={INSTAGRAM_URL ? '_blank' : undefined}
                rel={INSTAGRAM_URL ? 'noreferrer' : undefined}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={whatsappHref}
                target={whatsappUrl ? '_blank' : undefined}
                rel={whatsappUrl ? 'noreferrer' : undefined}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">{t('about')}</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">{t('features')}</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">{t('faq')}</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-white transition-colors">{t('download')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">{t('faq')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">{t('contact')}</Link></li>
              <li><Link to="/download" className="text-gray-400 hover:text-white transition-colors">{t('download')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4">{t('contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>medicare410@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2026 {t('appName')}. {t('copyright')}</p>
          <div className="flex gap-6 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">{t('privacyPolicy')}</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">{t('termsService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
