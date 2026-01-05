import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../lib/i18n';
import { useAuth } from '../../lib/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { status, user, logout } = useAuth();

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/about', label: t('about') },
    { to: '/features', label: t('features') },
    { to: '/faq', label: t('faq') },
    { to: '/download', label: t('download') },
    { to: '/contact', label: t('contact') },
  ];

  return (
    <header className={`${language === 'ar' ? 'rtl' : 'ltr'} bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground shadow-sm sticky top-0 z-50`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="" className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt={t('appName')}
              className="w-10 h-10 rounded-lg object-contain"
              loading="eager"
              decoding="async"
            />
            <span className="text-xl text-primary-foreground">{t('appName')}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button & Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {status === 'authenticated' ? (
              <>
                <Link
                  to="/account"
                  className="px-4 py-2 border border-primary-foreground/30 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {language === 'ar' ? (user?.name ? `مرحباً، ${user.name}` : 'حسابي') : (user?.name ? `Hi, ${user.name}` : 'My account')}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="px-4 py-2 border border-primary-foreground/30 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 border border-primary-foreground/30 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
              </Link>
            )}
            <button
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1"
              title="تبديل اللغة / Switch Language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
            <Link
              to="/contact"
              className="px-6 py-2 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-primary-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background text-foreground">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setLanguage(language === 'ar' ? 'en' : 'ar');
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors py-2"
              >
                <Globe className="w-5 h-5" />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </button>

              {status === 'authenticated' ? (
                <>
                  <Link
                    to="/account"
                    className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {language === 'ar' ? (user?.name ? `مرحباً، ${user.name}` : 'حسابي') : (user?.name ? `Hi, ${user.name}` : 'My account')}
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors text-center"
                  >
                    {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-6 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
                </Link>
              )}
              <Link
                to="/contact"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('getStarted')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
