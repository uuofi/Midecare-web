import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Dr. Sarah Johnson',
      title: 'Family Medicine Physician',
      clinic: 'Johnson Family Clinic',
      rating: 5,
      quote: 'MediCare Pro has completely transformed how we manage our practice. The intuitive interface and comprehensive features have saved us countless hours of administrative work.',
      avatar: 'SJ'
    },
    {
      name: 'Dr. Michael Chen',
      title: 'Internal Medicine Specialist',
      clinic: 'Chen Medical Center',
      rating: 5,
      quote: 'The reporting and analytics features are outstanding. We can now make data-driven decisions to improve patient care and operational efficiency.',
      avatar: 'MC'
    },
    {
      name: 'Dr. Emily Rodriguez',
      title: 'Pediatrician',
      clinic: 'Kids Health Pediatrics',
      rating: 5,
      quote: 'As a busy pediatric practice, the automated appointment reminders and easy scheduling have significantly reduced no-shows. The mobile app is a game-changer!',
      avatar: 'ER'
    },
    {
      name: 'Dr. James Wilson',
      title: 'Practice Manager',
      clinic: 'Westside Medical Group',
      rating: 5,
      quote: 'The customer support is exceptional. Whenever we have questions, the team responds quickly and thoroughly. Implementation was smooth and painless.',
      avatar: 'JW'
    },
    {
      name: 'Dr. Lisa Thompson',
      title: 'Cardiologist',
      clinic: 'Heart Care Specialists',
      rating: 5,
      quote: 'Security and HIPAA compliance were our top priorities. MediCare Pro exceeded our expectations with robust security features and detailed audit logs.',
      avatar: 'LT'
    },
    {
      name: 'Dr. Robert Martinez',
      title: 'Orthopedic Surgeon',
      clinic: 'Martinez Orthopedics',
      rating: 5,
      quote: 'The integration capabilities are fantastic. We connected it with our imaging systems and lab equipment seamlessly. Highly recommend!',
      avatar: 'RM'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Healthcare Professionals' },
    { number: '2,500+', label: 'Medical Practices' },
    { number: '5M+', label: 'Patient Records Managed' },
    { number: '98%', label: 'Customer Satisfaction' }
  ];

  const companies = [
    'Regional Medical Center',
    'City Health Clinic Network',
    'Family Care Associates',
    'Advanced Surgical Center',
    'Community Health Services',
    'Premier Medical Group'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">What Our Customers Say</h1>
            <p className="text-xl text-primary-foreground/80">
              Trusted by thousands of healthcare professionals worldwide
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-xl text-primary">
                      {testimonial.avatar}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-primary/20 mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.quote}</p>
                  <p className="text-sm text-gray-500">{testimonial.clinic}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12 text-center">Success Stories</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl text-gray-900 mb-4">Johnson Family Clinic</h3>
                <p className="text-gray-600 mb-4">
                  A small family practice with 3 physicians serving 2,000+ patients, Johnson Family Clinic struggled with paper records and inefficient scheduling.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Results after implementing MediCare Pro:</strong>
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• 40% reduction in administrative time</li>
                  <li>• 25% decrease in appointment no-shows</li>
                  <li>• 60% faster patient check-in process</li>
                  <li>• $30,000 annual savings in operational costs</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-2xl text-gray-900 mb-4">Westside Medical Group</h3>
                <p className="text-gray-600 mb-4">
                  A multi-specialty practice with 15 providers and 10,000+ patients needed a unified system to coordinate care across departments.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Results after implementing MediCare Pro:</strong>
                </p>
                <ul className="space-y-2 text-gray-600 ml-6">
                  <li>• 50% improvement in inter-department communication</li>
                  <li>• 30% increase in patient satisfaction scores</li>
                  <li>• 45% reduction in billing errors</li>
                  <li>• Fully digital workflow within 3 months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl text-gray-900 mb-12">Trusted by Leading Healthcare Organizations</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {companies.map((company, index) => (
                <div key={index} className="flex items-center justify-center p-6 bg-gray-50 rounded-lg">
                  <span className="text-gray-600">{company}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl mb-6">Join Thousands of Satisfied Customers</h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see why healthcare professionals love MediCare Pro.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors"
          >
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  );
}
