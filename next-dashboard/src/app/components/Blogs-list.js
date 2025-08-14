// components/BlogList.js
import Image from 'next/image';
import Link from 'next/link';

export default function BlogList() {
  const blogs = [
    {
      title: 'How to Build a Modern Web App',
      description: 'Learn the key steps to creating a fast, scalable, and maintainable web application in 2025.',
      date: 'Aug 10, 2025',
      image: '/placeholder.png',
      slug: '/blog/how-to-build-modern-web-app',
    },
    {
      title: 'Top 5 UI/UX Trends in 2025',
      description: 'Stay ahead of the curve with the latest design trends shaping the digital world.',
      date: 'Jul 28, 2025',
      image: '/placeholder.png',
      slug: '/blog/top-5-ui-ux-trends-2025',
    },
    {
      title: 'Why Mobile-First Design Matters',
      description: 'Discover why mobile-first is no longer optional and how it impacts your business.',
      date: 'Jul 15, 2025',
      image: '/placeholder.png',
      slug: '/blog/why-mobile-first-design-matters',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Latest Blog Posts</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest news, tips, and insights.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <Link href={blog.slug} className="text-blue-600 hover:underline font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
