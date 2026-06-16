import CodingIcon from "../assets/AboutIcons/coding.png";
import TrackIcon from "../assets/AboutIcons/tracking.png";
import ProfileIcon from "../assets/AboutIcons/user.png";

import { motion } from "framer-motion";
import { fadeLeft } from "../Animations/variant.js";

const AboutMe = [
  {
    id: 1,
    image: ProfileIcon,
    text: "Hi, I'm Arnas, a Frontend Developer and a college student.",
  },
  {
    id: 2,
    image: CodingIcon,
    text: "Aspiring Full Stack Developer and AI Engineer, focused on the MERN stack.",
  },
  {
    id: 3,
    image: TrackIcon,
    text: "Currently building modern, responsive, interactive websites using React and Tailwind CSS.",
  },
];

const About = () => {
  return (
    <motion.section
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      id="about"
      className="w-full lg:w-1/2 flex items-stretch justify-center md:justify-start px-0 md:pt-28 pb-0"
    >
      <div className="w-full h-full bg-(--bg-secondary) border border-(--border) rounded-2xl p-8 md:p-10 shadow-sm">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-sm text-(--text-secondary) mt-1">About Me</h1>

          <p className="text-2xl font-bold tracking-tight text-(--text)">
            Get to Know Me
          </p>

          <div className="h-0.5 w-8 bg-indigo-500 mt-3 rounded-full" />
        </div>

        {/* Contents */}
        <div className="space-y-6">
          {AboutMe?.map((item) => (
            <div key={item.id} className="flex items-start gap-4 group">
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
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
