import { CodeBracketIcon, PaintBrushIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'We build responsive and fast websites tailored to your needs.',
      icon: <CodeBracketIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and visually appealing designs for your brand.',
      icon: <PaintBrushIcon className="h-10 w-10 text-blue-600" />,
    },
    {
      title: 'Mobile App Development',
      description: 'Developing cross-platform apps to keep your users engaged anywhere.',
      icon: <DevicePhoneMobileIcon className="h-10 w-10 text-blue-600" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of services to help you achieve your business goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
