// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 w-[40px] h-[40px] bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-500 ${
        visible ? "block" : "hidden"
      }`}
      aria-label="Scroll to Top"
    >
      ↑
    </button>
  );
};

export default ScrollToTop;
