import React from 'react'

export default function Contact() {
  return (
    <div className="bg-white min-h-screen py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Ready to Start Learning?
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Get in touch to schedule your first session or ask any questions about R programming tutoring.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Book A Session Form */}
        <div className="bg-[#fde9d9] p-6 rounded-lg shadow">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Book A Session</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-300 focus:outline-none"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-300 focus:outline-none"
            />
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-300 focus:outline-none">
              <option>Select your experience level</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-300 focus:outline-none">
              <option>What would you like to learn?</option>
              <option>Data Visualization</option>
              <option>Statistical Analysis</option>
              <option>Package Development</option>
            </select>
            <textarea
              rows="4"
              placeholder="Tell me about your goals and any specific topics..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring focus:ring-orange-300 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow transition"
            >
              SCHEDULE SESSION
            </button>
          </form>
        </div>

        {/* Contact & Support Info */}
        <div className="bg-[#fde9d9] p-6 rounded-lg shadow text-gray-700">
          <h3 className="font-semibold text-xl text-gray-800 mb-4">Support</h3>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="font-semibold">📧 Email Support</span>
              <p>estherwambeo18@gmail.com</p>
              <p className="text-xs text-gray-500">I respond within 2 hours during business days</p>
            </li>
            <li>
              <span className="font-semibold">💬 WhatsApp Support</span>
              <p>+254 705977428</p>
            </li>
            <li>
              <span className="font-semibold">🕒 Availability</span>
              <p>Monday – Friday: 9 AM – 8 PM EST</p>
              <p>Saturday: 10 AM – 4 PM EST</p>
              <p>Sunday: By appointment</p>
            </li>
            <li>
              <span className="font-semibold">💻 Session Format</span>
              <p>Online via Zoom with screen sharing</p>
              <p className="text-xs text-gray-500">All sessions are recorded for your reference</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

  

