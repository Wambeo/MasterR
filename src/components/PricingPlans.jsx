import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";

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
  const [validationMsg, setValidationMsg] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // ✅ Pure client-side email validation
  const validateEmail = (email) => {
    const trimmed = email.trim().toLowerCase();

    // Empty state
    if (trimmed === "") {
      setValidationMsg("");
      setIsEmailValid(false);
      return;
    }

    // Format check
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(trimmed)) {
      setValidationMsg("❌ Invalid email format");
      setIsEmailValid(false);
      return;
    }

    // Common typo detection
    const commonTypos = {
      "gamil.com": "gmail.com",
      "gnail.com": "gmail.com",
      "hotmial.com": "hotmail.com",
      "yaho.com": "yahoo.com",
    };
    const domain = trimmed.split("@")[1];
    if (commonTypos[domain]) {
      setValidationMsg(`⚠️ Did you mean ${trimmed.split("@")[0]}@${commonTypos[domain]}?`);
      setIsEmailValid(false);
      return;
    }

    // Block disposable/fake domains
    const blockedDomains = [
      "example.com",
      "test.com",
      "mailinator.com",
      "tempmail.com",
      "guerrillamail.com",
    ];
    if (blockedDomains.some((d) => domain.includes(d))) {
      setValidationMsg("❌ Disposable or fake email not allowed");
      setIsEmailValid(false);
      return;
    }

    // All checks passed
    setValidationMsg("✅ Looks like a valid email!");
    setIsEmailValid(true);
  };

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  // ✅ Booking confirmation
  const handleConfirm = async () => {
    if (!name || !email || !isEmailValid) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    emailjs
      .send(
        "service_hr8by0w", // your service ID
        "template_97nq0hn", // your template ID
        {
          user_name: name,
          user_email: email,
          plan_name: selectedPlan.name,
          plan_price: selectedPlan.price,
          plan_subtitle: selectedPlan.subtitle,
        },
        "qz7IN5s8k5vOkm5FN" // your public key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("success");
          setValidationMsg("");
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
    setStatus("idle");
    setValidationMsg("");
    setIsEmailValid(false);
  };

  return (
    <div className="bg-white py-16 px-6 relative" id="pricing">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Flexible Pricing Plans</h2>
        <p className="text-gray-600 mt-2">
          Choose the plan that best fits your learning goals. Sessions are 1-on-1 for maximum effectiveness.
        </p>
      </div>

      {/* Plans */}
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto" ref={ref}>
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.2, duration: 0.6 }}
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
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{f}</span>
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

      {/* Booking Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={resetModal}
            >
              ×
            </button>

            {status === "success" ? (
              <div className="text-center">
                <div className="text-green-600 text-3xl mb-2">✅</div>
                <h4 className="text-lg font-semibold">Booking Confirmed!</h4>
                <p className="text-gray-600 mt-2 text-sm">
                  Thank you <strong>{name}</strong>, confirmation sent to{" "}
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

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full mb-3 border p-2 rounded focus:ring-2 focus:ring-orange-400"
                />

                {/* Email Input */}
                <div className="mb-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full border p-2 rounded focus:ring-2 ${
                      isEmailValid
                        ? "focus:ring-green-400 border-green-400"
                        : "focus:ring-orange-400 border-gray-300"
                    }`}
                  />
                  {validationMsg && (
                    <p
                      className={`text-sm mt-1 ${
                        validationMsg.startsWith("✅")
                          ? "text-green-600"
                          : validationMsg.startsWith("❌")
                          ? "text-red-500"
                          : "text-orange-500"
                      }`}
                    >
                      {validationMsg}
                    </p>
                  )}
                </div>

                <button
                  onClick={handleConfirm}
                  disabled={!isEmailValid || loading}
                  className={`w-full py-2 rounded transition ${
                    loading
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : !isEmailValid
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-black text-white hover:bg-orange-500"
                  }`}
                >
                  {loading ? "Processing..." : "Confirm Booking"}
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
