import React from "react";
import { motion } from "framer-motion";

const LeadershipCard = ({ photo, name, title, bio1, bio2, index }) => (
  <motion.div
    className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-10"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <img
      src={photo}
      alt={name}
      className="w-36 h-36 object-cover rounded-full shadow-lg"
    />
    <div className="text-center sm:text-left max-w-3xl">
      <h3 className="text-xl font-semibold text-primary">
        {name}
        <span className="text-blue-600 font-medium text-base ml-2">
          ({title})
        </span>
      </h3>
      <p className="text-gray-700 mt-2 text-sm leading-relaxed">{bio1}</p>
      <p className="text-gray-700 mt-2 text-sm leading-relaxed">{bio2}</p>
    </div>
  </motion.div>
);

export default LeadershipCard;