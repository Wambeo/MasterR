import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

// Use Vite-style env vars (or adapt to CRA if needed)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIRM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID;


const Contact = () => {
  const formRef = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
.then(
      (result) => {
        // Send confirmation email to user
        emailjs.send(
          SERVICE_ID,
          CONFIRM_TEMPLATE_ID,
          {
            first_name: form.first_name.value,
            email: form.email.value,
            experience_level: form.experience_level.value,
            topic: form.topic.value,
          },
          PUBLIC_KEY
        );

        setShowSuccessModal(true); // Show modal
        e.target.reset(); // Reset form
      },
      (error) => {
        console.error("Failed to send message:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 relative" id="form">
      {/* ✅ Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm">
            <h2 className="text-2xl font-bold text-green-600 mb-2">Success!</h2>
            <p className="text-gray-700 mb-4">
              Your message has been sent successfully. I'll get back to you shortly!
            </p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Ready to Start Learning?
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Get in touch to schedule your first session or ask any questions about R programming tutoring.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Booking Form */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg col-span-1">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">
              Book A Session
            </h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="Enter your first name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Enter your last name"
                  className="w-1/2 p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
              <select
                name="experience_level"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">Select your experience level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select
                name="topic"
                className="w-full p-2 border border-gray-300 rounded"
                required
              >
                <option value="">What would you like to learn?</option>
                <option>Data Visualization</option>
                <option>Statistics</option>
                <option>Machine Learning</option>
              </select>
              <textarea
                name="message"
                placeholder="Tell me about your goals and any specific topics..."
                rows="4"
                className="w-full p-2 border border-gray-300 rounded"
                required
              ></textarea>

              {/* Hidden field to capture current time */}
              <input
                type="hidden"
                name="submitted_at"
                value={new Date().toLocaleString()}
              />

              <button
                type="submit"
                className="w-full bg-white text-orange-700 border border-orange-500 font-semibold py-2 rounded hover:bg-orange-200 transition"
              >
                SCHEDULE SESSION
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg col-span-1">
            <h3 className="text-lg font-semibold mb-4">📧 Email Support</h3>
            <p className="text-sm mb-2">estherwambeo18@gmail.com</p>
            <p className="text-sm text-gray-700 mb-4">
              I respond within 1 hour during business days
            </p>

            <h3 className="text-lg font-semibold mb-2">💬 Whatsapp Support</h3>
            <p className="text-sm mb-4">+254 705977428</p>

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
