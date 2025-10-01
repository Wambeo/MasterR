import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from "../assets/image.jpeg"
// Adjust if in /public

const TutorProfile = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      id='about'
      className="flex flex-col lg:flex-row justify-between items-start gap-12 h-auto px-6 lg:px-16 py-16 bg-white"
    >
      {/* Text Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex-1 max-w-2xl"
      >
        <h4 className="text-sm text-gray-500 uppercase tracking-wider">
          Meet Your Tutor
        </h4>
        <h1 className="text-3xl font-bold mt-2 mb-6 leading-snug">
          Esther is a data scientist specializing in <br /> R programming Tutoring.
        </h1>
        <p className="text-gray-700 leading-relaxed">
          With 5+ years of experience in data science and statistical computing,
          I've guided hundreds of students and professionals in mastering R.
          <br /><br />
          My journey with R began during my degree in Biostatistics, where I
          discovered its power for data analysis, statistical modelling and
          visualization.
          <br /><br />
          Since then, I've worked as a data scientist, while sharing my knowledge
          through personalized tutoring. My teaching blends theory with practical,
          real-world applications, ensuring every session is tailored to your goals
          and learning style.
          <br /><br />
          Whether you’re a beginner or aiming to deepen your expertise, I provide
          customized tutoring across all aspects of R programming.
        </p>

        <h3 className="text-lg font-semibold mt-6 mb-3">Specializations:</h3>
        <div className="flex flex-wrap gap-2">
          {[
            "Data Analysis & Report Writing",
            "Data Wrangling & Cleaning (dplyr, tidyr)",
            "Statistical Modeling & Hypothesis Testing",
            "R Markdown Formatting & Reproducible Reports",
            "Machine Learning (classification, regression, clustering)",
            "Data Visualization (ggplot2, Shiny apps, dashboards)",
          ].map((item, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded border border-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Image + Stats Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="flex-1 flex flex-col items-center"
      >
        <div className="border-[10px] border-orange-300 rounded-lg overflow-hidden shadow-md">
          <img
            src={image}
            alt="Esther the R tutor"
            className="w-full max-w-sm object-cover rounded"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8 w-full max-w-md">
          {[
            { icon: "🏅", label: "BSC", sub: "in Biostatistics" },
            { icon: "📦", label: "50+", sub: "R Packages Mastered" },
            { icon: "👥", label: "220+", sub: "Students Taught" },
            { icon: "⏱️", label: "1200+", sub: "Hours Taught" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center bg-gray-50 p-4 rounded shadow-sm"
            >
              <div className="text-3xl mb-1">{stat.icon}</div>
              <p className="font-bold">{stat.label}</p>
              <p className="text-sm text-gray-600">{stat.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TutorProfile;
