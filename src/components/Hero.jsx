import React from "react";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="flex items-center space-x-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <p className="uppercase text-sm font-medium text-gray-600">
              On-Demand Course
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Master R Programming <br /> with Esther
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-lg text-gray-700 max-w-lg">
            Unlock the power of data science and statistical computing with
            personalized R tutoring sessions. From basics to advanced analytics,
            I'll guide you every step of the way.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition">
              Start Learning
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              View Curriculum
            </button>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-xl font-bold text-gray-900">500+</p>
              <p className="text-sm text-gray-600">Students Taught</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">5+ yrs</p>
              <p className="text-sm text-gray-600">Experience</p>
            </div>
            <div>
              <p className="text-xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>

        {/* Right Content - Image */}
        <div>
          <img
            src="https://i.pinimg.com/1200x/ad/ac/9c/adac9c65d814b487008e23adb2723280.jpg"
            alt="R Programming Desk Setup"
            className="rounded-lg shadow-lg h-[70vh] w-full"
          />
        </div>
      </div>
    </section>
  );
}
