// components/ProductCard.tsx
"use client"; // Mark this as a Client Component

import React from "react";

interface Package {
  name: string;
  price: string;
  features: string[];
  popular: boolean;
  whatsappMessage: string;
}

const ProductCard = () => {
  const packages: Package[] = [
    {
      name: "Basic Website",
      price: "$250",
      features: [
        "1 Landing Page",
        "3 Additional Pages",
        "Responsive Design",
        "Contact Form",
        "1 Month Support",
      ],
      popular: false,
      whatsappMessage:
        "Hi, I'm interested in the Basic Website package ($250). Can you tell me more about it?",
    },
    {
      name: "Business Website",
      price: "$500",
      features: [
        "5-7 Pages",
        "Custom Design",
        "Mobile Responsive",
        "SEO Friendly",
        "Basic CMS",
        "Social Media Integration",
        "3 Months Support",
      ],
      popular: true,
      whatsappMessage:
        "Hi, I want to order the Business Website package ($500). What's the next step?",
    },
    {
      name: "Premium Website",
      price: "$1,000",
      features: [
        "Unlimited Pages",
        "Premium Design",
        "E-commerce Functionality",
        "Payment Gateway Integration",
        "Admin Panel",
        "Advanced SEO",
        "6 Months Support",
      ],
      popular: false,
      whatsappMessage:
        "Hello, I'd like to discuss the Premium Website package ($1000). Please contact me.",
    },
  ];

  const handleOrderClick = (message: string) => {
    const phoneNumber = "YOUR_WHATSAPP_NUMBER_HERE"; // Replace with your number
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Website <span className='text-secondary'>Packages</span>
          </h2>
          <p className='mt-4 text-xl text-gray-600'>
            Choose the package that fits your business needs
          </p>
        </div>

        <div className='mt-16 grid gap-8 md:grid-cols-3 md:gap-12'>
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative flex flex-col h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md ${
                pkg.popular ? "ring-2 ring-[#d01c1c]" : ""
              }`}
            >
              {pkg.popular && (
                <div className='absolute top-0 right-0 -translate-y-1/2 transform rounded-full bg-[#d01c1c] px-4 py-1 text-sm font-semibold text-white'>
                  Most Popular
                </div>
              )}

              <div className='flex-grow'>
                <h3 className='text-lg font-semibold text-gray-900'>
                  {pkg.name}
                </h3>
                <div className='mt-4'>
                  <p className='text-3xl font-bold text-gray-900'>
                    {pkg.price}
                  </p>
                  <p className='text-gray-500 mt-2'>Starting from</p>
                </div>

                <ul className='mt-6 space-y-3'>
                  {pkg.features.map((feature, i) => (
                    <li key={i} className='flex items-start'>
                      <svg
                        className='h-5 w-5 text-[#d01c1c] flex-shrink-0'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                      <span className='ml-3 text-gray-700'>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className='mt-8'>
                <button
                  onClick={() => handleOrderClick(pkg.whatsappMessage)}
                  className={`w-full rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                    pkg.popular
                      ? "bg-[#d01c1c] text-white hover:bg-[#b01818]"
                      : "bg-[#f5e6e6] text-[#d01c1c] hover:bg-[#eddada]"
                  }`}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
