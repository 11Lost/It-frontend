// components/Testimonials.js
import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      feedback:
        'This team exceeded our expectations! The website they built for us is fast, modern, and exactly what we envisioned.',
      image: '/placeholder.png',
    },
    {
      name: 'Michael Smith',
      role: 'Marketing Director, BrightAds',
      feedback:
        'Their attention to detail and commitment to quality is outstanding. We’ve seen a huge improvement in engagement since launch.',
      image: '/placeholder.png',
    },
    {
      name: 'Emily Davis',
      role: 'Founder, GreenLeaf',
      feedback:
        'Professional, creative, and highly skilled. They transformed our outdated site into a sleek, user-friendly platform.',
      image: '/placeholder.png',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We value our clients and their success stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
