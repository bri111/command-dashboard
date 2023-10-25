import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <h3 className={`text-xl mr-3 font-semibold hover:text-black ${buttonClasses}`}>
        {children}
      </h3>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="text-2xl bg-primary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;