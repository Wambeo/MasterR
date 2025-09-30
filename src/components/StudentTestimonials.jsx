import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Sample testimonials
const testimonials = [
  {
    date: 'September 30, 2024',
    name: 'Marion',
    gender: 'female',
    stars: 5,
    feedback:
      "Esther is a great teacher, I was a complete beginner in RStudio, and she helped me a lot to master all the commands I need. She's patient and diligent, thank you Esther!",
  },
  {
    date: 'May 13, 2025',
    name: 'Ana',
    gender: 'female',
    stars: 5,
    feedback:
      'Esther is an amazing teacher!! She was super patient and helped me understand a topic I have never seen before in Econometrics on my first session, I will subscribe to Esther.',
  },
  {
    date: 'June 12, 2025',
    name: 'Shatha',
    gender: 'female',
    stars: 5,
    feedback:
      'Esther is incredibly clear in her explanations. She takes the time to make sure I understand and is always careful with the work. When challenges come up, she looks for solutions and guides me through them.',
  },
  {
    date: 'September 2, 2025',
    name: 'Mathis',
    gender: 'male',
    stars: 5,
    feedback:
      'Esther was great! She took me on as a student on very short notice and I was able to pass my exam because she explains concepts clearly and patiently. Thank you Esther!',
  },
];

const getGenderIcon = (gender) => (gender === 'male' ? '👤' : '👩');

const StudentTestimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSend = () => {
    if (review.trim() && rating > 0) {
      alert(`Thanks for your ${rating}-star review!`);
      setReview('');
      setRating(0);
    } else {
      alert('Please provide both a review and a rating!');
    }
  };

  return (
    <div className="bg-gradient-to-b from-orange-300 to-orange-100 py-12 px-6">
      <h2 className="text-3xl font-semibold text-center mb-10 text-white drop-shadow">
        What My Students are Saying
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" ref={ref}>
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-2">{getGenderIcon(t.gender)}</div>
            <p className="text-sm text-gray-600">{t.date}</p>
            <p className="font-bold">{t.name}</p>
            <div className="text-yellow-500 mt-1 mb-3">
              {'★'.repeat(t.stars)}
            </div>
            <p className="text-sm text-gray-700">{t.feedback}</p>
          </motion.div>
        ))}
      </div>

      {/* Review Form */}
      <div className="mt-12">
        <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
          <label
            htmlFor="review"
            className="block text-gray-700 font-medium mb-2"
          >
            Write a Review
          </label>
          <textarea
            id="review"
            rows="4"
            className="w-full border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Share your experience with Esther..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>

          {/* Star Rating */}
          <div className="flex items-center justify-center mt-4 gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`text-2xl cursor-pointer ${
                  (hoverRating || rating) >= star
                    ? 'text-yellow-400'
                    : 'text-gray-300'
                }`}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
              >
                ★
              </span>
            ))}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleSend}
              className="border border-black px-6 py-2 hover:bg-black hover:text-white transition"
            >
              SEND
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTestimonials;
