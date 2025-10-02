import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for beginners getting started with R",
    price: "$15",
    per: "per hour",
    features: [
      "1-on-1 tutoring sessions",
      "Basic R programming",
      "Data wrangling & cleaning (dplyr, tidyr)",
      "Introduction to data visualization with ggplot2",
      "Session recordings",
    ],
    button: "Book Starter Session",
    popular: false,
  },
  {
    name: "Professional",
    subtitle: "Advanced topics for working professionals",
    price: "$20",
    per: "per hour",
    features: [
      "Everything in Starter",
      "Statistical modeling & hypothesis testing",
      "Machine learning with R",
      "Advanced data visualization",
      "Priority scheduling",
      "Code review sessions",
      "Custom project guidance",
      "Data analysis & report writing",
    ],
    button: "Book Professional Session",
    popular: true,
  },
  {
    name: "Expert",
    subtitle: "Specialized training for complex projects",
    price: "$30",
    per: "per hour",
    features: [
      "Everything in Professional",
      "R Markdown & automation",
      "Financial modeling",
      "R Package development",
      "Research consultation",
      "Shiny web applications",
      "24/7 support",
    ],
    button: "Book Expert Session",
    popular: false,
  },
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleConfirm = () => {
    if (!name || !email) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    emailjs
      .send(
        "service_hr8by0w", // ✅ replace with your service ID
        "template_97nq0hn", // ✅ replace with your template ID
        {
          user_name: name,
          user_email: email,
          plan_name: selectedPlan.name,
          plan_price: selectedPlan.price,
          plan_subtitle: selectedPlan.subtitle,
        },
        "qz7IN5s8k5vOkm5FN" // ✅ replace with your public key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
        },
        (error) => {
          console.error(error);
          setLoading(false);
          setStatus("error");
        }
      );
  };

  const resetModal = () => {
    setSelectedPlan(null);
    setName("");
    setEmail("");
    setLoading(false);
    setStatus("idle");
  };

  return (
    <div className="bg-white py-16 px-6 relative" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Flexible Pricing Plans</h2>
        <p className="text-gray-600 mt-2">
          Choose the plan that best fits your learning goals. Sessions are 1-on-1 for maximum effectiveness.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto" ref={ref}>
        {plans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className={`border rounded-lg p-6 shadow-sm flex flex-col justify-between relative ${
              plan.popular ? "border-orange-400 shadow-md scale-105 z-10" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-orange-500 text-white text-sm px-3 py-1 rounded-full shadow">
                Most Popular
              </div>
            )}
            <div>
              <h3 className="text-xl font-semibold text-center">{plan.name}</h3>
              <p className="text-sm text-center text-gray-500 mt-1">{plan.subtitle}</p>
              <div className="text-center my-6">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-600 text-sm ml-1">{plan.per}</span>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setSelectedPlan(plan)}
                className={`w-full py-2 px-4 border rounded font-medium transition ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600 border-orange-500"
                    : "hover:bg-black hover:text-white border-black"
                }`}
              >
                {plan.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
            {/* Close button */}
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={resetModal}
            >
              ×
            </button>

            {/* Success view */}
            {status === "success" ? (
              <div className="text-center">
                <div className="text-green-600 text-3xl mb-2">✅</div>
                <h4 className="text-lg font-semibold">Booking Confirmed!</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Thank you <strong>{name}</strong>, a confirmation has been sent to{" "}
                  <strong>{email}</strong>.
                </p>
                <button
                  onClick={resetModal}
                  className="mt-6 w-full py-2 rounded bg-orange-500 text-white hover:bg-orange-600"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold mb-2">Book {selectedPlan.name} Session</h3>
                <p className="text-gray-600 mb-4">{selectedPlan.subtitle}</p>
                <p className="text-sm text-gray-700 mb-6">
                  Price: <strong>{selectedPlan.price} {selectedPlan.per}</strong>
                </p>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mb-3 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mb-4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                />

                {status === "error" && (
                  <p className="text-red-500 text-sm mb-3">
                    ❌ Please enter your name and a valid email.
                  </p>
                )}

                <button
                  onClick={handleConfirm}
                  disabled={loading}
                  className={`w-full py-2 rounded transition ${
                    loading
                      ? "bg-gray-400 cursor-not-allowed text-white"
                      : "bg-black text-white hover:bg-orange-500"
                  }`}
                >
                  {loading ? "Sending..." : "Confirm Booking"}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;
