// components/ContactSection.tsx
import React from "react";

const ContactSection = () => {
  return (
    <section id='contact' className='py-16 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
            Get In <span className='text-[#d01c1c]'>Touch</span>
          </h2>
          <p className='text-gray-600 max-w-2xl mx-auto'>
            Have a project in mind or want to collaborate? Feel free to reach
            out to me.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10'>
          {/* Contact Information */}
          <div className='lg:w-1/3 bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Contact Information
            </h3>

            <div className='space-y-5'>
              <div className='flex items-start gap-4'>
                <div className='p-2 bg-[#d01c1c]/10 rounded-full'>
                  <svg
                    className='w-6 h-6 text-[#d01c1c]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-medium text-gray-700'>Email</h4>
                  <p className='text-gray-500'>your.email@example.com</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-2 bg-[#d01c1c]/10 rounded-full'>
                  <svg
                    className='w-6 h-6 text-[#d01c1c]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-medium text-gray-700'>Phone</h4>
                  <p className='text-gray-500'>+1 (123) 456-7890</p>
                </div>
              </div>

              <div className='flex items-start gap-4'>
                <div className='p-2 bg-[#d01c1c]/10 rounded-full'>
                  <svg
                    className='w-6 h-6 text-[#d01c1c]'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                  </svg>
                </div>
                <div>
                  <h4 className='font-medium text-gray-700'>Location</h4>
                  <p className='text-gray-500'>123 Street, City, Country</p>
                </div>
              </div>
            </div>

            <div className='mt-8'>
              <h4 className='font-medium text-gray-700 mb-4'>Follow Us</h4>
              <div className='flex gap-4'>
                {["twitter", "github", "linkedin", "instagram"].map(
                  (social) => (
                    <a
                      key={social}
                      href='#'
                      className='p-2 bg-gray-100 hover:bg-[#d01c1c]/10 rounded-full transition-colors'
                      aria-label={social}
                    >
                      <svg
                        className='w-5 h-5 text-gray-600 hover:text-[#d01c1c]'
                        fill='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d={`M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z`}
                        />
                      </svg>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className='lg:w-2/3 bg-white p-8 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold text-gray-800 mb-6'>
              Send us a Message
            </h3>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d01c1c] focus:border-transparent'
                    placeholder='Your name'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d01c1c] focus:border-transparent'
                    placeholder='Your email'
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Subject
                </label>
                <input
                  type='text'
                  id='subject'
                  name='subject'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d01c1c] focus:border-transparent'
                  placeholder='Subject'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 mb-1'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows={5}
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d01c1c] focus:border-transparent'
                  placeholder='Your message'
                ></textarea>
              </div>

              <button
                type='submit'
                className='px-6 py-3 bg-[#d01c1c] text-white font-medium rounded-md hover:bg-[#b01919] transition-colors focus:outline-none focus:ring-2 focus:ring-[#d01c1c] focus:ring-offset-2'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
