import React from 'react';
import { motion } from 'framer-motion';

function ServiceCard({ icon, title, description, tagColor, index }) {
  return (
    <motion.div
      className="relative bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-1 border-l-4"
      style={{ borderColor: tagColor }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start gap-4">
        <img src={icon} alt={title} className="w-10 h-10 shrink-0" />
        <div>
          <h3
            className="font-semibold text-lg mb-1 text-gray-800"
            style={{ color: tagColor }}
          >
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;