import React from 'react';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      icon: 'fas fa-code',
      description: 'We build responsive, high-performance websites using modern technologies like React, Next.js, and Node.js.',
      features: [
        'Custom website development',
        'E-commerce solutions',
        'API integration',
        'Performance optimization'
      ],
      price: '$2,000+'
    },
    {
      id: 2,
      title: 'Mobile App Development',
      icon: 'fas fa-mobile-alt',
      description: 'Cross-platform mobile applications for iOS and Android using React Native and Flutter.',
      features: [
        'UI/UX design',
        'Native functionality',
        'Backend integration',
        'App store deployment'
      ],
      price: '$5,000+'
    },
    {
      id: 3,
      title: 'Digital Marketing',
      icon: 'fas fa-bullhorn',
      description: 'Comprehensive digital marketing strategies to grow your online presence and customer base.',
      features: [
        'SEO optimization',
        'Social media marketing',
        'PPC advertising',
        'Content strategy'
      ],
      price: '$1,500/mo'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Hero */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12">
            {services.map(service => (
              <div key={service.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 p-8 flex flex-col items-center justify-center">
                    <div className="text-blue-500 text-5xl mb-4">
                      <i className={service.icon}></i>
                    </div>
                    <h2 className="text-2xl font-bold text-center">{service.title}</h2>
                    <p className="text-blue-600 font-semibold mt-2">{service.price}</p>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <h3 className="font-semibold text-lg mb-3">Features:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <i className="fas fa-check text-green-500 mt-1 mr-2"></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help your business grow
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;