import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const topics = [
  {
    title: "Data Visualization",
    description:
      "Master ggplot2, plotly, and other visualization libraries to create stunning, publication-ready graphics.",
    tags: ["ggplot2", "plotly", "shinyapps", "interactive plots"],
  },
  {
    title: "Data Manipulation",
    description:
      "Learn dplyr, tidyr, and data.table for efficient data cleaning, transformation, and analysis.",
    tags: ["dplyr", "tidyr", "data.table", "data cleaning"],
  },
  {
    title: "Statistical Analysis",
    description:
      "From basic statistics to advanced modeling techniques including regression, ANOVA, and time series.",
    tags: ["regression", "ANOVA", "time series", "interactive plots"],
  },
  {
    title: "Machine Learning",
    description:
      "Implement ML algorithms using caret, randomForest, and tidymodels for predictive analytics.",
    tags: ["caret", "classification", "tidymodels", "randomForest"],
  },
  {
    title: "R Programming",
    description:
      "Build solid programming foundations with functions, loops, conditionals, and package development.",
    tags: ["ggplot2", "plotly", "shinyapps", "interactive plots"],
  },
  {
    title: "Advanced Topics",
    description:
      "Explore specialized areas like bioinformatics, finance, web scraping, and parallel computing.",
    tags: ["bioinformatics", "finance", "web scraping", "parallel computing"],
  },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between cards
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Topics() {
  return (
    <section className="bg-white py-16" id="topics"> 
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Topics You’ll Learn
        </h2>

        {/* Cards Grid */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              className="rounded-lg shadow-md p-6 bg-gradient-to-b from-[#eacda3] to-[#d6ae7b] border border-gray-200"
              variants={card}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
              }}
            >
              {/* Icon + Title */}
              <div className="flex items-center space-x-3 mb-3">
                <BookOpen className="w-6 h-6 text-gray-900" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {topic.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-800 mb-4">{topic.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {topic.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white px-2 py-1 text-xs rounded shadow-sm border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
