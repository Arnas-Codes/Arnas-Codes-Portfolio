import { motion } from "framer-motion";
import { fadeRight } from "../../Animations/variant.js";

const TechStack = () => {
  return (
    <motion.div
      variants={fadeRight}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
      className="w-full lg:w-1/2 flex items-stretch justify-center md:justify-start md:pt-28 px-0 py-0"
    >
      <div className="w-full h-full bg-(--bg-secondary) border border-(--border) rounded-2xl p-8 md:p-10 shadow-sm">
        <div className="mb-8">
          <h1 className="text-sm font-medium uppercase tracking-wider text-(--text-secondary)">
            Tech stack
          </h1>

          <p className="text-2xl font-bold tracking-tight text-(--text) mt-1">
            Technologies I Use
          </p>

          <div className="h-0.5 w-8 bg-indigo-500 mt-3 rounded-full" />
        </div>

        <div className="space-y-6">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-(--border) pb-5 last:border-0 last:pb-0 gap-4"
            >
              <p className="text-sm font-semibold text-(--text-secondary) sm:w-1/4">
                {tech.name}
              </p>

              <div className="flex flex-wrap gap-3 sm:w-3/4">
                {tech.techIcons.map((icon, index) => {
                  return (
                    <div
                      key={`${tech.name}-${index}`}
                      className="group flex h-12 w-12 items-center justify-center rounded-xl border border-(--border) bg-(--bg-secondary)/90 p-2.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <img
                        src={icon.src}
                        alt={icon.name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
