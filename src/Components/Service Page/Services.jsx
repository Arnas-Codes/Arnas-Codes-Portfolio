

import { motion } from "framer-motion";
import { fadeUp } from "../../Animations/variant.js";
import { offerings } from "./ServiceData.jsx";

const Services = () => {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="skills"
      className="w-full px-4 pb-16 sm:px-6 lg:px-8 md:pt-28 xl:px-0"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-(--primary) text-sm font-medium uppercase tracking-widest">
            What I Offer
          </p>

          <h2 className="text-(--text) mt-3 text-3xl font-bold md:text-4xl">
            Explore My Offerings
          </h2>

          <p className="text-(--text-secondary) mx-auto mt-4 max-w-2xl">
            Building modern, scalable, and user-friendly web applications with clean architecture and UX.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings?.map((offer) => (
            <div
              key={offer.id}
              className="group bg-(--glass) border-(--border) hover:border-(--primary)/40 rounded-2xl border p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="bg-(--primary)/10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                <img
                  src={offer.img}
                  alt={offer.name}
                  className="h-7 w-7 object-contain"
                />
              </div>

              <h3 className="text-(--text) mb-3 text-lg font-semibold">
                {offer.name}
              </h3>

              <p className="text-(--text-secondary) text-sm leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;