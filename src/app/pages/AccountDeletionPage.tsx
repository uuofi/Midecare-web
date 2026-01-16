import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { useLanguage } from '../../lib/i18n';

export default function AccountDeletionPage() {
  const { language } = useLanguage();
  const { user, logout, accessToken, status } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // إذا لم يكن المستخدم مسجل دخول، يتم توجيهه لتسجيل الدخول
  useEffect(() => {
    if (status === 'anonymous' || status === 'loading') {
      setTimeout(() => navigate('/login?redirect=/account-deletion'), 500);
    }
  }, [status, navigate]);

  // إذا تم حذف الحساب أو لم يعد مسجلاً دخول، لا تظهر الفورم
  if (status !== 'authenticated') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold mb-4">{language === 'ar' ? 'حذف الحساب' : 'Delete Account'}</h1>
          <p className="mb-4 text-gray-600">{language === 'ar' ? 'يجب تسجيل الدخول أولاً.' : 'You must be logged in.'}</p>
        </div>
      </div>
    );
  }

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    setLoading(true);
    if (!accessToken) {
      setError(language === 'ar' ? 'يجب تسجيل الدخول أولاً.' : 'You must be logged in.');
      setLoading(false);
      return;
    }
    try {
      const apiBase = (import.meta as any)?.env?.VITE_API_BASE_URL || 'https://api.medicare-iq.com';
      const res = await fetch(`${apiBase}/api/auth/me`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`
        },
        body: JSON.stringify({ password })
      });
      if (!res.ok) {
        let data: { message?: string } = {};
        try { data = await res.json(); } catch {}
        setError((data && data.message) || (language === 'ar' ? 'كلمة المرور غير صحيحة أو حدث خطأ.' : 'Incorrect password or error.'));
        setLoading(false);
        return;
      }
      setSuccess(true);
      setLoading(false);
      logout();
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError(language === 'ar' ? 'حدث خطأ. حاول مرة أخرى.' : 'An error occurred. Please try again.');
      // eslint-disable-next-line no-console
      console.error('Account deletion error:', err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form onSubmit={handleDelete} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">{language === 'ar' ? 'حذف الحساب' : 'Delete Account'}</h1>
        <p className="mb-4 text-center text-gray-600">{language === 'ar' ? 'يرجى إدخال كلمة المرور لتأكيد حذف الحساب. لا يمكن التراجع عن هذه العملية.' : 'Please enter your password to confirm account deletion. This action cannot be undone.'}</p>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 mb-3"
          placeholder={language === 'ar' ? 'كلمة المرور' : 'Password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <div className="text-red-600 mb-3 text-center">{error}</div>}
        {success && <div className="text-green-600 mb-3 text-center">{language === 'ar' ? 'تم حذف الحساب بنجاح.' : 'Account deleted successfully.'}</div>}
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          disabled={loading}
        >
          {loading ? (language === 'ar' ? 'جاري الحذف...' : 'Deleting...') : (language === 'ar' ? 'حذف الحساب' : 'Delete Account')}
        </button>
      </form>
    </div>
  );
}
