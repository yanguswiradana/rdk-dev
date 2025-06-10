import Link from "next/link";

const Hero = () => {
  return (
    <div
      id='hero'
      className='relative bg-white h-screen flex items-center justify-center'
    >
      {/* Background Image (optional) */}
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20'
        style={{ backgroundImage: "url('/images/hero-bg-light.jpg')" }}
      ></div>

      {/* Content */}
      <div className='relative z-10 text-center px-4'>
        {/* <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6'>
          Welcome to Reduktor
        </h1> */}
        <h1 className='text-5xl max-w-6xl md:text-6xl lg:text-7xl font-bold text-black mb-[16]'>
          We deliver <span className='text-secondary'>innovative</span>{" "}
          solutions for your <span className='text-secondary'>business</span>{" "}
          needs.
        </h1>
        <p className='text-lg md:text-xl italic lg:text-2xl text-gray-600 mb-8'>
          Digital Solutions, Real-World Impact.
        </p>
        <div className='space-x-4'>
          <Link
            href='#about'
            className='bg-red-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition duration-300'
          >
            Learn More
          </Link>
          <Link
            href='#contact'
            className='bg-transparent border border-gray-900 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 hover:text-white transition duration-300'
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
