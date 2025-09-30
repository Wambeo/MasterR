import React from "react";

const TutoringForm = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Ready to Start Learning?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch to schedule your first session or ask any questions about R programming tutoring.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg col-span-1">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">
              Book A Session
            </h3>
            <form className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>Select your experience level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>What would you like to learn?</option>
                <option>Data Visualization</option>
                <option>Statistics</option>
                <option>Machine Learning</option>
              </select>
              <textarea
                placeholder="Tell me about your goals and any specific topics..."
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-white text-orange-700 border border-orange-500 font-semibold py-2 rounded hover:bg-orange-200 transition"
              >
                SCHEDULE SESSION
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg col-span-1 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">📧 Email Support</h3>
            <p className="text-sm mb-2">hello@tutor.com</p>
            <p className="text-sm text-gray-700 mb-4">I respond within 2 hours during business days</p>

            <h3 className="text-lg font-semibold mb-2">💬 Whatsapp Support</h3>
            <p className="text-sm mb-4">+254 712345678</p>

            <h3 className="text-lg font-semibold mb-2">🕒 Availability</h3>
            <p className="text-sm">
              Monday - Friday: 9 AM - 8 PM EST<br />
              Saturday: 10 AM - 4 PM EST<br />
              Sunday: By appointment
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">💻 Session Format</h3>
            <p className="text-sm text-gray-700">
              Online via Zoom with screen sharing<br />
              All sessions are recorded for your reference
            </p>
          </div>

          {/* FAQ Section */}
          <div className="space-y-4 col-span-1">
            <div className="bg-orange-100 p-4 rounded shadow">
              <h4 className="text-orange-700 font-semibold">How long are sessions?</h4>
              <p className="text-sm mt-1 text-gray-700">
                Standard sessions are 1 hour, but we can arrange 90-minute or 2-hour sessions for intensive topics.
              </p>
            </div>

            <div className="bg-orange-100 p-4 rounded shadow">
              <h4 className="text-orange-700 font-semibold">Do I need to install anything?</h4>
              <p className="text-sm mt-1 text-gray-700">
                I’ll help you set up R and RStudio during our first session. No prior installation required.
              </p>
            </div>

            <div className="bg-orange-100 p-4 rounded shadow">
              <h4 className="text-orange-700 font-semibold">Can you help with my specific project?</h4>
              <p className="text-sm mt-1 text-gray-700">
                Absolutely! I often work with students on their real-world projects, assignments, and research.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutoringForm;
