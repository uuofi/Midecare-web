import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ApiError } from '../../lib/api';
import { useAuth } from '../../lib/auth';
import { useLanguage } from '../../lib/i18n';
import { specialtyOptions } from '../../lib/specialties';

const isStrongPassword = (pwd: string): boolean => {
  if (typeof pwd !== 'string') return false;
  if (pwd.length < 8) return false;
  if (!/[A-Z]/.test(pwd)) return false;
  if (!/[a-z]/.test(pwd)) return false;
  if (!/\d/.test(pwd)) return false;
  return true;
};

export default function SignupPage() {
  const { language } = useLanguage();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const directionClass = useMemo(() => (language === 'ar' ? 'rtl' : 'ltr'), [language]);

  const [role, setRole] = useState<'patient' | 'doctor'>('patient');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState<string>('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Doctor fields
  const [doctorSpecialtySlug, setDoctorSpecialtySlug] = useState<string>(specialtyOptions[0]?.value || '');
  const doctorSpecialtyLabel = useMemo(
    () => specialtyOptions.find((o) => o.value === doctorSpecialtySlug)?.label || '',
    [doctorSpecialtySlug]
  );

  const [licenseNumber, setLicenseNumber] = useState('');
  const [avatarDataUrl, setAvatarDataUrl] = useState<string>('');
  const [location, setLocation] = useState('');
  const [locationLat, setLocationLat] = useState<string>('');
  const [locationLng, setLocationLng] = useState<string>('');
  const [certification, setCertification] = useState('');
  const [cv, setCv] = useState('');
  const [consultationFee, setConsultationFee] = useState('');
  const [secretaryPhone, setSecretaryPhone] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const normalizeIraqPhoneTo10Digits = (value: string): string => {
    let digits = String(value || '').replace(/\D/g, '');
    if (digits.startsWith('964') && digits.length === 13) digits = digits.slice(3);
    if (digits.startsWith('0') && digits.length === 11) digits = digits.slice(1);
    return digits.slice(0, 10);
  };

  const onPickAvatar = async (file: File | null) => {
    if (!file) {
      setAvatarDataUrl('');
      return;
    }
    try {
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = () => reject(new Error('FileReader error'));
        reader.onload = () => resolve(String(reader.result || ''));
        reader.readAsDataURL(file);
      });
      setAvatarDataUrl(dataUrl);
    } catch {
      setAvatarDataUrl('');
      setError(language === 'ar' ? 'تعذّر قراءة الصورة المختارة. جرّب صورة أخرى.' : 'Failed to read the selected image.');
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    if (!name.trim() || !phone.trim() || !password || !confirmPassword || !age.trim()) {
      setError(language === 'ar' ? 'الرجاء تعبئة جميع الحقول المطلوبة.' : 'Please fill all required fields.');
      return;
    }

    const phoneDigits = normalizeIraqPhoneTo10Digits(phone);
    if (phoneDigits.length !== 10 || !phoneDigits.startsWith('7')) {
      setError(language === 'ar' ? 'رقم الهاتف يجب أن يكون 10 أرقام ويبدأ بـ7' : 'Phone must be 10 digits starting with 7.');
      return;
    }

    const ageNumber = Number(age);
    if (!Number.isFinite(ageNumber) || ageNumber < 1 || ageNumber > 120) {
      setError(language === 'ar' ? 'يرجى إدخال عمر صحيح بين 1 و 120' : 'Please enter a valid age between 1 and 120.');
      return;
    }

    if (password !== confirmPassword) {
      setError(language === 'ar' ? 'كلمات المرور غير متطابقة' : 'Passwords do not match.');
      return;
    }

    if (!isStrongPassword(password)) {
      setError(
        language === 'ar'
          ? 'كلمة المرور لازم تكون 8 أحرف وتحتوي حرف كبير وصغير ورقم.'
          : 'Password must be 8+ chars with upper, lower, and a number.'
      );
      return;
    }

    if (role === 'doctor') {
      if (!doctorSpecialtySlug) {
        setError(language === 'ar' ? 'يرجى اختيار التخصص' : 'Please select a specialty.');
        return;
      }
      if (!licenseNumber.trim()) {
        setError(language === 'ar' ? 'يرجى كتابة رقم الترخيص' : 'License number is required.');
        return;
      }
      if (!avatarDataUrl) {
        setError(language === 'ar' ? 'يرجى اختيار صورة للطبيب' : 'Doctor photo is required.');
        return;
      }
      if (!location.trim() || !certification.trim() || !cv.trim()) {
        setError(language === 'ar' ? 'يرجى إكمال الملف المهني (الموقع، الشهادة، السيرة الذاتية)' : 'Please complete professional details (location, certification, CV).');
        return;
      }
      const lat = Number(locationLat);
      const lng = Number(locationLng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng)) {
        setError(language === 'ar' ? 'يرجى إدخال إحداثيات صحيحة للموقع' : 'Please enter valid location coordinates.');
        return;
      }
      if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        setError(language === 'ar' ? 'إحداثيات الموقع خارج النطاق' : 'Location coordinates are out of range.');
        return;
      }
      const feeValue = Number(consultationFee);
      if (!consultationFee.trim() || Number.isNaN(feeValue) || feeValue <= 0) {
        setError(language === 'ar' ? 'يرجى تحديد رسوم الاستشارة بشكل صحيح.' : 'Please enter a valid consultation fee.');
        return;
      }
      const secretaryDigits = normalizeIraqPhoneTo10Digits(secretaryPhone);
      if (secretaryDigits.length !== 10 || !secretaryDigits.startsWith('7')) {
        setError(language === 'ar' ? 'رقم السكرتير يجب أن يكون 10 أرقام ويبدأ بـ7' : 'Secretary phone must be 10 digits starting with 7.');
        return;
      }
    }

    setSubmitting(true);
    try {
      const res = await signup({
        name,
        phone: phoneDigits,
        email: role === 'patient' && email.trim() ? email : undefined,
        password,
        role,
        age: ageNumber,
        ...(role === 'doctor'
          ? {
              doctorSpecialty: doctorSpecialtyLabel,
              doctorSpecialtySlug,
              licenseNumber: licenseNumber.trim(),
              avatarUrl: avatarDataUrl,
              location: location.trim(),
              locationLat: Number(locationLat),
              locationLng: Number(locationLng),
              certification: certification.trim(),
              cv: cv.trim(),
              consultationFee: Number(consultationFee),
              secretaryPhone: normalizeIraqPhoneTo10Digits(secretaryPhone),
            }
          : {}),
      });

      if (res.needsApproval) {
        setInfo(res.message || (language === 'ar' ? 'تم إنشاء الحساب وبانتظار موافقة الادمن.' : 'Account created, pending admin approval.'));
        navigate('/login');
        return;
      }

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
        <div className="max-w-2xl mx-auto bg-card border rounded-2xl shadow-sm p-6">
          <h1 className="text-2xl text-foreground mb-2">{language === 'ar' ? 'إنشاء حساب' : 'Sign up'}</h1>
          <p className="text-muted-foreground mb-6">
            {language === 'ar'
              ? 'أنشئ حساب مراجع أو طبيب بنفس نظام التطبيق.'
              : 'Create a patient or doctor account (same backend as the app).'}
          </p>

          <div className="mb-6 flex gap-2">
            <button
              type="button"
              onClick={() => setRole('patient')}
              className={`px-4 py-2 rounded-lg border ${role === 'patient' ? 'bg-primary text-primary-foreground border-primary' : 'bg-input-background text-foreground border-border'}`}
            >
              {language === 'ar' ? 'مراجع' : 'Patient'}
            </button>
            <button
              type="button"
              onClick={() => setRole('doctor')}
              className={`px-4 py-2 rounded-lg border ${role === 'doctor' ? 'bg-primary text-primary-foreground border-primary' : 'bg-input-background text-foreground border-border'}`}
            >
              {language === 'ar' ? 'طبيب' : 'Doctor'}
            </button>
          </div>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-secondary text-foreground border">
              {error}
            </div>
          )}

          {info && (
            <div className="mb-4 p-3 rounded-lg bg-secondary text-foreground border">
              {info}
            </div>
          )}

          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'الاسم' : 'Name'}</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</label>
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
                {role === 'patient' ? (
                  <>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'الإيميل (اختياري)' : 'Email (optional)'}</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      autoComplete="email"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                    />
                  </>
                ) : (
                  <div className="hidden md:block" />
                )}
              </div>
              <div>
                <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'العمر' : 'Age'}</label>
                <input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  inputMode="numeric"
                  className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                  placeholder={language === 'ar' ? 'مثال: 25' : 'e.g. 25'}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                autoComplete="new-password"
                className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                {language === 'ar'
                  ? 'الرمز لازم يكون 8 أحرف وتحتوي حرف كبير وصغير ورقم.'
                  : '8+ chars with upper, lower, and a number.'}
              </p>
            </div>

            <div>
              <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'تأكيد كلمة المرور' : 'Confirm password'}</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                autoComplete="new-password"
                className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            {role === 'doctor' && (
              <div className="mt-2 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'التخصص' : 'Specialty'}</label>
                    <select
                      value={doctorSpecialtySlug}
                      onChange={(e) => setDoctorSpecialtySlug(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                    >
                      {specialtyOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'رقم الترخيص' : 'License number'}</label>
                    <input
                      value={licenseNumber}
                      onChange={(e) => setLicenseNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'صورة الطبيب' : 'Doctor photo'}</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => onPickAvatar(e.target.files?.[0] || null)}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none"
                  />
                  {avatarDataUrl ? (
                    <p className="mt-2 text-xs text-muted-foreground">
                      {language === 'ar' ? 'تم اختيار الصورة.' : 'Image selected.'}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'الموقع (العنوان)' : 'Location (address)'}</label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'خط العرض (Lat)' : 'Latitude (Lat)'}</label>
                    <input
                      value={locationLat}
                      onChange={(e) => setLocationLat(e.target.value)}
                      inputMode="decimal"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                      placeholder={language === 'ar' ? 'مثال: 33.3128' : 'e.g. 33.3128'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'خط الطول (Lng)' : 'Longitude (Lng)'}</label>
                    <input
                      value={locationLng}
                      onChange={(e) => setLocationLng(e.target.value)}
                      inputMode="decimal"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                      placeholder={language === 'ar' ? 'مثال: 44.3615' : 'e.g. 44.3615'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'الشهادة' : 'Certification'}</label>
                  <input
                    value={certification}
                    onChange={(e) => setCertification(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div>
                  <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'السيرة الذاتية' : 'CV'}</label>
                  <textarea
                    value={cv}
                    onChange={(e) => setCv(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'رسوم الاستشارة' : 'Consultation fee'}</label>
                    <input
                      value={consultationFee}
                      onChange={(e) => setConsultationFee(e.target.value)}
                      inputMode="numeric"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                      placeholder={language === 'ar' ? 'مثال: 20000' : 'e.g. 20000'}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-foreground mb-1">{language === 'ar' ? 'رقم السكرتير' : 'Secretary phone'}</label>
                    <input
                      value={secretaryPhone}
                      onChange={(e) => setSecretaryPhone(normalizeIraqPhoneTo10Digits(e.target.value))}
                      inputMode="tel"
                      autoComplete="tel"
                      className="w-full px-4 py-3 rounded-lg bg-input-background border border-border text-foreground outline-none focus:ring-2 focus:ring-ring"
                      placeholder={language === 'ar' ? 'أدخل 10 أرقام تبدأ بـ7' : 'Enter 10 digits starting with 7'}
                      maxLength={10}
                    />
                  </div>
                </div>

                <p className="text-xs text-muted-foreground">
                  {language === 'ar'
                    ? 'ملاحظة: حساب الطبيب قد يحتاج موافقة الادمن قبل تسجيل الدخول.'
                    : 'Note: doctor accounts may require admin approval before login.'}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {submitting ? (language === 'ar' ? 'جاري الإنشاء…' : 'Creating…') : (language === 'ar' ? 'إنشاء حساب' : 'Create account')}
            </button>
          </form>

          <div className="mt-6 text-sm text-muted-foreground">
            {language === 'ar' ? 'عندك حساب؟ ' : 'Already have an account? '}
            <Link to="/login" className="text-primary hover:underline">
              {language === 'ar' ? 'تسجيل الدخول' : 'Login'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
