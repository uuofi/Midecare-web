import { CheckCircle, Target, Lightbulb, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../lib/i18n';

export default function AboutPage() {
  const { language, t } = useLanguage();

  const copy = language === 'ar'
    ? {
        heroTitle: `حول ${t('appName')}`,
        heroSubtitle: 'تطبيق لحجز المواعيد والتواصل الآمن بين المراجع والطبيب.',
        ideaTitle: 'فكرة المنتج',
        ideaP1: 'الفكرة بسيطة: تسهيل وصول المراجع للطبيب وتنظيم المواعيد للطبيب من مكان واحد.',
        ideaP2: 'التطبيق يركز على الحجز، تفاصيل الموعد، المحادثة، وميزات الحساب مثل تغيير كلمة المرور وحذف الحساب.',
        howTitle: 'كيف يعمل',
        steps: [
          { number: '01', title: 'اختر نوع الحساب', description: 'مراجع أو طبيب.' },
          { number: '02', title: 'سجّل الدخول أو أنشئ حساب', description: 'باستخدام رقم الهاتف وكلمة المرور (قد يتطلب حساب الطبيب مراجعة/تفعيل).' },
          { number: '03', title: 'ابدأ', description: 'المراجع يحجز موعداً والطبيب يدير جدوله وخدماته ومواعيده.' },
          { number: '04', title: 'تواصل داخل الموعد', description: 'محادثة مرتبطة بالموعد مع إمكانية إرسال صور.' },
        ],
        advantagesTitle: 'ماذا يميز ميديكير',
        advantages: [
          'حجز وإلغاء المواعيد من داخل التطبيق',
          'تفاصيل الموعد ورقم الحجز وقد يتوفر QR',
          'فتح موقع العيادة في Google Maps',
          'محادثة مرتبطة بالموعد مع إرسال صور',
      
          'إعدادات الحساب: معلومات شخصية، تغيير كلمة المرور، حذف الحساب',
          'تقارير للطبيب (Excel) حسب ما يتيحه الخادم'
        ],
        mission: 'تسهيل تجربة الحجز والتواصل للمراجع والطبيب.',
        vision: 'منصة بسيطة وموثوقة لتنظيم المواعيد والتواصل.',
        values: 'الوضوح، الخصوصية، وتجربة مستخدم ممتازة.',
        futureTitle: 'التطوير المستقبلي',
        futureP1: 'نطور التطبيق بشكل مستمر بناءً على ملاحظات المستخدمين واحتياج العيادات.',
        futureP2: 'أي ميزات مستقبلية سيتم الإعلان عنها داخل التطبيق وعبر قنواتنا الرسمية.'
      }
    : {
        heroTitle: `About ${t('appName')}`,
        heroSubtitle: 'A mobile app for appointment booking and secure patient-doctor communication.',
        ideaTitle: 'Product idea',
        ideaP1: 'The idea is simple: make it easier for patients to reach doctors, and easier for doctors to manage appointments in one place.',
        ideaP2: 'The app focuses on booking, appointment details, chat (with optional E2EE), and account tools like password change and account deletion.',
        howTitle: 'How it works',
        steps: [
          { number: '01', title: 'Choose your role', description: 'Patient or doctor.' },
          { number: '02', title: 'Sign in or create an account', description: 'Using phone number and password (doctor accounts may require review/activation).' },
          { number: '03', title: 'Start', description: 'Patients book appointments; doctors manage schedules, services, and appointments.' },
          { number: '04', title: 'Chat for each appointment', description: 'Chat tied to the appointment, including image attachments.' },
        ],
        advantagesTitle: 'What makes MediCare different',
        advantages: [
          'Book and cancel appointments inside the app',
          'Appointment details and booking number (QR may be available)',
          'Open clinic location in Google Maps',
          'Chat tied to the appointment with image sending',
          'Optional end-to-end encryption for chat when keys are available',
          'Account tools: personal info, change password, delete account',
          'Doctor reports (Excel) depending on backend support'
        ],
        mission: 'Make booking and communication simpler for patients and doctors.',
        vision: 'A simple, reliable platform for appointments and communication.',
        values: 'Clarity, privacy, and great user experience.',
        futureTitle: 'Future development',
        futureP1: 'We continuously improve the app based on user feedback and clinic needs.',
        futureP2: 'Any upcoming features will be announced in-app and through official channels.'
      };

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="medical-ecg-bg bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{copy.heroTitle}</h1>
            <p className="text-xl text-primary-foreground/80">{copy.heroSubtitle}</p>
          </div>
        </div>
      </section>

      {/* Product Idea Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div>
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6">{copy.ideaTitle}</h2>
            <p className="text-lg text-muted-foreground mb-6">{copy.ideaP1}</p>
            <p className="text-lg text-muted-foreground mb-6">{copy.ideaP2}</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-12 text-center">{copy.howTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {copy.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Created It Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-8 text-center">{language === 'ar' ? `لماذا أنشأنا ${t('appName')}` : `Why we created ${t('appName')}`}</h2>
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl text-gray-900 mb-2">Mission</h3>
                  <p className="text-gray-600">{copy.mission}</p>
                </div>
                <div className="text-center">
                  <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl text-gray-900 mb-2">Vision</h3>
                  <p className="text-gray-600">{copy.vision}</p>
                </div>
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl text-gray-900 mb-2">Values</h3>
                  <p className="text-gray-600">{copy.values}</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 text-center">
                {language === 'ar'
                  ? 'هدفنا تقديم تجربة واضحة وسريعة للحجز والتواصل بدون تعقيد.'
                  : 'Our goal is a clear, fast booking and communication experience—without unnecessary complexity.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-12 text-center">{copy.advantagesTitle}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {copy.advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg text-gray-700">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6">{copy.futureTitle}</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">{copy.futureP1}</p>
            <p className="text-lg text-primary-foreground/80">{copy.futureP2}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
