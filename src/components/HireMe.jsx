import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const HireMe = () => {
  const subject = `Opportunity for ${personalInfo.fullName}`;
  const body = `Hi ${personalInfo.fullName},\n\nI came across your portfolio and would like to discuss an opportunity with you.\n\nProject details:\n\nBest regards,`;
  const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  const gmailComposeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalInfo.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleHireMeClick = () => {
    const composeWindow = window.open(
      gmailComposeLink,
      "_blank",
      "noopener,noreferrer"
    );

    if (!composeWindow) {
      window.location.href = mailtoLink;
    }
  };

  return (
    <motion.button
      type="button"
      onClick={handleHireMeClick}
      aria-label={`Email ${personalInfo.fullName}`}
      title={`Email ${personalInfo.fullName}`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed left-4 bottom-4 z-30 flex items-center justify-center border-0 bg-transparent p-0"
    >
      <div className="w-24 h-24 relative">
        <div className="absolute -top-10 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-black/70 px-3 py-1 text-xs font-medium text-white shadow-lg backdrop-blur-sm transition group-hover:block">
          Mail me directly
        </div>
        <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin absolute inset-0 opacity-80 transition group-hover:opacity-100"></div>
        <div className="flex justify-center items-center absolute left-4 top-4 green-pink-gradient w-16 h-16 rounded-full shadow-lg">
          <span className="text-white text-[14px] p-1 font-bold">Hire Me</span>
        </div>
      </div>
    </motion.button>
  );
};

export default HireMe;
