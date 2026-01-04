import { useLanguage } from '../../lib/i18n';

export default function TermsPage() {
  const { language } = useLanguage();

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="medical-ecg-bg bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</h1>
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
                  ? 'يرجى قراءة الشروط والأحكام بعناية قبل استخدام تطبيق MediCare. باستخدامك للتطبيق فإنك توافق على هذه الشروط.'
                  : 'Please read these terms carefully before using the MediCare app. By using the app, you agree to these terms.'}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '1. قبول الشروط' : '1. Acceptance of terms'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'عند إنشاء حساب واستخدام التطبيق، فأنت تقر بأنك قرأت وفهمت ووافقت على هذه الشروط وسياسة الخصوصية. إذا لم توافق، يرجى عدم استخدام التطبيق.'
                    : 'By creating an account and using the app, you acknowledge you have read and agree to these terms and the Privacy Policy. If you do not agree, do not use the app.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '2. وصف الخدمة' : '2. Service description'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'يوفر التطبيق ميزات مرتبطة بالمواعيد والتواصل بين المراجع والطبيب، وقد تشمل:'
                    : 'The app provides appointment and communication features for patients and doctors, which may include:'}
                </p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'حجز وإدارة المواعيد ومتابعة حالتها.' : 'Booking and managing appointments and their status.'}</li>
                  <li>{language === 'ar' ? 'محادثة مرتبطة بالموعد (نص/صور).' : 'Appointment-based chat (text/images).'} </li>
                  <li>{language === 'ar' ? 'ميزات حساب مثل تعديل المعلومات وتغيير كلمة المرور وحذف الحساب.' : 'Account features such as profile update, change password, and account deletion.'}</li>
                  <li>{language === 'ar' ? 'فتح موقع العيادة على الخرائط عند توفره.' : 'Open clinic location in maps when available.'}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '3. حساب المستخدم' : '3. User accounts'}</h2>
                <h3 className="text-xl text-gray-900 mb-3">{language === 'ar' ? 'إنشاء الحساب' : 'Registration'}</h3>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'يجب تقديم معلومات صحيحة عند التسجيل. أنت مسؤول عن الحفاظ على سرية بيانات الدخول وعن أي نشاط يتم عبر حسابك.'
                    : 'You must provide accurate information and keep your credentials secure. You are responsible for activities under your account.'}
                </p>
                <h3 className="text-xl text-gray-900 mb-3">{language === 'ar' ? 'مسؤولياتك' : 'Your responsibilities'}</h3>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'يجب أن يكون عمرك 18 سنة أو أكثر لإنشاء حساب.' : 'You must be 18+ to create an account.'}</li>
                  <li>{language === 'ar' ? 'لا تشارك كلمة المرور مع الآخرين.' : 'Do not share your password.'}</li>
                  <li>{language === 'ar' ? 'أبلغنا عند الاشتباه بوصول غير مصرح به.' : 'Notify us if you suspect unauthorized access.'}</li>
                  <li>{language === 'ar' ? 'أنت مسؤول عن المحتوى الذي ترسله (مثل رسائل وصور المحادثة).' : 'You are responsible for content you submit (e.g., chat messages/images).'} </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '4. الاستخدام المقبول' : '4. Acceptable use'}</h2>
                <p className="text-gray-600 mb-4">You agree not to:</p>
                <ul className="text-gray-600 space-y-2 ml-6">
                  <li>{language === 'ar' ? 'مخالفة القوانين أو إساءة استخدام الخدمة.' : 'Violate laws or misuse the service.'}</li>
                  <li>{language === 'ar' ? 'رفع برمجيات خبيثة أو محاولة اختراق أو تعطيل الخدمة.' : 'Upload malware or attempt to disrupt the service.'}</li>
                  <li>{language === 'ar' ? 'محاولة الوصول غير المصرح به للأنظمة.' : 'Attempt unauthorized access.'}</li>
                  <li>{language === 'ar' ? 'استخدام التطبيق لأغراض غير قانونية.' : 'Use the app for unlawful purposes.'}</li>
                  <li>{language === 'ar' ? 'الهندسة العكسية أو استخراج الشفرة أو العبث بالتطبيق.' : 'Reverse engineer or tamper with the app.'}</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '5. المحتوى والبيانات' : '5. Content and data'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'تحتفظ بحقوقك على المحتوى الذي ترسله. ولكنك تمنحنا ترخيصاً محدوداً لمعالجة وتخزين البيانات فقط لتقديم الخدمة (مثل إظهار المحادثة للطرف الآخر ضمن الموعد).' 
                    : 'You retain rights to your content. You grant us a limited license to process and store data only to provide the service (e.g., show chat to the other party in an appointment).'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '6. توفر الخدمة' : '6. Service availability'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'قد تتغير أو تتوقف بعض الميزات مؤقتاً لأسباب تقنية أو أمنية أو بسبب التحديثات. لا نضمن توفر الخدمة دون انقطاع.'
                    : 'Features may be changed or temporarily unavailable for technical, security, or update reasons. We do not guarantee uninterrupted availability.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '7. الملكية الفكرية' : '7. Intellectual property'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'التطبيق وواجهاته واسم المنتج وشعاراته هي ملك للجهة المالكة. لا يجوز نسخ أو تعديل أو إعادة توزيع أو هندسة عكسية لأي جزء من التطبيق.'
                    : 'The app, its UI, and branding are owned by the publisher. You may not copy, modify, redistribute, or reverse engineer any part of the app.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '8. إنهاء الحساب' : '8. Termination'}</h2>
                <h3 className="text-xl text-gray-900 mb-3">{language === 'ar' ? 'بواسطتك' : 'By you'}</h3>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'يمكنك طلب حذف حسابك من داخل التطبيق عبر شاشة حذف الحساب.'
                    : 'You can request account deletion from within the app using the Delete Account screen.'}
                </p>
                <h3 className="text-xl text-gray-900 mb-3">{language === 'ar' ? 'بواسطتنا' : 'By us'}</h3>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'قد نعلّق أو ننهي الحساب عند إساءة الاستخدام أو مخالفة الشروط أو لأسباب أمنية.'
                    : 'We may suspend or terminate accounts for abuse, violations of these terms, or security reasons.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '9. إخلاء المسؤولية وحدودها' : '9. Disclaimers and limitations'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar'
                    ? 'يتم تقديم الخدمة كما هي دون أي ضمانات. قد تحتوي الخدمة على أخطاء أو انقطاعات.'
                    : 'The service is provided “as is” without warranties. The service may have errors or interruptions.'}
                </p>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'إلى أقصى حد يسمح به القانون، لا نتحمل مسؤولية الأضرار غير المباشرة الناتجة عن استخدامك للخدمة.'
                    : 'To the maximum extent permitted by law, we are not liable for indirect damages arising from your use of the service.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '10. التعويض' : '10. Indemnification'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'توافق على تعويض الجهة المالكة عن المطالبات والأضرار الناتجة عن إساءة الاستخدام أو مخالفة الشروط أو انتهاك حقوق الآخرين.'
                    : 'You agree to indemnify the publisher for claims and losses resulting from misuse, violations of these terms, or infringement of others’ rights.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '11. القانون الواجب التطبيق' : '11. Governing law'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'تخضع هذه الشروط للقوانين والأنظمة المعمول بها. يتم حل النزاعات عبر الجهات القضائية المختصة.'
                    : 'These terms are governed by applicable laws and regulations. Disputes will be handled by competent courts.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '12. تغييرات الشروط' : '12. Changes to terms'}</h2>
                <p className="text-gray-600">
                  {language === 'ar'
                    ? 'قد نقوم بتعديل هذه الشروط. استمرارك باستخدام التطبيق بعد أي تعديل يعني موافقتك على النسخة المحدثة.'
                    : 'We may update these terms. Continued use of the app after changes means you accept the updated version.'}
                </p>
              </div>

              <div>
                <h2 className="text-2xl text-gray-900 mb-4">{language === 'ar' ? '13. معلومات التواصل' : '13. Contact information'}</h2>
                <p className="text-gray-600 mb-4">
                  {language === 'ar' ? 'للاستفسار حول الشروط:' : 'For questions about these terms:'}
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
