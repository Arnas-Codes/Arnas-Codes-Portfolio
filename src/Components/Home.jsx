import ProfileImage from "../assets/ProfilePics/profile.png";

const Home = () => {
  return (
    <section
      id="home"
      className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-16 px-6 pt-28 md:flex-row"
    >
      {/* Left Content */}
      <div className="flex-1 text-center md:text-left">
        <span className="text-(--text-secondary) text-sm uppercase tracking-widest">
          Welcome
        </span>

        <h1 className="text-(--text) mt-3 text-5xl font-black leading-tight md:text-7xl">
          Hi, I'm{" "}
          <span className="from-(--primary) to-(--purple) block bg-linear-to-r bg-clip-text text-transparent">
            Arnas
          </span>
        </h1>

        <h2 className="text-(--primary) mt-4 text-2xl font-semibold md:text-3xl">
          Frontend Developer
        </h2>

        <p className="text-(--text-secondary) mx-auto mt-6 max-w-xl leading-relaxed md:mx-0">
          I build modern, responsive and high-performance web applications
          focused on exceptional user experiences using React, Tailwind CSS and
          modern frontend technologies.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <button className="bg-(--primary) rounded-xl px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105">
            View Projects
          </button>

          <button className="bg-(--glass) border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) rounded-xl border px-6 py-3 font-medium backdrop-blur-md transition-all duration-300">
            Contact Me
          </button>
        </div>
      </div>

      {/* Profile Image */}
      <div className="h-72 w-72 overflow-hidden rounded-full ring-4 ring-indigo-600 md:h-96 md:w-96">
        <img
          src={ProfileImage}
          alt="Arnas"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default Home;
