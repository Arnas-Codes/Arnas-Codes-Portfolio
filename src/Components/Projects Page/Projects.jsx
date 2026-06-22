import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer, scaleIn } from "../../Animations/Animation.js";
import { projectData } from "./ProjectsData.jsx";

const Projects = () => {
  const homePageProjects = projectData?.slice(0, 6);

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      id="projects"
      className="mx-auto w-full max-w-7xl px-6 pt-20"
    >
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <span className="text-sm uppercase tracking-widest text-(--text-secondary)">
            Projects
          </span>
          <h2 className="mt-2 text-4xl font-bold text-(--text) md:text-5xl">
            Recent Work
          </h2>
          <div className="bg-(--primary) mt-4 h-1 w-16 rounded-full" />
        </div>

        <Link
          to="/projects"
          className="bg-(--glass) border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) w-fit rounded-xl border px-5 py-3 backdrop-blur-md transition-all duration-300 block text-center font-medium"
        >
          View All Projects
        </Link>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
      >
        {homePageProjects?.map((project) => (
          <motion.article
            key={project.id}
            variants={scaleIn}
            className="project-card group flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--bg-secondary)/80 transition-all duration-300"
          >
            <div className="aspect-video overflow-hidden border-b border-(--border)">
              <img
                src={project.img}
                alt={project.projectName}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-1 flex-col gap-5 p-6">
              <div>
                <h3 className="text-xl font-bold text-(--text)">
                  {project.projectName}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                  {project.projectDes}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.usedTool?.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-(--border) bg-(--bg-secondary) px-3 py-1 text-xs text-(--text-secondary)"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex gap-3 pt-2">
                <a
                  href={project.projectsRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center rounded-xl border border-(--border) bg-white/5 px-4 py-2.5 text-sm font-medium text-(--text) backdrop-blur-md transition-all duration-300 hover:border-(--primary)/40 hover:bg-white/10"
                >
                  Code
                </a>
                <a
                  href={project.liveSite}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center rounded-xl border border-(--primary)/20 bg-(--primary)/10 px-4 py-2.5 text-sm font-medium text-(--primary) backdrop-blur-md transition-all duration-300 hover:border-(--primary)/40 hover:bg-(--primary)/15"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
