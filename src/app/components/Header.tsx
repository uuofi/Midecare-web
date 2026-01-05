import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../lib/i18n';
import { useAuth } from '../../lib/auth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { status, user, logout } = useAuth();

  const isRtl = language === 'ar';

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  useEffect(() => {
    if (!isMenuOpen) return;

    document.body.classList.add('overflow-hidden');
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

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
          <Link to="/" className="flex items-center gap-2">
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

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {status === 'authenticated' ? (
              <>
                <Link
                  to="/account"
                  className="px-4 py-2 border border-primary-foreground/30 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {isRtl
                    ? user?.name
                      ? `مرحباً، ${user.name}`
                      : 'حسابي'
                    : user?.name
                      ? `Hi, ${user.name}`
                      : 'My account'}
                </Link>
                <button
                  type="button"
                  onClick={logout}
                  className="px-4 py-2 border border-primary-foreground/30 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                >
                  {isRtl ? 'تسجيل خروج' : 'Logout'}
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 border border-primary-foreground/30 rounded-lg text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
              >
                {isRtl ? 'تسجيل الدخول' : 'Login'}
              </Link>
            )}

            <button
              type="button"
              onClick={() => setLanguage(isRtl ? 'en' : 'ar')}
              className="p-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors flex items-center gap-1"
              title="تبديل اللغة / Switch Language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">{isRtl ? 'EN' : 'AR'}</span>
            </button>

            <Link
              to="/contact"
              className="px-6 py-2 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              {t('getStarted')}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-primary-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Mobile menu">
          {/* Backdrop */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            aria-label="Close menu"
            onClick={closeMenu}
          />

          {/* Panel */}
          <div
            className={`absolute top-0 h-full w-[85vw] max-w-sm bg-background text-foreground shadow-lg ${
              isRtl ? 'right-0 border-l border-border' : 'left-0 border-r border-border'
            }`}
          >
            <div className="h-16 px-4 flex items-center justify-between border-b border-border">
              <span className="font-semibold">{t('appName')}</span>
              <button
                type="button"
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close menu"
                onClick={closeMenu}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}

              <div className="my-3 border-t border-border" />

              <button
                type="button"
                onClick={() => {
                  setLanguage(isRtl ? 'en' : 'ar');
                  closeMenu();
                }}
                className="flex items-center gap-2 px-3 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span>{isRtl ? 'English' : 'العربية'}</span>
              </button>

              <div className="my-3 border-t border-border" />

              {status === 'authenticated' ? (
                <>
                  <Link
                    to="/account"
                    className="px-3 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors text-center"
                    onClick={closeMenu}
                  >
                    {isRtl
                      ? user?.name
                        ? `مرحباً، ${user.name}`
                        : 'حسابي'
                      : user?.name
                        ? `Hi, ${user.name}`
                        : 'My account'}
                  </Link>
                  <button
                    type="button"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="px-3 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors text-center"
                  >
                    {isRtl ? 'تسجيل خروج' : 'Logout'}
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="px-3 py-3 rounded-lg border border-border text-foreground hover:bg-secondary transition-colors text-center"
                  onClick={closeMenu}
                >
                  {isRtl ? 'تسجيل الدخول' : 'Login'}
                </Link>
              )}

              <Link
                to="/contact"
                className="mt-3 px-3 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-center"
                onClick={closeMenu}
              >
                {t('getStarted')}
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
