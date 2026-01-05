import { ClipboardList, Bell, Shield, MessageSquare, MapPin, QrCode, FileSpreadsheet, UserCircle } from 'lucide-react';
import { useLanguage } from '../../lib/i18n';

export default function FeaturesPage() {
  const { language, t, tList } = useLanguage();

  const features = [
    {
      icon: ClipboardList,
      title: t('featureBookingTitle'),
      description: t('featureBookingDesc'),
      features: tList('featureBookingBullets')
    },
    {
      icon: MessageSquare,
      title: t('featureChatTitle'),
      description: t('featureChatDesc'),
      features: tList('featureChatBullets')
    },
    {
      icon: Shield,
      title: t('featureE2eeTitle'),
      description: t('featureE2eeDesc'),
      features: tList('featureE2eeBullets')
    },
    {
      icon: Bell,
      title: t('featureNotificationsTitle'),
      description: t('featureNotificationsDesc'),
      features: tList('featureNotificationsBullets')
    },
    {
      icon: QrCode,
      title: t('featureQrTitle'),
      description: t('featureQrDesc'),
      features: tList('featureQrBullets')
    },
    {
      icon: MapPin,
      title: t('featureMapsTitle'),
      description: t('featureMapsDesc'),
      features: tList('featureMapsBullets')
    },
    {
      icon: FileSpreadsheet,
      title: t('featureReportsTitle'),
      description: t('featureReportsDesc'),
      features: tList('featureReportsBullets')
    },
    {
      icon: UserCircle,
      title: t('featureAccountTitle'),
      description: t('featureAccountDesc'),
      features: tList('featureAccountBullets')
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`medical-ecg-bg bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{t('powerfulFeatures')}</h1>
            <p className="text-xl text-primary-foreground/80">{t('everythingYouNeed')}</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className={`py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl text-gray-900 mb-4">{feature.title}</h2>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ease of Use Section */}
      <section className={`py-20 bg-secondary ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-6 text-center">{t('howToStartTitle')}</h2>
            <p className="text-xl text-muted-foreground text-center mb-12">{t('howToStartDesc')}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl text-foreground mb-2">{t('howToStartStep1Title')}</h3>
                <p className="text-muted-foreground">{t('howToStartStep1Desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl text-foreground mb-2">{t('howToStartStep2Title')}</h3>
                <p className="text-muted-foreground">{t('howToStartStep2Desc')}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl text-foreground mb-2">{t('howToStartStep3Title')}</h3>
                <p className="text-muted-foreground">{t('howToStartStep3Desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-primary text-primary-foreground ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">{t('ctaTitle')}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">{t('ctaDesc')}</p>
          <a
            href="/download"
            className="inline-block px-8 py-4 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
          >
            {t('download')}
          </a>
        </div>
      </section>
    </div>
  );
}
