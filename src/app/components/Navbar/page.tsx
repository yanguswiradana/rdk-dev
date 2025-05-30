import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg'>
      <div className='px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex shrink-0'>
            <Link href='/' className='flex items-center'>
              <Image
                src='/images/logo.png'
                alt='Website Logo'
                width={40}
                height={20}
                className='h-auto w-auto'
              />
              <p className='sr-only'>Website Title</p>
            </Link>
          </div>
          {/* Updated div to center the links */}
          <div className='flex flex-1 items-center justify-center md:gap-5'>
            <Link
              href='#'
              className='inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900'
            >
              Project
            </Link>
            <Link
              href='#'
              className='inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900'
            >
              Product
            </Link>
            <Link
              href='#'
              className='inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900'
            >
              Contact
            </Link>
          </div>
          <div className='flex items-center gap-2 border-2 border-gray-100 bg-white/80 shadow backdrop-blur-lg  p-2 rounded-lg'>
            <p className='text-sm font-medium text-gray-900'>EN</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
