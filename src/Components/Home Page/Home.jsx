import ProfileImage from "../assets/ProfilePics/profile.png";

import { motion } from "framer-motion";
import { fadeUp, fadeRight } from "../../Animations/variant.js";

const Home = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pt-28 md:flex-row"
    >
      {/* Left Content */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="flex-1 text-center md:text-left"
      >
        <span className="text-(--text-secondary) text-sm uppercase tracking-widest">
          Welcome
        </span>

        <h1 className="text-(--text) mt-3 text-5xl font-black leading-tight md:text-7xl">
          Hi, I'm
          <span className="from-(--primary) to-(--purple) block bg-linear-to-r bg-clip-text text-transparent">
            Arnas
          </span>
        </h1>

        <h2 className="text-(--primary) mt-4 text-2xl font-semibold md:text-3xl">
          React Frontend Developer
        </h2>

        <p className="text-(--text-secondary) mx-auto mt-6 max-w-xl leading-relaxed md:mx-0">
          I build modern, responsive and high-performance web applications
          focused on exceptional user experiences using React, Tailwind CSS, and
          modern frontend technologies.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.45,
          }}
          className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary"
          >
            View Projects
          </motion.a>

          <a href="#contact">
            <button className="bg-(--glass) border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) rounded-xl border px-6 py-3 font-medium backdrop-blur-md transition-all duration-300">
              Contact Me
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        variants={fadeRight}
        initial="hidden"
        animate="visible"
        className="h-72 w-72 overflow-hidden rounded-full ring-4 ring-indigo-600 md:h-96 md:w-96"
      >
        <motion.img
          src={ProfileImage}
          alt="Arnas"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </section>
  );
};

export default Home;
