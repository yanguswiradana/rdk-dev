import React from "react";
import { FiLayout, FiCode, FiSmartphone } from "react-icons/fi";

const page = () => {
  const features = [
    {
      icon: <FiLayout className='w-8 h-8' />,
      title: "Web Design",
      description:
        "Beautiful, responsive designs that engage your audience and reflect your brand identity.",
    },
    {
      icon: <FiCode className='w-8 h-8' />,
      title: "Web Development",
      description:
        "Robust, scalable web applications built with modern technologies for optimal performance.",
    },
    {
      icon: <FiSmartphone className='w-8 h-8' />,
      title: "Mobile Development",
      description:
        "Cross-platform mobile apps that deliver seamless user experiences on any device.",
    },
  ];
  return (
    <section className='py-16 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-black mb-4'>
            Our <span className='text-[#d01c1c]'>Feature</span>
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            We deliver comprehensive digital solutions tailored to your business
            needs.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100'
            >
              <div className='flex justify-center mb-6'>
                <div className='bg-[#d01c1c]/10 p-4 rounded-full text-[#d01c1c]'>
                  {feature.icon}
                </div>
              </div>
              <h3 className='text-xl font-bold text-black text-center mb-3'>
                {feature.title}
              </h3>
              <p className='text-gray-600 text-center'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
