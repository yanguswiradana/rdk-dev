"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Social Media Icons
const InstagramIcon = () => (
  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
  </svg>
);

const LinkedInIcon = () => (
  <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 24 24'>
    <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
  </svg>
);

const TeamSection = () => {
  // Dummy team data
  const teamMembers = [
    {
      id: 1,
      name: "Parta",
      role: "Lead Developer",
      image: "/images/logo.png",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 2,
      name: "Wira",
      role: "Developer",
      image: "/images/logo.png",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 3,
      name: "Aby",
      role: "Developer",
      image: "/images/logo.png",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 4,
      name: "Willy",
      role: "Lead UI/UX Designer",
      image: "/images/logo.png",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
    {
      id: 5,
      name: "Kris",
      role: "UI/UX Designer",
      image: "/images/logo.png",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },

    {
      id: 6,
      name: "Nanda",
      role: "UI/UX Designer",
      image: "/images/logo.png",
      social: {
        instagram: "https://instagram.com",
        linkedin: "https://linkedin.com",
      },
    },
  ];

  return (
    <div className='bg-white py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>
            Our <span className='text-secondary'>Team</span>
          </h2>
          <p className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'>
            Meet the professionals who will help grow your business
          </p>
        </div>

        {/* Slider Section */}
        <div className='relative'>
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
              el: ".team-pagination",
            }}
            loop={true}
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className='group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full mb-4'>
                  <div className='relative h-64 overflow-hidden'>
                    <Image
                      width={400}
                      height={400}
                      className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      src={member.image}
                      alt={member.name}
                      loading='lazy'
                    />
                    {/* Social Media Overlay */}
                    <div className='absolute inset-0 bg-[#d01c1c]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 space-x-4'>
                      <a
                        href={member.social.instagram}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white hover:text-gray-200 p-2 bg-black/30 rounded-full transition-colors'
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-white hover:text-gray-200 p-2 bg-black/30 rounded-full transition-colors'
                      >
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                  <div className='p-6 text-center'>
                    <h3 className='text-xl font-semibold text-gray-900'>
                      {member.name}
                    </h3>
                    <p className='mt-1 text-[#d01c1c] font-medium'>
                      {member.role}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination with red color */}
          <div className='team-pagination !flex !justify-center !mt-8 [&>.swiper-pagination-bullet]:!bg-gray-300 [&>.swiper-pagination-bullet-active]:!bg-[#d01c1c]'></div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
