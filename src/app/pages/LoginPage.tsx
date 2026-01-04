import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiError } from '../../lib/api';
import { useAuth } from '../../lib/auth';
import { useLanguage } from '../../lib/i18n';

export default function LoginPage() {
  const { t, language } = useLanguage();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const directionClass = useMemo(() => (language === 'ar' ? 'rtl' : 'ltr'), [language]);

  const normalizeIraqPhoneTo10Digits = (value: string): string => {
    let digits = String(value || '').replace(/\D/g, '');
    if (digits.startsWith('964') && digits.length === 13) digits = digits.slice(3);
    if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1);
    return digits.slice(0, 10);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const phoneDigits = normalizeIraqPhoneTo10Digits(phone);
    if (phoneDigits.length !== 10 || !phoneDigits.startsWith('7')) {
      setError(language === 'ar' ? 'رقم الهاتف يجب أن يكون 10 أرقام ويبدأ بـ7' : 'Phone must be 10 digits starting with 7.');
      return;
    }
    if (!password) {
      setError(language === 'ar' ? 'يرجى إدخال كلمة المرور' : 'Please enter your password.');
      return;
    }

    setSubmitting(true);
    try {
      await login({ phone: phoneDigits, password });
      navigate('/');
    } catch (err) {
      if (err instanceof ApiError) setError(err.message);
      else setError(language === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`${directionClass} py-12`}> 
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-card border rounded-2xl shadow-sm p-6">
          <h1 className="text-2xl text-foreground mb-2">
            {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
          </h1>
          <p className="text-muted-foreground mb-6">
            {language === 'ar'
              ? 'ادخل رقم الهاتف (10 أرقام تبدأ بـ7) وكلمة المرور.'
              : 'Enter your phone (10 digits starting with 7) and password.'}
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-secondary text-foreground border">
              {error}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-foreground mb-1">
                {language === 'ar' ? 'رقم الهاتف' : 'Phone'}
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(normalizeIraqPhoneTo10Digits(e.target.value))}
                inputMode="tel"
                autoComplete="tel"
                className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                placeholder={language === 'ar' ? 'أدخل 10 أرقام تبدأ بـ7' : 'Enter 10 digits starting with 7'}
                maxLength={10}
              />
            </div>

            <div>
              <label className="block text-sm text-foreground mb-1">
                {language === 'ar' ? 'كلمة المرور' : 'Password'}
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? (language === 'ar' ? 'جاري الدخول…' : 'Signing in…') : (language === 'ar' ? 'دخول' : 'Sign in')}
            </button>
          </form>

          <div className="mt-6 text-sm text-muted-foreground">
            {language === 'ar' ? 'ما عندك حساب؟ ' : "Don't have an account? "}
            <Link to="/signup" className="text-primary hover:underline">
              {language === 'ar' ? 'إنشاء حساب' : 'Sign up'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
