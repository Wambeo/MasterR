import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const plans = [
  {
    name: 'Starter',
    subtitle: 'Perfect for beginners getting started with R',
    price: '$15',
    per: 'per hour',
    features: [
      '1-on-1 tutoring sessions',
      'Basic R programming',
      'Data wrangling & cleaning (dplyr, tidyr)',
      'Introduction to data visualization with ggplot2',
      'Session recordings',
    ],
    button: 'Book Starter Session',
    popular: false,
  },
  {
    name: 'Professional',
    subtitle: 'Advanced topics for working professionals',
    price: '$20',
    per: 'per hour',
    features: [
      'Everything in Starter',
      'Statistical modeling & hypothesis testing',
      'Machine learning with R (classification, regression, clustering)',
      'Advanced data visualization (dashboards, interactive plots)',
      'Priority scheduling',
      'Code review sessions',
      'Custom project guidance',
      'Data analysis & report writing (academic, business)',
    ],
    button: 'Book Professional Session',
    popular: true,
  },
  {
    name: 'Expert',
    subtitle: 'Specialized training for complex projects',
    price: '$30',
    per: 'per hour',
    features: [
      'Everything in Professional',
      'R Markdown formatting & professional report automation',
      'Financial modeling',
      'R Package development',
      'Research consultation (academic & industry projects)',
      'Shiny web applications (interactive dashboards)',
      '24/7 support for ongoing projects',
    ],
    button: 'Book Expert Session',
    popular: false,
  },
];

const PricingPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white py-16 px-6 relative" id='pricing'>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Flexible Pricing Plans</h2>
        <p className="text-gray-600 mt-2">
          Choose the plan that best fits your learning goals and schedule. All sessions are conducted one-on-one for maximum effectiveness.
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
              plan.popular ? 'border-orange-400 shadow-md scale-105 z-10' : ''
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
                    ? 'bg-orange-500 text-white hover:bg-orange-600 border-orange-500'
                    : 'hover:bg-black hover:text-white border-black'
                }`}
              >
                {plan.button}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10 text-sm text-gray-600">
        <p>All plans include flexible scheduling and satisfaction guarantee</p>
        <p className="text-gray-500 mt-1">
          Package deals available for multiple sessions. Contact for custom training.
        </p>
      </div>

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              onClick={() => setSelectedPlan(null)}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-2">Book {selectedPlan.name} Session</h3>
            <p className="text-gray-600 mb-4">{selectedPlan.subtitle}</p>
            <p className="text-sm text-gray-700 mb-6">
              Price: <strong>{selectedPlan.price} {selectedPlan.per}</strong>
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-4 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              onClick={() => {
                alert(`Thank you! We'll contact you for the ${selectedPlan.name} plan.`);
                setSelectedPlan(null);
              }}
              className="w-full bg-black text-white py-2 rounded hover:bg-orange-500 transition"
            >
              Confirm Booking
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPlans;
