import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lib/i18n';

export default function PricingPage() {
  const { language, t } = useLanguage();

  const plans = [
    {
      name: t('starter'),
      nameKey: 'starter',
      price: '$99',
      duration: t('monthBilling'),
      description: t('starterDesc'),
      features: t('starterFeatures') as string[],
      recommended: false
    },
    {
      name: t('professional'),
      nameKey: 'professional',
      price: '$249',
      duration: t('monthBilling'),
      description: t('professionalDesc'),
      features: t('professionalFeatures') as string[],
      recommended: true
    },
    {
      name: t('enterprise'),
      nameKey: 'enterprise',
      price: t('enterprisePrice'),
      duration: '',
      description: t('enterpriseDesc'),
      features: t('enterpriseFeatures') as string[],
      recommended: false
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`bg-primary text-primary-foreground py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">{t('simplePricing')}</h1>
            <p className="text-xl text-primary-foreground/80">
              {t('planMatches')}
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className={`py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.recommended ? 'ring-2 ring-primary' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4" />
                      <span>{t('recommended')}</span>
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl text-primary">{plan.price}</span>
                    <span className="text-gray-600">{plan.duration}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full py-3 px-6 rounded-lg text-center transition-colors ${
                    plan.recommended
                      ? 'bg-primary text-primary-foreground hover:opacity-90'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.nameKey === 'enterprise' ? t('contactSalesPricing') : t('getStartedPricing')}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className={`py-20 bg-gray-50 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 text-center">Payment Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl text-gray-900 mb-4">Accepted Payment Methods</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Credit Cards (Visa, Mastercard, Amex)</li>
                  <li>• ACH Bank Transfer</li>
                  <li>• Wire Transfer (for annual payments)</li>
                  <li>• Purchase Orders (Enterprise only)</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-8">
                <h3 className="text-xl text-gray-900 mb-4">Billing Details</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Billed monthly or annually</li>
                  <li>• Save 20% with annual billing</li>
                  <li>• No setup fees</li>
                  <li>• Cancel anytime</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 text-center">Pricing FAQs</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of the next billing cycle.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl text-gray-900 mb-2">Is there a free trial?</h3>
              <p className="text-gray-600">Yes! We offer a 14-day free trial on all plans. No credit card required to start your trial.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl text-gray-900 mb-2">What happens if I exceed my limits?</h3>
              <p className="text-gray-600">We'll notify you when you're approaching your limits. You can either upgrade your plan or purchase additional capacity as needed.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl text-gray-900 mb-2">Do you offer discounts?</h3>
              <p className="text-gray-600">Yes! We offer discounts for annual payments, non-profit organizations, and educational institutions. Contact us for details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-primary text-primary-foreground ${language === 'ar' ? 'rtl' : 'ltr'}`}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Choose your plan and start your free 14-day trial today. No credit card required.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
          >
            {t('startFreeTrial')}
          </Link>
        </div>
      </section>
    </div>
  );
}
