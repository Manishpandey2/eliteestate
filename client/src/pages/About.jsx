// import React from 'react'

// export default function About() {
//   return (
//     <div className='py-20 px-4 max-w-6xl mx-auto'>
//       <h1 className='text-3xl font-bold mb-4 text-slate-800'>About elite estate</h1>
//       <p className='mb-4 text-slate-700'>elite estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
//       <p className='mb-4 text-slate-700'>
//       Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
//       </p>
//       <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
//     </div>
//   )
// }
import React from "react";
import { Link } from "react-router-dom";
import { FaHandshake, FaBullseye, FaUsers } from "react-icons/fa"; // Importing icons from react-icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import manishImage from "../assets/manish.jpg"; // Import Manish's image
import sujanImage from "../assets/sujan.jpg"; // Import Sujan's image
import propertyImage from "../assets/prop.jpg";

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-[500px] mb-16 relative background-image"
        style={{ backgroundImage: `\assets\hero.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Elite Estate</h1>
          <p className="text-lg max-w-2xl">
            Elite Estate is committed to providing excellent real estate
            services tailored to your needs, with decades of experience in the
            market.
          </p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        {/* Who We Are Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Who We Are
            </h2>
            <p className="text-slate-700 mb-4">
              Elite Estate is a leading real estate agency that specializes in
              helping clients buy, sell, and rent properties in prime
              neighborhoods. Our experienced team provides tailored advice to
              ensure a smooth experience for every transaction.
            </p>
            <p className="text-slate-700">
              We understand the intricacies of the real estate market, and our
              goal is to provide expert, personalized service to meet each
              client's unique needs.
            </p>
          </div>
          {/* Display Two Images (Manish & Sujan) */}
          <div className="lg:w-1/2 flex gap-4">
            <div className="w-1/2">
              <img
                src={manishImage}
                alt="Manish"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-center mt-2 text-lg font-semibold">Manish</h3>
              <p className="text-center text-slate-700"></p>
            </div>

            <div className="w-1/2">
              <img
                src={sujanImage}
                alt="Sujan"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
              <h3 className="text-center mt-2 text-lg font-semibold">Sujan</h3>
              <p className="text-center text-slate-700"></p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Our Mission
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-12">
            <div className="flex flex-col items-center text-center">
              <FaBullseye className="text-6xl text-blue-600 mb-4" />
              <p className="text-lg text-slate-700 max-w-sm">
                To guide our clients in achieving their real estate goals with
                expertise, integrity, and a focus on exceptional service.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-6xl text-green-600 mb-4" />
              <p className="text-lg text-slate-700 max-w-sm">
                We believe in building strong, long-lasting relationships with
                our clients based on trust, reliability, and results.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaUsers className="text-6xl text-purple-600 mb-4" />
              <p className="text-lg text-slate-700 max-w-sm">
                Our team of skilled professionals is dedicated to providing a
                seamless and rewarding real estate experience for every client.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <img
              src={propertyImage}
              alt="Property"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 text-slate-700 space-y-4">
              <li>
                Experienced agents with in-depth knowledge of the real estate
                market.
              </li>
              <li>
                Personalized service tailored to your specific real estate
                goals.
              </li>
              <li>
                A commitment to transparency and integrity in every transaction.
              </li>
              <li>Access to exclusive listings in prime locations.</li>
              <li>A team that genuinely cares about your success.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-slate-800 mb-4">
            Ready to find your dream property?
          </h3>
          <Link
            to="/contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
      {/* footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Footer Column 1 - Brand Info */}
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-white mb-3">Elite Estate</h3>
            <p className="text-gray-300">
              Your trusted real estate partner. Find your next dream home or
              perfect property with us.
            </p>
            <p className="text-gray-400 mt-4">© 2024 All rights reserved.</p>
          </div>

          {/* Footer Column 2 - Links */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={"/about"}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to={"/contact"}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to={"/terms"}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to={"/privacy"}
                  className="text-gray-300 hover:text-white transition duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Column 3 - Social Media */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} size="2x" />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-white transition duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-4">
          <div className="text-center text-gray-400">
            Built with ❤️ by Elite Estate Team
          </div>
        </div>
      </footer>
    </div>
  );
}
