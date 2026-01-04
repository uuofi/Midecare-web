import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { SITE_IMAGES } from '../../lib/siteImages';

export default function BlogPage() {
  const blogPosts = [
    {
      title: '10 Ways to Improve Patient Engagement in Your Practice',
      excerpt: 'Learn practical strategies to enhance patient communication, increase satisfaction, and build long-term relationships with your patient base.',
      category: 'Patient Care',
      date: 'January 15, 2024',
      readTime: '5 min read',
      image: SITE_IMAGES.heroDoctorTech
    },
    {
      title: 'The Future of Healthcare: AI and Machine Learning',
      excerpt: 'Explore how artificial intelligence is transforming medical diagnostics, treatment planning, and patient care in modern healthcare.',
      category: 'Technology',
      date: 'January 10, 2024',
      readTime: '7 min read',
      image: SITE_IMAGES.dashboardScreen
    },
    {
      title: 'HIPAA Compliance: What Every Practice Needs to Know',
      excerpt: 'A comprehensive guide to understanding and maintaining HIPAA compliance in your medical practice, including common pitfalls to avoid.',
      category: 'Compliance',
      date: 'January 5, 2024',
      readTime: '6 min read',
      image: SITE_IMAGES.clinicSoftware
    },
    {
      title: 'Streamlining Your Practice: Automation Best Practices',
      excerpt: 'Discover how automating routine tasks can free up time for patient care while improving accuracy and efficiency in your practice.',
      category: 'Practice Management',
      date: 'December 28, 2023',
      readTime: '5 min read',
      image: SITE_IMAGES.modernHospital
    },
    {
      title: 'Telemedicine Implementation: A Step-by-Step Guide',
      excerpt: 'Learn how to successfully integrate telemedicine into your practice, from choosing the right platform to training staff and patients.',
      category: 'Telemedicine',
      date: 'December 20, 2023',
      readTime: '8 min read',
      image: SITE_IMAGES.heroDoctorTech
    },
    {
      title: 'Managing Patient Data: Security and Privacy Best Practices',
      excerpt: 'Essential strategies for protecting patient information and maintaining trust in an increasingly digital healthcare environment.',
      category: 'Security',
      date: 'December 15, 2023',
      readTime: '6 min read',
      image: SITE_IMAGES.clinicSoftware
    }
  ];

  const categories = [
    'All Posts',
    'Patient Care',
    'Technology',
    'Compliance',
    'Practice Management',
    'Telemedicine',
    'Security'
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">Healthcare Insights & News</h1>
            <p className="text-xl text-primary-foreground/80">
              Stay updated with the latest trends, tips, and best practices in healthcare technology
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  index === 0
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-80 lg:h-auto">
                  <ImageWithFallback
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="inline-block px-4 py-1 bg-secondary text-primary rounded-full text-sm mb-4 w-fit">
                    Featured Post
                  </div>
                  <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">{blogPosts[0].title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {blogPosts[0].date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </span>
                  </div>
                  <button className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all">
                    Read Article
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-12">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm mb-3">
                      {post.category}
                    </div>
                    <h3 className="text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <button className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Get the latest healthcare insights, tips, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="px-8 py-3 bg-background text-foreground rounded-lg hover:bg-secondary transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
