import { useLanguage } from '../../lib/i18n';

export default function PrivacyPage() {
  // Privacy policy is intentionally written to reflect the mobile app behavior,
  // and avoids claims not supported by the current codebase.
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="medical-ecg-bg bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</h1>
            <p className="text-xl text-primary-foreground/80">
              {language === 'ar' ? 'آخر تحديث: يناير 2024' : 'Last updated: January 2024'}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="bg-secondary rounded-xl p-6 mb-8">
              <p className="text-gray-700 mb-0">
                {language === 'ar'
                  ? 'نحن نحترم خصوصيتك. هذه السياسة تشرح كيف نجمع ونستخدم ونشارك معلوماتك عند استخدامك لتطبيق MediCare.'
                  : 'We respect your privacy. This policy explains how we collect, use, and share information when you use the MediCare mobile app.'}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '1. المعلومات التي نجمعها' : '1. Information we collect'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'قد نجمع المعلومات التالية بحسب استخدامك للتطبيق:'
                    : 'Depending on how you use the app, we may collect the following:'}
                </p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'معلومات الحساب: رقم الهاتف، الاسم، البريد الإلكتروني، العمر (إن تم إدخالها).' : 'Account info: phone number, name, email, age (if provided).'} </li>
                  <li>{language === 'ar' ? 'معلومات المواعيد: بيانات الحجز وحالة الموعد ورقم الحجز.' : 'Appointments: booking details, status, and booking number.'}</li>
                  <li>{language === 'ar' ? 'المحادثة: الرسائل النصية والصور التي ترسلها ضمن محادثة الموعد.' : 'Chat: text messages and images sent in appointment chat.'}</li>
                  <li>{language === 'ar' ? 'بيانات الجهاز: رمز إشعارات (Push token) ومعرّفات تقنية لازمة لتشغيل الإشعارات.' : 'Device data: push notification token and technical identifiers required for notifications.'}</li>
                  <li>{language === 'ar' ? 'الموقع (عند الحاجة): عند اختيار/تحديد موقع العيادة على الخريطة.' : 'Location (when needed): when selecting a clinic location on a map.'}</li>
                  <li>{language === 'ar' ? 'الصور/الكاميرا (عند الحاجة): لاختيار/التقاط صور (مثل صورة الملف الشخصي أو صور المحادثة).' : 'Photos/camera (when needed): to pick/take images (profile photo or chat images).'} </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '2. كيف نستخدم معلوماتك' : '2. How we use your information'}</h2>
                <p className="text-gray-600 mb-4">{language === 'ar' ? 'نستخدم المعلومات من أجل:' : 'We use information to:'}</p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'تقديم خدمات التطبيق (تسجيل الدخول، الحجز، عرض التفاصيل، المحادثة).' : 'Provide app features (sign-in, booking, appointment details, chat).'} </li>
                  <li>{language === 'ar' ? 'إرسال إشعارات متعلقة بالخدمة عند تفعيلها.' : 'Send service-related notifications when enabled.'}</li>
                  <li>{language === 'ar' ? 'الدعم الفني والتواصل معك عند طلب المساعدة.' : 'Provide support and respond to your requests.'}</li>
                  <li>{language === 'ar' ? 'تحسين الأداء والأمان ومنع إساءة الاستخدام.' : 'Improve performance, security, and prevent abuse.'}</li>
                  <li>{language === 'ar' ? 'الامتثال للمتطلبات القانونية عند الحاجة.' : 'Comply with applicable legal obligations when required.'}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '3. الأمان' : '3. Security'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'نستخدم إجراءات أمن معقولة لحماية البيانات. قد يتم استخدام تشفير طرف لطرف (E2EE) للمحادثة عندما تكون مفاتيح التشفير متاحة بين الطرفين. لا يمكننا ضمان أمان مطلق.'
                    : 'We use reasonable security measures to protect data. Chat may use end-to-end encryption (E2EE) when encryption keys are available between participants. No system can guarantee absolute security.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '4. التخزين على الجهاز' : '4. On-device storage'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'قد يخزن التطبيق بعض البيانات محلياً على جهازك لتسهيل الاستخدام (مثل رموز تسجيل الدخول، بيانات مؤقتة للمواعيد، ومفاتيح التشفير للمحادثة).' 
                    : 'The app may store some data locally on your device for convenience (such as sign-in tokens, cached appointment data, and chat encryption keys).'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '5. مشاركة المعلومات' : '5. Sharing and disclosure'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'لا نبيع معلوماتك الشخصية. قد نشارك بياناتك في الحالات التالية فقط:'
                    : 'We do not sell your personal information. We may share data only in the following situations:'}
                </p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'بين المراجع والطبيب ضمن سياق الموعد (مثل تفاصيل الموعد والمحادثة).' : 'Between patient and doctor in the context of an appointment (appointment details and chat).'} </li>
                  <li>{language === 'ar' ? 'مع مزودي خدمات يساعدوننا على تشغيل الخدمة (مثل الإشعارات).' : 'With service providers that help operate the service (e.g., notifications).'} </li>
                  <li>{language === 'ar' ? 'للامتثال للقانون أو أوامر الجهات المختصة.' : 'To comply with law or lawful requests.'}</li>
                  <li>{language === 'ar' ? 'لحماية الحقوق ومنع الاحتيال وإساءة الاستخدام.' : 'To protect rights, prevent fraud, and abuse.'}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '6. الاحتفاظ بالبيانات' : '6. Data retention'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'نحتفظ ببياناتك طالما كان حسابك فعالاً أو حسب الحاجة لتقديم الخدمة. عند حذف الحساب قد يتم حذف بياناتك أو إخفاؤها وفق متطلبات التشغيل والالتزامات القانونية.'
                    : 'We retain your data while your account is active or as needed to provide the service. When you delete your account, data may be deleted or de-identified subject to operational and legal requirements.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '7. خياراتك وحقوقك' : '7. Your choices and rights'}</h2>
                <p className="text-gray-600 mb-4">{language === 'ar' ? 'يمكنك:' : 'You can:'}</p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'تحديث معلوماتك الشخصية من داخل التطبيق.' : 'Update your profile information in the app.'}</li>
                  <li>{language === 'ar' ? 'تغيير كلمة المرور.' : 'Change your password.'}</li>
                  <li>{language === 'ar' ? 'طلب حذف الحساب من شاشة حذف الحساب داخل التطبيق.' : 'Request account deletion from the in-app Delete Account screen.'}</li>
                  <li>{language === 'ar' ? 'التحكم بصلاحيات الجهاز (الموقع/الصور/الكاميرا) من إعدادات النظام.' : 'Control device permissions (location/photos/camera) from OS settings.'}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '8. خدمات الطرف الثالث' : '8. Third-party services'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'قد نستخدم خدمات طرف ثالث لتشغيل ميزات مثل الإشعارات. هذه الخدمات تخضع لسياسات الخصوصية الخاصة بها.'
                    : 'We may use third-party services to operate certain features such as push notifications. Those services are governed by their own privacy policies.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '9. خصوصية الأطفال' : "9. Children's privacy"}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'التطبيق غير مخصص لمن هم دون 18 عاماً. إذا كنت ولي أمر وتعتقد أن طفلاً قد زودنا ببياناته، تواصل معنا.'
                    : 'The app is not intended for people under 18. If you are a parent/guardian and believe a child provided data, contact us.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '10. التغييرات على هذه السياسة' : '10. Changes to this policy'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'قد نقوم بتحديث هذه السياسة من وقت لآخر. استمرارك باستخدام التطبيق يعني موافقتك على النسخة المحدثة.'
                    : 'We may update this policy from time to time. Continued use of the app means you accept the updated version.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '11. تواصل معنا' : '11. Contact us'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'لأي استفسار عن الخصوصية أو البيانات، تواصل معنا:'
                    : 'If you have questions about privacy or data, contact us:'}
                </p>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700">
                    <strong>{language === 'ar' ? 'البريد:' : 'Email:'}</strong> support@medicare-iq.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
