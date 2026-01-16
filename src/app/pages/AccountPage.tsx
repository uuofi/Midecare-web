import { useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { useLanguage } from '../../lib/i18n';

export default function AccountPage() {
  const { language } = useLanguage();
  const { status, user, logout } = useAuth();
  const navigate = useNavigate();

  const directionClass = useMemo(() => (language === 'ar' ? 'rtl' : 'ltr'), [language]);

  useEffect(() => {
    if (status === 'anonymous') navigate('/login');
  }, [navigate, status]);

  if (status !== 'authenticated') {
    return (
      <div className={`${directionClass} py-12`}>
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-card border rounded-2xl shadow-sm p-6">
            <p className="text-muted-foreground">{language === 'ar' ? 'جاري التحميل…' : 'Loading…'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${directionClass} py-12`}>
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto bg-card border rounded-2xl shadow-sm p-6">
          <h1 className="text-2xl text-foreground mb-2">{language === 'ar' ? 'حسابي' : 'My account'}</h1>
          <p className="text-muted-foreground mb-6">
            {language === 'ar' ? 'معلومات حسابك الأساسية.' : 'Your basic account information.'}
          </p>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">{language === 'ar' ? 'الاسم' : 'Name'}</span>
              <span className="text-foreground font-medium">{user?.name || '—'}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</span>
              <span className="text-foreground font-medium">{user?.phone || '—'}</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-muted-foreground">{language === 'ar' ? 'الدور' : 'Role'}</span>
              <span className="text-foreground font-medium">{user?.role || '—'}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/"
              className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              {language === 'ar' ? 'الرجوع للرئيسية' : 'Back to home'}
            </Link>
            <button
              type="button"
              onClick={() => {
                logout();
                navigate('/');
              }}
              className="px-4 py-2 border border-border rounded-lg text-foreground hover:bg-secondary transition-colors"
            >
              {language === 'ar' ? 'تسجيل خروج' : 'Logout'}
            </button>
            <a
              href="https://medicare-iq.com/account-deletion"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-destructive text-destructive rounded-lg hover:bg-destructive/10 transition-colors"
            >
              {language === 'ar' ? 'حذف الحساب' : 'Delete Account'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
