import React from 'react';
import { Link } from 'react-router-dom';
// import img from './assets/img.Smart.png';
const LandingPage = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <header className="text-center mb-12">
        <h1 class="text-3xl font-medium">
          <a href="#hero">🤖 Smart-recruit</a>
        </h1>
        <nav class="hidden md:block space-x-8 text-xl" aria-label="main">
          <a href="#home" class="hover:opacity-90">
            Home
          </a>
          <a href="#About" class="hover:opacity-90">
            About
          </a>
          <a href="#testimonial" class="hover:opacity-90">
            Testimonial
          </a>
          <a href="#contact" class="hover:opacity-90">
            Contact Us
          </a>
          <Link to="/login" className="bg-blue-500 hover:opacity-90">
            Get Started
          </Link>

          <Link to="/login" className="bg-blue-500 hover:opacity-90">
            Login
          </Link>
        </nav>

        {/* <img src={logo} alt="Your Logo" className=" px-4 py-2 m-2 rounded" /> */}
      </header>
      <h1 className="text-4xl font-bold mb-4">Welcome to SmartRecruit</h1>
      <p className="text-lg mb-8">
        Your solution for streamlined recruitment and onboarding.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Job Posting</h2>
          <p>Easily post job openings with all necessary details.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Application Tracking</h2>
          <p>Manage and track job applications efficiently.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-2">Email Notifications</h2>
          <p>Automated updates for application statuses.</p>
        </div>
      </section>
      <footer className="text-center mt-12">
        <p className="text-gray-600">
          &copy; 2024 SmartRecruit. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
