import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import logo from '../assets/images/icons/logo1 1.svg';

const Footer = () => {
  return (
    <footer className="bg-[#ECEAE3]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-6 px-4 md:px-20 lg:px-40">
        
        {/* Left Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Logo" className="w-12" />
            <h2 className="text-2xl font-rancho text-[#4B3621]">Espresso Emporium</h2>
          </div>

          <p className="text-gray-700 mb-6">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mb-6">
            <a href="#" className="text-[#4B3621] hover:text-[#C08552] text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#4B3621] hover:text-[#C08552] text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#4B3621] hover:text-[#C08552] text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#4B3621] hover:text-[#C08552] text-xl">
              <FaLinkedinIn />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 text-gray-700">
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +88 01533 333 333
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> info@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt /> 72, Wall Street, King Road, Dhaka
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-2xl font-rancho text-[#4B3621] mb-4">Connect with Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C08552]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C08552]"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C08552]"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 border-2 border-[#4B3621] rounded-lg text-[#4B3621] hover:bg-[#4B3621] hover:text-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
