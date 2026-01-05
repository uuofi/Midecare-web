import { useMemo, useState } from 'react';
import { Mail, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { useLanguage } from '../../lib/i18n';

export default function ContactPage() {
  const { language, t } = useLanguage();

  const whatsappNumber = useMemo(() => {
    const raw = (import.meta as any)?.env?.VITE_SUPPORT_WHATSAPP_NUMBER;
    const fallback = '9647838188916';
    const value = typeof raw === 'string' && raw.trim() ? raw.trim() : fallback;
    return value.replace(/[^0-9]/g, '');
  }, []);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const lines: string[] = [];
    lines.push(language === 'ar' ? 'مرحباً، أريد التواصل مع الدعم.' : 'Hi, I want to contact support.');
    if (formData.name.trim()) lines.push(`${language === 'ar' ? 'الاسم' : 'Name'}: ${formData.name.trim()}`);
    if (formData.phone.trim()) lines.push(`${language === 'ar' ? 'الهاتف' : 'Phone'}: ${formData.phone.trim()}`);
    if (formData.email.trim()) lines.push(`${language === 'ar' ? 'الإيميل' : 'Email'}: ${formData.email.trim()}`);
    if (formData.message.trim()) lines.push(`${language === 'ar' ? 'الرسالة' : 'Message'}: ${formData.message.trim()}`);
    const text = encodeURIComponent(lines.join('\n'));

    const waUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    const mailtoUrl = `mailto:medicare410@gmail.com?subject=${encodeURIComponent(
      language === 'ar' ? 'تواصل مع الدعم' : 'Support request'
    )}&body=${text}`;

    // Prefer WhatsApp first
    try {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className={`medical-ecg-bg bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{t('getInTouch')}</h1>
            <p className="text-xl text-primary-foreground/80">
              {t('readyTransform')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className={`py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl text-gray-900 mb-6">{t('sendMessage')}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t('fullName')} *</Label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={language === 'ar' ? 'الاسم الكامل' : 'Full name'}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">{t('emailAddress')} ({language === 'ar' ? 'اختياري' : 'Optional'})</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">{t('phoneNumber')} *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={language === 'ar' ? 'رقم الهاتف' : 'Phone number'}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">{t('message')} (Optional)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={language === 'ar' ? 'اكتب رسالتك هنا…' : 'Write your message…'}
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:opacity-90">
                  {language === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl text-gray-900 mb-6">{t('contactInfo')}</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{language === 'ar' ? 'واتساب' : 'WhatsApp'}</h3>
                      <a
                        className="text-gray-600 hover:underline"
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {language === 'ar' ? 'افتح واتساب للدعم' : 'Open WhatsApp support'}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900 mb-1">{t('email')}</h3>
                      <p className="text-gray-600">medicare410@gmail.com</p>               
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
