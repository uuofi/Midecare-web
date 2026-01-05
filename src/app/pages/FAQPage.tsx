import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { useLanguage } from '../../lib/i18n';

export default function FAQPage() {
  const { language, t } = useLanguage();

  const faqs = language === 'ar'
    ? [
        {
          category: 'البدء',
          questions: [
            {
              question: 'كيف أختار نوع الحساب؟',
              answer: 'عند فتح التطبيق ستظهر شاشة اختيار النوع: مراجع أو طبيب. يمكنك تغييره لاحقاً من شاشة تسجيل الدخول.'
            },
            {
              question: 'كيف أسجل دخول؟',
              answer: 'تسجيل الدخول يكون برقم الهاتف وكلمة المرور. يمكن حفظ الجلسة لتسجيل الدخول تلقائياً.'
            },
            {
              question: 'هل حساب الطبيب يحتاج موافقة؟',
              answer: 'قد تظهر حالة “قيد المراجعة” لبعض حسابات الأطباء حسب إعدادات النظام.'
            }
          ]
        },
        {
          category: 'المواعيد',
          questions: [
            {
              question: 'كيف أحجز موعد؟',
              answer: 'اختر التخصص ثم الطبيب ثم الخدمة (إن وجدت) ثم الوقت المتاح. بعد الحجز يمكنك متابعة حالة الموعد ورقم الحجز.'
            },
            {
              question: 'هل أقدر ألغي الموعد؟',
              answer: 'نعم، يمكن إلغاء الموعد من شاشة تفاصيل الموعد حسب سياسة الإلغاء.'
            },
            {
              question: 'ما هي حالات الموعد؟',
              answer: 'يتم عرض الحالة مثل: قيد الانتظار، مؤكد، مكتمل، ملغي.'
            }
          ]
        },
        {
          category: 'المحادثة',
          questions: [
            {
              question: 'هل توجد محادثة بين المراجع والطبيب؟',
              answer: 'نعم، توجد شاشة محادثة مرتبطة بالموعد ويمكن إرسال رسائل وصور.'
            },
            {
              question: 'هل المحادثة مشفرة؟',
              answer: 'التطبيق يدعم تشفير طرف لطرف (E2EE) للمحادثة عند توفر مفاتيح التشفير بين الطرفين.'
            },
            {
              question: 'هل أقدر أحذف أو أبلغ عن رسالة؟',
              answer: 'قد تتوفر خيارات حذف/إبلاغ عن رسالة حسب صلاحيات الحساب وإعدادات الخادم.'
            }
          ]
        },
        {
          category: 'الحساب والخصوصية',
          questions: [
            {
              question: 'كيف أعدل معلوماتي؟',
              answer: 'من الإعدادات يمكنك تعديل الاسم/الهاتف/الإيميل/العمر.'
            },
            {
              question: 'كيف أغير كلمة المرور؟',
              answer: 'من شاشة تغيير كلمة المرور داخل الإعدادات.'
            },
            {
              question: 'كيف أحذف حسابي؟',
              answer: 'من شاشة حذف الحساب داخل التطبيق. سيتم طلب كلمة المرور للتأكيد.'
            }
          ]
        }
      ]
    : [
        {
          category: 'Getting started',
          questions: [
            {
              question: 'How do I choose my account type?',
              answer: 'On first launch, you can choose Patient or Doctor. You can change it later from the login screen.'
            },
            {
              question: 'How do I sign in?',
              answer: 'Sign in with your phone number and password. The app can keep you signed in.'
            },
            {
              question: 'Do doctor accounts require approval?',
              answer: 'Some doctor accounts may show “pending review” depending on system settings.'
            }
          ]
        },
        {
          category: 'Appointments',
          questions: [
            {
              question: 'How do I book an appointment?',
              answer: 'Select specialty → doctor → service (if available) → an available time slot. You can then track status and booking number.'
            },
            {
              question: 'Can I cancel an appointment?',
              answer: 'Yes, you can cancel from the appointment details screen depending on the cancellation policy.'
            },
            {
              question: 'What appointment statuses exist?',
              answer: 'The app displays statuses such as pending, confirmed, completed, and cancelled.'
            }
          ]
        },
        {
          category: 'Chat',
          questions: [
            {
              question: 'Is there chat between patient and doctor?',
              answer: 'Yes, chat is tied to each appointment and supports text and image messages.'
            },
            {
              question: 'Is chat encrypted?',
              answer: 'The app supports end-to-end encryption (E2EE) for chat when encryption keys are available between participants.'
            },
            {
              question: 'Can I delete or report a message?',
              answer: 'Delete/report options may be available depending on account permissions and backend settings.'
            }
          ]
        },
        {
          category: 'Account & privacy',
          questions: [
            {
              question: 'How do I update my info?',
              answer: 'From settings you can edit your name/phone/email/age.'
            },
            {
              question: 'How do I change my password?',
              answer: 'Use the Change Password screen in settings.'
            },
            {
              question: 'How do I delete my account?',
              answer: 'Use the Delete Account screen in the app. You will be asked to confirm with your password.'
            }
          ]
        }
      ];

  return (
    <div className={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="medical-ecg-bg bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h1>
            <p className="text-xl text-primary-foreground/80">
              {language === 'ar' ? `إجابات مختصرة عن ${t('appName')}` : `Quick answers about ${t('appName')}`}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl text-gray-900 mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`${categoryIndex}-${index}`}
                      className="bg-white rounded-lg shadow-sm px-6"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <span className="text-gray-900">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">{language === 'ar' ? 'لديك سؤال آخر؟' : 'Still have questions?'}</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {language === 'ar' ? 'تواصل معنا وسنساعدك قدر الإمكان.' : 'Contact us and we will help as much as we can.'}
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
