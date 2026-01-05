import {
  createElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

// Language and translation management
type Language = 'ar' | 'en';

export const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'حول',
    features: 'المميزات',
    pricing: 'الأسعار',
    contact: 'تواصل معنا',
    faq: 'الأسئلة الشائعة',
    blog: 'المدونة',
    testimonials: 'الشهادات',
    download: 'التحميل',
    getStarted: 'ابدأ الآن',
    contactSales: 'تواصل معنا',

    // Home Page
    appName: 'Medicare',
    appTagline: 'حجز مواعيد ومحادثة آمنة بين المراجع والطبيب',
    heroTitle: 'احجز موعدك وتواصل مع طبيبك بسهولة',
    heroDescription: 'تطبيق يربط المراجع والطبيب: حجز مواعيد، متابعة التفاصيل، محادثة (مع دعم التشفير من طرف لطرف)، وإدارة الحساب.',
    signUpFree: 'تواصل معنا',

    // Footer / Shared
    quickLinks: 'روابط سريعة',
    aboutText: 'ميديكير يساعدك على حجز المواعيد والتواصل مع الطبيب وإدارة تفاصيل الموعد من تطبيق واحد.',

    // Home/Features content (app-real)
    audiencePatientsTitle: 'للمراجعين',
    audiencePatientsDesc: 'ابحث عن الطبيب المناسب واحجز موعدك وتابع الحالة والتفاصيل من هاتفك.',
    audiencePatientsBenefits: [
      'استعراض الأطباء حسب التخصص',
      'حجز وإلغاء المواعيد',
      'محادثة مع الطبيب وإرسال صور عند الحاجة'
    ],

    audienceDoctorsTitle: 'للأطباء',
    audienceDoctorsDesc: 'إدارة جدولك وخدماتك ومواعيدك والتواصل مع المرضى بشكل منظم.',
    audienceDoctorsBenefits: [
      'إدارة المواعيد والجدول',
      'إضافة/تعديل الخدمات ومددها',
      'تقارير للطبيب (Excel)'
    ],

    featureBookingTitle: 'حجز وإدارة المواعيد',
    featureBookingDesc: 'حجز مواعيد حسب التخصص/الخدمة، مع متابعة الحالة (مؤكد/قيد الانتظار/مكتمل/ملغي).',
    featureBookingBullets: [
      'حجز حسب الخدمة ومدة الجلسة',
      'إلغاء الموعد من داخل التطبيق',
      'عرض تفاصيل الموعد ورقم الحجز'
    ],

    featureChatTitle: 'محادثة داخل الموعد',
    featureChatDesc: 'محادثة مرتبطة بالموعد مع دعم الردّ على الرسائل وإرسال صور.',
    featureChatBullets: [
      'رسائل فورية داخل شاشة المحادثة',
      'إرسال صور ضمن المحادثة',
      'حذف/الإبلاغ عن رسالة (حسب الصلاحيات)'
    ],

    featureE2eeTitle: 'تشفير طرف لطرف (E2EE)',
    featureE2eeDesc: 'يدعم التطبيق تشفير رسائل المحادثة من طرف لطرف عندما تتوفر مفاتيح التشفير بين الطرفين.',
    featureE2eeBullets: [
      'توليد مفاتيح التشفير على الجهاز',
      'تبادل مفاتيح المحادثة عبر الخادم',
      'فك التشفير يتم محلياً على الجهاز'
    ],

    featureNotificationsTitle: 'إشعارات',
    featureNotificationsDesc: 'يستخدم التطبيق إشعارات الجهاز للتنبيهات المرتبطة بالحساب/المواعيد حسب إعدادات الخادم.',
    featureNotificationsBullets: [
      'تسجيل رمز إشعارات الجهاز (Push Token)',
      'إلغاء التسجيل عند تسجيل الخروج',
      'تنبيهات حسب إعدادات الخدمة'
    ],

    featureQrTitle: 'QR وتفاصيل الموعد',
    featureQrDesc: 'عرض تفاصيل الموعد (ورقم الحجز) وقد يتضمن QR عند توفره من الخادم.',
    featureQrBullets: [
      'رقم الحجز',
      'حالة الموعد',
      'QR (إن كان متاحاً)'
    ],

    featureMapsTitle: 'الموقع والخرائط',
    featureMapsDesc: 'فتح موقع العيادة/العنوان في Google Maps مباشرة من التطبيق.',
    featureMapsBullets: [
      'فتح خرائط Google بالعنوان أو الإحداثيات',
      'الاتجاهات بسهولة',
      'مناسب لموقع العيادة'
    ],

    featureReportsTitle: 'تقارير للطبيب',
    featureReportsDesc: 'تقارير يومية/شهرية للطبيب (Excel) لتتبع المواعيد بحسب ما يتيحه الخادم.',
    featureReportsBullets: [
      'تقرير يومي (Excel)',
      'تقرير شهري (Excel)',
      'تقارير مرتبطة بحساب الطبيب'
    ],

    featureAccountTitle: 'الحساب والخصوصية',
    featureAccountDesc: 'تحديث المعلومات الشخصية، تغيير كلمة المرور، حذف الحساب، وسجل نشاط (عند توفره).',
    featureAccountBullets: [
      'تعديل الاسم/الهاتف/الإيميل/العمر',
      'تغيير كلمة المرور',
      'حذف الحساب من داخل التطبيق'
    ],

    seeItInAction: 'شاهد التطبيق',
    intuitiveInterface: 'واجهة بسيطة لتسهيل الحجز والتواصل.',
    everythingYouNeed: 'مميزات حقيقية موجودة داخل التطبيق',

    howToStartTitle: 'كيف تبدأ',
    howToStartDesc: '3 خطوات سريعة للبدء باستخدام التطبيق.',
    howToStartStep1Title: 'اختر نوع الحساب',
    howToStartStep1Desc: 'مراجع أو طبيب.',
    howToStartStep2Title: 'سجّل الدخول/أنشئ حساب',
    howToStartStep2Desc: 'بالهاتف وكلمة مرور (وقد يُطلب توثيق للطبيب).',
    howToStartStep3Title: 'ابدأ بالحجز أو إدارة المواعيد',
    howToStartStep3Desc: 'احجز موعدك أو أدر جدولك كمقدّم خدمة.',

    ctaTitle: 'جاهز للبدء؟',
    ctaDesc: 'حمّل التطبيق وابدأ بإدارة مواعيدك والتواصل.',
    
    // Who We Serve
    whoWeServe: 'لمن صُممت',
    tailoredSolutions: 'للمراجعين والأطباء',
    
    healthcareClinics: 'العيادات الطبية',
    clinicsDesc: 'بسّط إدارة المرضى وحسّن الكفاءة التشغيلية في عيادتك.',
    clinicsBenefits: ['السجلات الصحية الإلكترونية', 'جدولة المواعيد', 'إدارة الفواتير'],
    
    medicalCenters: 'المراكز الطبية',
    centersDesc: 'حلول شاملة للمنشآت الطبية متعددة الأقسام.',
    centersBenefits: ['تنسيق الأقسام', 'إدارة الموارد', 'تحسين تدفق المرضى'],
    
    healthcareCompanies: 'شركات الرعاية الصحية',
    companiesDesc: 'برنامج من الدرجة الأولى للمنظمات الصحية الكبيرة.',
    companiesBenefits: ['دعم المواقع المتعددة', 'تحليلات متقدمة', 'تكاملات مخصصة'],
    
    medicalContractors: 'المقاولون الطبيون',
    contractorsDesc: 'أدوات مصممة للمتخصصين الطبيين المتنقلين والمقاولين.',
    contractorsBenefits: ['الوصول عبر الجوال', 'توثيق الزيارات', 'تتبع الوقت'],

    // Features
    powerfulFeatures: 'المميزات الرئيسية',
    allYouNeed: 'كل ما تحتاجه لإدارة عيادتك الطبية',
    
    userManagement: 'إدارة المستخدمين',
    userMgmtDesc: 'نظام شامل لإدارة المستخدمين مع التحكم في الوصول بناءً على الأدوار. إنشء وإدارة حسابات الموظفين والأطباء وفريق الإدارة برصاحات مخصصة.',
    userMgmtFeatures: [
      'أدوار متعددة المستويات وصلاحيات',
      'جدولة الموظفين وإدارة الورديات',
      'قدرات التوقيع الرقمي',
      'سجلات تدقيق لجميع أنشطة المستخدمين'
    ],
    
    appointmentMgmt: 'إدارة المواعيد',
    appointmentDesc: 'نظام متكامل للحجوزات والمواعيد مع التذكيرات التلقائية والتنبيهات الذكية.',
    appointmentFeatures: [
      'جدولة مرنة للمواعيد',
      'تذكيرات تلقائية للمريض والطبيب',
      'إدارة قائمة الانتظار',
      'تقارير الحضور'
    ],
    
    ehr: 'السجلات الصحية الإلكترونية',
    ehrDesc: 'نظام سجلات صحية إلكترونية كامل مع واجهة بديهية لتوثيق إدارة سجل المريض.',
    ehrFeatures: [
      'ملفات مريض شاملة',
      'تتبع السجل الطبي',
      'إدارة المستندات والمسح الضوئي',
      'التكامل مع أنظمة السجلات الخارجية'
    ],
    
    analytics: 'التحليلات والتقارير',
    analyticsDesc: 'أدوات تحليلية قوية وتقارير مخصصة مصممة لعمليات الرعاية الصحية.',
    analyticsFeatures: [
      'لوحات معلومات عملية فورية',
      'تقارير مالية وفواتير',
      'تتبع نتائج المريض السريري',
      'مولد تقارير مخصص'
    ],
    
    notifications: 'التنبيهات والإشعارات',
    notificationsDesc: 'نظام إشعارات ذكي يبقي فريقك متصلاً ومتجاوباً.',
    notificationsFeatures: [
      'تذكيرات المواعيد التلقائية',
      'نظام التنبيهات الحرجة',
      'إشعارات البريد الإلكتروني والرسائل النصية',
      'تفضيلات إشعارات مخصصة'
    ],
    
    security: 'الأمان والامتثال',
    securityDesc: 'تدابير أمان على مستوى المؤسسات مما يضمن الامتثال والحماية البيانات الحساسة.',
    securityFeatures: [
      'تشفير من النهاية إلى النهاية',
      'الامتثال المدمج',
      'عمليات تدقيق أمنية منتظمة',
      'النسخ الاحتياطي التلقائي واستعادة الكوارث'
    ],
    
    support: 'الدعم الفني',
    supportDesc: 'فريق دعم مخصص متاح 24/7 للمساعدة في أي أسئلة أو مشاكل تقنية.',
    supportFeatures: [
      'دعم الهاتف والبريد الإلكتروني 24/7',
      'مساعدة الدردشة المباشرة',
      'قاعدة معارف شاملة',
      'ندوات تدريبية منتظمة'
    ],

    // Pricing
    simplePricing: 'أسعار بسيطة وشفافة',
    planMatches: 'اختر الخطة التي تناسب عيادتك. جميع الخطط تتضمن الميزات الأساسية والتحديثات المجانية.',
    
    starter: 'مبتدئ',
    starterPrice: '99 دولار',
    starterDesc: 'مثالي للعيادات الصغيرة والممارسين الفرديين',
    starterFeatures: [
      'حتى 3 مستخدمين',
      '500 سجل مريض',
      'تقارير أساسية',
      'دعم بريد إلكتروني',
      'وصول تطبيق الجوال',
      'تخزين 5 جيجابايت'
    ],
    
    professional: 'احترافي',
    professionalPrice: '249 دولار',
    professionalDesc: 'مثالي للممارسات المتنامية والمراكز الطبية',
    recommended: 'مُوصى به',
    professionalFeatures: [
      'حتى 15 مستخدماً',
      'سجلات مريض غير محدودة',
      'تحليلات متقدمة',
      'دعم ذو أولوية',
      'وصول تطبيق الجوال',
      'تخزين 50 جيجابايت',
      'سير عمل مخصص',
      'وصول API'
    ],
    
    enterprise: 'مؤسسي',
    enterprisePrice: 'مخصص',
    enterpriseDesc: 'للمنظمات الصحية الكبيرة ذات الاحتياجات المحددة',
    enterpriseFeatures: [
      'مستخدمين غير محدودين',
      'سجلات غير محدودة',
      'تحليلات متقدمة وذكاء الأعمال',
      'مدير حساب مخصص',
      'وصول تطبيق الجوال',
      'تخزين غير محدود',
      'تكاملات مخصصة',
      'ضمان اتفاقية مستوى الخدمة',
      'تدريب على الموقع'
    ],
    
    allPlansInclude: 'جميع الخطط تتضمن:',
    monthBilling: '/شهر',

    // Contact
    getInTouch: 'تواصل معنا',
    readyTransform: 'للاستفسارات والدعم تواصل معنا.',
    
    sendMessage: 'أرسل لنا رسالة',
    fullName: 'الاسم الكامل *',
    emailAddress: 'عنوان البريد الإلكتروني *',
    phoneNumber: 'رقم الهاتف *',
    subscriptionType: 'نوع الحساب (اختياري)',
    message: 'الرسالة',
    send: 'إرسال',
    contactInfo: 'معلومات التواصل',
    email: 'البريد الإلكتروني',
    phone: 'الهاتف',
    address: 'العنوان',
    responseTime: 'سنرد عليك في خلال 24 ساعة',

    // Footer
    copyright: 'جميع الحقوق محفوظة',
    privacyPolicy: 'سياسة الخصوصية',
    termsService: 'شروط الخدمة',
    followUs: 'تابعنا',

    // Common
    month: 'الشهر',
    year: 'السنة',
    day: 'اليوم',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    features: 'Features',
    pricing: 'Pricing',
    contact: 'Contact',
    faq: 'FAQ',
    blog: 'Blog',
    testimonials: 'Testimonials',
    download: 'Download',
    getStarted: 'Get Started',
    contactSales: 'Contact Us',

    // Home Page
    appName: 'MediCare',
    appTagline: 'Appointments and secure chat between patient and doctor',
    heroTitle: 'Book appointments and chat with your doctor',
    heroDescription: 'A mobile app that connects patients and doctors: appointment booking, appointment details, chat (with optional end-to-end encryption), and account management.',
    signUpFree: 'Contact Us',

    // Footer / Shared
    quickLinks: 'Quick Links',
    aboutText: 'MediCare helps you book appointments, chat with your doctor, and manage appointment details from one app.',

    // Home/Features content (app-real)
    audiencePatientsTitle: 'Patients',
    audiencePatientsDesc: 'Find the right doctor, book an appointment, and manage everything from your phone.',
    audiencePatientsBenefits: [
      'Browse doctors by specialty',
      'Book and cancel appointments',
      'Chat with your doctor and send images'
    ],

    audienceDoctorsTitle: 'Doctors',
    audienceDoctorsDesc: 'Manage your schedule, services, and appointments, and communicate with patients.',
    audienceDoctorsBenefits: [
      'Appointments and schedule management',
      'Services setup (duration/price)',
      'Doctor reports (Excel)'
    ],

    featureBookingTitle: 'Appointment booking & management',
    featureBookingDesc: 'Book appointments by specialty/service and track status (pending/confirmed/completed/cancelled).',
    featureBookingBullets: [
      'Book by service and duration',
      'Cancel from within the app',
      'View booking number and details'
    ],

    featureChatTitle: 'In-appointment chat',
    featureChatDesc: 'Chat tied to the appointment, with replies and image attachments.',
    featureChatBullets: [
      'Real-time chat in the app',
      'Send images in chat',
      'Delete/report a message (where available)'
    ],

    featureE2eeTitle: 'End-to-end encryption (E2EE)',
    featureE2eeDesc: 'The app supports end-to-end encryption for chat messages when keys are available between participants.',
    featureE2eeBullets: [
      'Device-generated keys',
      'Key exchange via server',
      'Decryption happens locally on device'
    ],

    featureNotificationsTitle: 'Notifications',
    featureNotificationsDesc: 'Uses device notifications for appointment/account alerts depending on server settings.',
    featureNotificationsBullets: [
      'Registers device push token',
      'Unregisters on logout',
      'Alerts depend on service configuration'
    ],

    featureQrTitle: 'QR and appointment details',
    featureQrDesc: 'Shows appointment details and booking number; may show a QR code if provided by the server.',
    featureQrBullets: [
      'Booking number',
      'Appointment status',
      'QR (if available)'
    ],

    featureMapsTitle: 'Location and Maps',
    featureMapsDesc: 'Open the clinic location in Google Maps from the app.',
    featureMapsBullets: [
      'Open Google Maps by address or coordinates',
      'Quick directions',
      'Clinic location support'
    ],

    featureReportsTitle: 'Doctor reports',
    featureReportsDesc: 'Daily/monthly Excel reports for doctors (as provided by the backend).',
    featureReportsBullets: [
      'Daily Excel report',
      'Monthly Excel report',
      'Doctor account reports'
    ],

    featureAccountTitle: 'Account and privacy',
    featureAccountDesc: 'Update personal info, change password, delete account, and view activity (when available).',
    featureAccountBullets: [
      'Edit name/phone/email/age',
      'Change password',
      'Delete account in-app'
    ],

    seeItInAction: 'See the app',
    intuitiveInterface: 'A simple interface for booking and communication.',
    everythingYouNeed: 'Real features available in the app',

    howToStartTitle: 'How to get started',
    howToStartDesc: 'Three quick steps to start using the app.',
    howToStartStep1Title: 'Choose your role',
    howToStartStep1Desc: 'Patient or doctor.',
    howToStartStep2Title: 'Sign in / create an account',
    howToStartStep2Desc: 'Phone and password (doctor verification may be required).',
    howToStartStep3Title: 'Book or manage appointments',
    howToStartStep3Desc: 'Book as a patient or manage your schedule as a doctor.',

    ctaTitle: 'Ready to start?',
    ctaDesc: 'Download the app and begin booking and managing appointments.',
    
    // Who We Serve
    whoWeServe: 'Who We Serve',
    tailoredSolutions: 'Tailored solutions for every healthcare professional',
    
    healthcareClinics: 'Healthcare Clinics',
    clinicsDesc: 'Streamline patient management and improve operational efficiency in your clinic.',
    clinicsBenefits: ['Electronic Health Records', 'Appointment Scheduling', 'Billing Management'],
    
    medicalCenters: 'Medical Centers',
    centersDesc: 'Comprehensive solutions for multi-department medical facilities.',
    centersBenefits: ['Department Coordination', 'Resource Management', 'Patient Flow Optimization'],
    
    healthcareCompanies: 'Healthcare Companies',
    companiesDesc: 'Enterprise-grade software for large healthcare organizations.',
    companiesBenefits: ['Multi-location Support', 'Advanced Analytics', 'Custom Integrations'],
    
    medicalContractors: 'Medical Contractors',
    contractorsDesc: 'Tools designed for mobile healthcare professionals and contractors.',
    contractorsBenefits: ['Mobile Access', 'Visit Documentation', 'Time Tracking'],

    // Features
    powerfulFeatures: 'Powerful Features',
    allYouNeed: 'Everything you need to manage your healthcare practice',
    
    userManagement: 'User Management',
    userMgmtDesc: 'Comprehensive user management system with role-based access control. Create and manage accounts for staff, doctors, and administrative personnel with customizable permissions.',
    userMgmtFeatures: [
      'Multi-level user roles and permissions',
      'Staff scheduling and shift management',
      'Digital signature capabilities',
      'Audit logs for all user activities'
    ],
    
    appointmentMgmt: 'Appointment Management',
    appointmentDesc: 'Integrated appointment booking and scheduling system with automatic reminders and smart alerts.',
    appointmentFeatures: [
      'Flexible appointment scheduling',
      'Automatic patient and doctor reminders',
      'Waiting list management',
      'Attendance reports'
    ],
    
    ehr: 'Electronic Health Records',
    ehrDesc: 'Complete digital health record system with intuitive interface for documentation and patient history management.',
    ehrFeatures: [
      'Comprehensive patient profiles',
      'Medical history tracking',
      'Document management and scanning',
      'Integration with external EHR systems'
    ],
    
    analytics: 'Reports & Analytics',
    analyticsDesc: 'Gain actionable insights with powerful analytics and customizable reporting tools designed for healthcare operations.',
    analyticsFeatures: [
      'Real-time operational dashboards',
      'Financial and billing reports',
      'Clinical outcomes tracking',
      'Custom report builder'
    ],
    
    notifications: 'Notifications & Alerts',
    notificationsDesc: 'Stay informed with intelligent notification system that keeps your team connected and responsive.',
    notificationsFeatures: [
      'Automated appointment reminders',
      'Critical alert system',
      'Email and SMS notifications',
      'Customizable notification preferences'
    ],
    
    security: 'Security & Compliance',
    securityDesc: 'Enterprise-grade security measures ensuring HIPAA compliance and protecting sensitive patient data.',
    securityFeatures: [
      'End-to-end data encryption',
      'HIPAA compliance built-in',
      'Regular security audits',
      'Automatic backup and disaster recovery'
    ],
    
    support: 'Technical Support',
    supportDesc: 'Dedicated support team available 24/7 to help you with any questions or technical issues.',
    supportFeatures: [
      '24/7 phone and email support',
      'Live chat assistance',
      'Comprehensive knowledge base',
      'Regular training webinars'
    ],

    // Pricing
    simplePricing: 'Simple, Transparent Pricing',
    planMatches: 'Choose the plan that fits your practice. All plans include core features and free updates.',
    
    starter: 'Starter',
    starterPrice: '$99',
    starterDesc: 'Perfect for small clinics and individual practitioners',
    starterFeatures: [
      'Up to 3 users',
      '500 patient records',
      'Basic reporting',
      'Email support',
      'Mobile app access',
      '5GB storage'
    ],
    
    professional: 'Professional',
    professionalPrice: '$249',
    professionalDesc: 'Ideal for growing practices and medical centers',
    recommended: 'Recommended',
    professionalFeatures: [
      'Up to 15 users',
      'Unlimited patient records',
      'Advanced analytics',
      'Priority support',
      'Mobile app access',
      '50GB storage',
      'Custom workflows',
      'API access'
    ],
    
    enterprise: 'Enterprise',
    enterprisePrice: 'Custom',
    enterpriseDesc: 'For large healthcare organizations with specific needs',
    enterpriseFeatures: [
      'Unlimited users',
      'Unlimited records',
      'Advanced analytics & BI',
      'Dedicated account manager',
      'Mobile app access',
      'Unlimited storage',
      'Custom integrations',
      'SLA guarantee',
      'On-site training'
    ],
    
    allPlansInclude: 'All plans include:',
    monthBilling: '/month',

    // Contact
    getInTouch: 'Get In Touch',
    readyTransform: 'For inquiries and support, contact us.',
    
    sendMessage: 'Send Us a Message',
    fullName: 'Full Name *',
    emailAddress: 'Email Address *',
    phoneNumber: 'Phone Number *',
    subscriptionType: 'Account type (optional)',
    message: 'Message',
    send: 'Send',
    contactInfo: 'Contact Information',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    responseTime: 'We will respond within 24 hours',

    // Footer
    copyright: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsService: 'Terms of Service',
    followUs: 'Follow Us',

    // Common
    month: 'Month',
    year: 'Year',
    day: 'Day',
  }
};

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }

  if (Array.isArray(value)) return value.join('\n');
  if (typeof value === 'string') return value;
  if (value === 0) return '0';
  if (!value) return key;
  return String(value);
};

export const getTranslationList = (language: Language, key: string): string[] => {
  const keys = key.split('.');
  let value: any = translations[language];

  for (const k of keys) {
    value = value?.[k];
  }

  if (Array.isArray(value)) return value.map((v) => String(v));
  if (typeof value === 'string') {
    return value
      .split('\n')
      .map((v) => v.trim())
      .filter(Boolean);
  }
  if (value === 0) return ['0'];
  if (!value) return [];
  return [String(value)];
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tList: (key: string) => string[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  try {
    const stored = localStorage.getItem('language');
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    // ignore
  }
  return 'ar';
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage());

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('language', lang);
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    return {
      language,
      setLanguage,
      t: (key: string) => getTranslation(language, key),
      tList: (key: string) => getTranslationList(language, key),
    };
  }, [language, setLanguage]);

  return createElement(LanguageContext.Provider, { value }, children);
}

export const useLanguage = (): LanguageContextValue => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within <LanguageProvider>.');
  }
  return ctx;
};
