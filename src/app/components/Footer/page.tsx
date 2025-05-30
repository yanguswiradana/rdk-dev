import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-white text-gray-700 border-t border-gray-200 py-8'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Column 1: About Us */}
          <div className='mx-auto text-left'>
            <h3 className='text-lg font-semibold mb-4 text-gray-900'>
              About Us
            </h3>
            <p className='text-sm'>
              Welcome to{" "}
              <span className='text-secondary font-bold'>Reduktor</span>, a
              professional web development company dedicated to helping your
              business stand out in the digital world. We are committed to
              delivering website solutions that are innovative, responsive, and
              tailored to the unique needs of each of our clients.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className='text-left md:text-center'>
            <h3 className='text-lg font-semibold mb-4 text-gray-900'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link href='/' className='hover:text-[#d01c1c]'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:text-[#d01c1c]'>
                  About
                </Link>
              </li>
              <li>
                <Link href='/services' className='hover:text-[#d01c1c]'>
                  Project
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:text-[#d01c1c]'>
                  Product
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className='text-left md:text-right'>
            <h3 className='text-lg font-semibold mb-4 text-gray-900'>
              Contact Info
            </h3>
            <ul className='text-sm space-y-2'>
              <li>
                <span className='text-primary font-bold'>Email :</span>{" "}
                reduktorsh@gmail.com
              </li>
              <li>
                <span className='text-primary font-bold'>Phone :</span> +62
                851-4103-9301{" "}
              </li>
              <li className='pt-2'>
                <span className='text-primary font-bold'>Address :</span> Jl.
                Tukad Badung No.135
              </li>
              <li> Renon, Denpasar Selatan</li>
              <li> Kota Denpasar, Bali 80226</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className='border-t border-gray-200 mt-8 pt-8 text-center'>
          <p className='text-sm text-primary font-bold'>
            &copy; {new Date().getFullYear()}{" "}
            <span className='text-secondary'>Reduktor Development.</span> All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
