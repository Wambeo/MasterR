import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { ChevronDownIcon, ChevronUpIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

// Env variables
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONFIRM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID;
const HCAPTCHA_SITE_KEY = import.meta.env.VITE_HCAPTCHA_SITE_KEY;

const faqData = [
  {
    question: "How long are sessions?",
    answer: "Standard sessions are 1 hour, but we can arrange 90-minute or 2-hour sessions for intensive topics.",
  },
  {
    question: "Do I need to install anything?",
    answer: "I’ll help you set up R and RStudio during our first session. No prior installation required.",
  },
  {
    question: "Can you help with my specific project?",
    answer: "Absolutely! I often work with students on their real-world projects, assignments, and research.",
  },
];

const TutoringForm = () => {
  const formRef = useRef();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [faqOpen, setFaqOpen] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    const form = formRef.current;

    if (!captchaToken) {
      alert("Please complete the CAPTCHA to prove you're human.");
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY).then(
      (result) => {
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

        setShowSuccessModal(true);
        setCaptchaToken(null); // Reset hCaptcha
        e.target.reset();
        setTimeout(() => setShowSuccessModal(false), 3000);
      },
      (error) => {
        console.error("Failed to send message:", error.text);
        alert("Failed to send message. Please try again.");
      }
    );
  };

  const toggleAccordion = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg col-span-1">
            <h3 className="text-xl font-semibold text-orange-800 mb-4">Book A Session</h3>
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <div className="flex gap-4">
                <input type="text" name="first_name" placeholder="Enter your first name" className="w-1/2 p-2 border border-gray-300 rounded" required />
                <input type="text" name="last_name" placeholder="Enter your last name" className="w-1/2 p-2 border border-gray-300 rounded" required />
              </div>
              <input type="email" name="email" placeholder="Enter your email" className="w-full p-2 border border-gray-300 rounded" required />
              <select name="experience_level" className="w-full p-2 border border-gray-300 rounded" required>
                <option value="">Select your experience level</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select name="topic" className="w-full p-2 border border-gray-300 rounded" required>
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

              {/* ✅ hCaptcha */}
              <HCaptcha
                sitekey={HCAPTCHA_SITE_KEY}
                onVerify={(token) => setCaptchaToken(token)}
                theme="light"
              />

              <input type="hidden" name="submitted_at" value={new Date().toLocaleString()} />

              <button type="submit" className="w-full bg-white text-orange-700 border border-orange-500 font-semibold py-2 rounded hover:bg-orange-200 transition">
                SCHEDULE SESSION
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-orange-100 p-6 rounded-lg shadow-lg col-span-1">
            <h3 className="text-lg font-semibold mb-4">📧 Email Support</h3>
            <p className="text-sm mb-2">tutor@rstatshub.com</p>
            <p className="text-sm text-gray-700 mb-4">I respond within 1 hour during business days</p>

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

          {/* FAQ Accordion */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-lg font-semibold text-orange-800 mb-2 flex items-center gap-2">
              <QuestionMarkCircleIcon className="h-6 w-6 text-orange-500" />
              Frequently Asked Questions
            </h3>

            {faqData.map((item, index) => (
              <div key={index} className="bg-orange-100 rounded shadow overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-orange-700">{item.question}</span>
                  {faqOpen === index ? (
                    <ChevronUpIcon className="h-5 w-5 text-orange-700" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-orange-700" />
                  )}
                </button>
                {faqOpen === index && (
                  <div className="px-4 pb-4 text-sm text-gray-700">{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutoringForm;
