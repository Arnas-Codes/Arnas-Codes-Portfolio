import React from "react";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div className="mb-8">
      <Link
        to="/"
        className="bg-(--glass) border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) w-fit rounded-xl border px-5 py-3 backdrop-blur-md transition-all duration-300 block text-center font-medium"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default Button;
