
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, scaleIn } from "../../Animations/Animation.js";
import { AboutMe } from "./AboutData.jsx";

const About = () => {

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      id="about"
      className="w-full lg:w-1/2 flex items-stretch justify-center md:justify-start px-0 md:pt-28 pb-0"
    >
      <div className="w-full h-full bg-(--bg-secondary) border border-(--border) rounded-2xl p-8 md:p-10 shadow-sm">
        <div className="mb-8">
          <h1 className="text-sm text-(--text-secondary) mt-1">About Me</h1>

          <p className="text-2xl font-bold tracking-tight text-(--text)">
            Get to Know Me
          </p>

          <div className="h-0.5 w-8 bg-indigo-500 mt-3 rounded-full" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-6"
        >
          {AboutMe?.map((item) => (
            <motion.div
              key={item.id}
              variants={scaleIn}
              className="flex items-start gap-4 group"
            >
              <div className="shrink-0 w-10 h-10 rounded-xl bg-(--primary)/10 flex items-center justify-center p-2.5 transition-colors group-hover:bg-(--primary)/20">
                <img
                  className="w-full h-full object-contain"
                  src={item.image}
                  alt="icon"
                />
              </div>

              <p className="text-(--text-secondary) text-sm md:text-base leading-relaxed pt-1.5">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
