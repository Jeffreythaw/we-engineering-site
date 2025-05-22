// src/components/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer id="contact" className="bg-[#003366] text-white dark:bg-gray-900 mt-16 pt-10 pb-4 px-4 rounded-t-xl shadow-inner">
    <div className="max-w-screen-lg mx-auto grid md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">WE Engineering Pte Ltd</h3>
        <p className="text-sm">WCEGA Tower, 21 Bukit Batok Cres, #29-81, Singapore 658065</p>
        <p className="text-sm mt-1">
          Email: <a href="mailto:info@we-engineering.com.sg" className="underline text-blue-200 hover:text-white">info@we-engineering.com.sg</a>
        </p>
        <p className="text-sm mt-1">Phone: +65 8366 8738</p>
      </div>
      <div>
        <iframe
          title="WE Engineering Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.4934951136814!2d103.75720113814559!3d1.3371481252415036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da106e2359f501%3A0xe711c6cdf0d7a4ad!2sSingapore%20658065!5e0!3m2!1sen!2ssg!4v1716355048575!5m2!1sen!2ssg"
          width="100%"
          height="200"
          className="rounded-lg border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div className="text-center text-xs text-gray-300 mt-6 border-t border-gray-500 pt-3">
      &copy; {new Date().getFullYear()} WE Engineering Pte Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
