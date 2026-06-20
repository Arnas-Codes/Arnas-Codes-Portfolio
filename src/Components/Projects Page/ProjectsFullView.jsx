import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectData } from "./ProjectsData.jsx";
import { fadeUp, stagger } from "../../Animations/variant.js";
import Button from "../Small Sections/Button.jsx";

const ProjectsFullView = () => {
  return (
    <motion.div
      initial="opacity-0"
      animate="opacity-100"
      className="min-h-screen bg-(--bg) py-20 px-6"
    >
      <div className="mx-auto max-w-7xl">
        {/* Navigation Breadcrumb */}

        <Button />

        {/* Full View Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-(--text) md:text-5xl">
            All Projects
          </h1>
          <p className="mt-3 text-sm text-(--text-secondary)">
            A complete archive of everything I've built.
          </p>
          <div className="bg-(--primary) mt-4 h-1 w-24 rounded-full" />
        </div>

        {/* Entire Data Array Grid Rendering */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.02 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3"
        >
          {projectData?.map((project) => (
            <article
              key={project.id}
              className="project-card group flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--bg-secondary)/80 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary)"
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
            </article>
          ))}
        </motion.div>
      </div>
      <div className="flex justify-center mt-20">
     
        <Button />
      </div>
    </motion.div>
  );
};

export default ProjectsFullView;
