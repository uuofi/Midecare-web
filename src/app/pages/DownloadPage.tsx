import { Smartphone, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../lib/i18n';

export default function DownloadPage() {
  const { language, t } = useLanguage();

  const installSteps =
    language === 'ar'
      ? [
          {
            step: '1',
            title: 'الحصول على التطبيق',
            description: 'روابط التحميل تُنشر من الجهة المالكة للتطبيق. إذا لم تكن لديك رابط التحميل تواصل مع الدعم.'
          },
          {
            step: '2',
            title: 'التثبيت',
            description: 'اتبع خطوات التثبيت على جهازك.'
          },
          {
            step: '3',
            title: 'تسجيل الدخول',
            description: 'سجّل الدخول برقم الهاتف وكلمة المرور.'
          },
          {
            step: '4',
            title: 'ابدأ الاستخدام',
            description: 'احجز المواعيد وتابعها وتواصل عبر المحادثة المرتبطة بالموعد.'
          }
        ]
      : [
          {
            step: '1',
            title: 'Get the app',
            description: 'Download links are shared by the app publisher. If you don\'t have a link, contact support.'
          },
          {
            step: '2',
            title: 'Install',
            description: 'Follow your device\'s installation prompts.'
          },
          {
            step: '3',
            title: 'Sign in',
            description: 'Sign in with your phone number and password.'
          },
          {
            step: '4',
            title: 'Start using',
            description: 'Book and manage appointments and use appointment chat.'
          }
        ];

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="medical-ecg-bg bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl mb-6">
              {language === 'ar' ? `تحميل ${t('appName')}` : `Download ${t('appName')}`}
            </h1>
            <p className="text-xl text-primary-foreground/80">
              {language === 'ar'
                ? 'التطبيق مخصص للهواتف (مراجع/طبيب) لحجز المواعيد والتواصل ضمن الموعد.'
                : 'Mobile app for patients and doctors to book appointments and chat per appointment.'}
            </p>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary rounded-xl p-8">
            <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? 'معلومات مهمة' : 'Important notes'}</h2>
            <div className="space-y-2 text-gray-700">
              <p>
                {language === 'ar'
                  ? 'التطبيق مصمم للعمل على Android و iOS.'
                  : 'The app is designed to run on Android and iOS.'}
              </p>
              <p>
                {language === 'ar'
                  ? 'قد يطلب صلاحيات مثل: الكاميرا/الصور (للملف الشخصي أو الصور في المحادثة) والموقع (لاختيار موقع العيادة على الخريطة).'
                  : 'It may request permissions such as camera/photos (profile or chat images) and location (to pick a clinic location on the map).'}
              </p>
              <p>
                {language === 'ar'
                  ? 'للدعم أو الحصول على رابط التحميل، تواصل معنا عبر صفحة التواصل.'
                  : 'For support or to obtain a download link, please contact us via the Contact page.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 text-center">
              {language === 'ar' ? 'خطوات التثبيت' : 'Installation steps'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {installSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Highlight */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl mb-12 text-center">
              {language === 'ar' ? 'ميزات التطبيق' : 'App features'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                language === 'ar' ? 'حجز المواعيد ومتابعتها' : 'Book and manage appointments',
                language === 'ar' ? 'محادثة مرتبطة بالموعد (نص/صور)' : 'Appointment-based chat (text/images)',
                language === 'ar' ? 'تشفير طرف لطرف للمحادثة عند توفره' : 'End-to-end encryption for chat when available',
                language === 'ar' ? 'إشعارات (حسب إعدادات الجهاز والخادم)' : 'Notifications (depending on device/backend settings)',
                language === 'ar' ? 'عرض موقع العيادة وفتحها على الخرائط' : 'Clinic location and open in maps',
                language === 'ar' ? 'إدارة الحساب: معلومات شخصية/تغيير كلمة المرور/حذف الحساب' : 'Account tools: profile, change password, delete account',
                language === 'ar' ? 'سجل نشاط للحساب (إذا كان متاحاً)' : 'Activity log (when available)'
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
            {language === 'ar' ? 'تحتاج مساعدة؟' : 'Need help?'}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'ar'
              ? 'إذا واجهت مشكلة بالتثبيت أو تسجيل الدخول، تواصل معنا.'
              : 'If you have issues installing or signing in, contact us.'}
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            {language === 'ar' ? 'تواصل معنا' : 'Contact'}
          </a>
        </div>
      </section>
    </div>
  );
}
