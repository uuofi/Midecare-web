import { Link } from 'react-router-dom';
import { Activity, Users, ClipboardList, TrendingUp, Bell, Shield, Check, MessageSquare, MapPin, QrCode } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useLanguage } from '../../lib/i18n';
import { TypewriterText } from '../components/TypewriterText';

export default function HomePage() {
  const { language, t } = useLanguage();

  const features = [
    {
      icon: ClipboardList,
      title: t('featureBookingTitle'),
      description: t('featureBookingDesc')
    },

    {
      icon: Shield,
      title: t('featureE2eeTitle'),
      description: t('featureE2eeDesc')
    },
    {
      icon: Bell,
      title: t('featureNotificationsTitle'),
      description: t('featureNotificationsDesc')
    },
    {
      icon: QrCode,
      title: t('featureQrTitle'),
      description: t('featureQrDesc')
    },
    {
      icon: MapPin,
      title: t('featureMapsTitle'),
      description: t('featureMapsDesc')
    },
  ];

  const targetAudiences = [
    {
      icon: Users,
      title: t('audiencePatientsTitle'),
      description: t('audiencePatientsDesc'),
      benefits: (t('audiencePatientsBenefits') as string).split('\n')
    },
    {
      icon: Activity,
      title: t('audienceDoctorsTitle'),
      description: t('audienceDoctorsDesc'),
      benefits: (t('audienceDoctorsBenefits') as string).split('\n')
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`relative medical-ecg-bg bg-gradient-to-r from-primary via-primary/90 to-primary/70 text-primary-foreground py-20 lg:py-32 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-700">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-primary-foreground/10 rounded-lg flex items-center justify-center">
                  <Activity className="w-7 h-7 text-white medical-heartbeat" />
                </div>
                <span className="text-2xl">{t('appName')}</span>
              </div>
              <h1 className="text-4xl lg:text-5xl mb-6">
                <TypewriterText text={t('heroTitle')} />
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {t('heroDescription')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
              </div>
            </div>

            <div className="relative animate-in fade-in slide-in-from-bottom-2 duration-700 delay-150">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5">
                <ImageWithFallback
                  src="/site/hero-doctor-tech.png"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={`py-20 bg-secondary ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-4">{t('whoWeServe')}</h2>
            <p className="text-xl text-muted-foreground">{t('tailoredSolutions')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="animated-border bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-in fade-in duration-500">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl text-primary mb-4">{audience.title}</h3>
                <p className="text-muted-foreground mb-6">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground/80">
                      <Check className="w-5 h-5 text-success flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className={`py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl text-foreground mb-4">{t('features')}</h2>
            <p className="text-xl text-muted-foreground">{t('allYouNeed')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow animate-in fade-in duration-500">
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/features"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              {t('features')}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-primary text-primary-foreground ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">{t('readyTransform')}</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('ctaDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
            >
              {t('getInTouch')}
            </Link>
            <Link
              to="/download"
              className="px-8 py-4 bg-primary-foreground/15 text-primary-foreground rounded-lg hover:bg-primary-foreground/20 transition-colors"
            >
              {t('download')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
