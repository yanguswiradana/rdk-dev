import React from "react";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiFlutter,
  SiNodedotjs,
} from "react-icons/si";

const page = () => {
  return (
    <section id='about' className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
          {/* Image Column */}
          <div className='md:w-1/3 flex justify-center'>
            <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden  border-gray-100'>
              {/* Replace with your actual image */}
              <div className='w-full h-full  flex items-center justify-center'>
                <img src='/images/logo.png' alt='' />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className='md:w-2/3 jusqtify-center align-center'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
              About <span className='text-secondary'>Us</span>
            </h2>

            <p className='text-lg text-gray-600 mb-4'>
              Welcome to{" "}
              <span className='text-secondary font-bold'>Reduktor</span>, a
              professional web development company dedicated to helping your
              business stand out in the digital world.
            </p>

            <p className='text-lg text-gray-600 mb-6'>
              We are committed to delivering website solutions that are
              innovative, responsive, and tailored to the unique needs of each
              of our clients.
            </p>

            <div className='flex flex-wrap gap-5'>
              <SiNextdotjs className='text-white dark:text-black text-3xl hover:scale-110 transition-transform' />
              <SiTailwindcss className='text-cyan-500 text-3xl hover:scale-110 transition-transform' />
              <SiLaravel className='text-red-500 text-3xl hover:scale-110 transition-transform' />
              <SiFlutter className='text-blue-500 text-3xl hover:scale-110 transition-transform' />
              <SiNodedotjs className='text-green-500 text-3xl hover:scale-110 transition-transform' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
