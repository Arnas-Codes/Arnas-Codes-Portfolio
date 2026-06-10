import LandingPageFM from "../assets/projectImages/Landing-Page-FM.png";
import BankPage from "../assets/projectImages/Bank-page.png";
import JobListingApp from "../assets/projectImages/Job-Listing-App.png";
import TodoApp from "../assets/projectImages/Todo-App.png";
import Spacetourismwebsite from "../assets/projectImages/Space-tourism-website.png";
import RESTCountriesAPI from "../assets/projectImages/REST-Countries-APIREST-Countries-API.png";
import Multistepform from "../assets/projectImages/image copy 6.png";

const projectData = [
  {
    id: 1,
    img: LandingPageFM,
    projectName: "Landing Page FM",
    projectDes:
      "A beautiful and responsive landing page challenge built from Frontend Mentor designs.",
    usedTool: ["React", "Tailwind CSS"],
    projectsRepo: "https://github.com/Arnas-Codes/Landing-Page-FM.git",
    liveSite: "https://arnas-codes.github.io/Landing-Page-FM/",
  },
  {
    id: 2,
    img: BankPage,
    projectName: "Bank Page",
    projectDes:
      "Modern digital banking interface with a clean design and responsive layout.",
    usedTool: ["React", "Tailwind CSS"],
    projectsRepo: "https://github.com/Arnas-Codes/Bank-page.git",
    liveSite: "https://arnas-codes.github.io/Bank-page/",
  },
  {
    id: 3,
    img: JobListingApp,
    projectName: "Job Listing App",
    projectDes:
      "Interactive job board featuring dynamic filtering and responsive layouts.",
    usedTool: ["React", "Tailwind CSS"],
    projectsRepo: "https://github.com/Arnas-Codes/Job-Listing-App.git",
    liveSite: "https://arnas-codes.github.io/Job-Listing-App/",
  },
  {
    id: 4,
    img: TodoApp,
    projectName: "Todo App",
    projectDes:
      "Feature-rich todo application with dark mode support and smooth animations.",
    usedTool: ["React", "Tailwind CSS", "Framer Motion"],
    projectsRepo: "https://github.com/Arnas-Codes/Todo-App.git",
    liveSite: "https://arnas-codes.github.io/Todo-App/",
  },
  {
    id: 5,
    img: Spacetourismwebsite,
    projectName: "Space Tourism Website",
    projectDes:
      "Multi-page educational space tourism platform with responsive navigation.",
    usedTool: ["React", "Tailwind CSS"],
    projectsRepo: "https://github.com/Arnas-Codes/Space-tourism-website.git",
    liveSite: "https://arnas-codes.github.io/Space-tourism-website/",
  },
  {
    id: 6,
    img: RESTCountriesAPI,
    projectName: "REST Countries API",
    projectDes:
      "Country explorer using API data with search, filtering, and region-based browsing.",
    usedTool: ["React", "REST API", "Tailwind CSS"],
    projectsRepo: "https://github.com/Arnas-Codes/REST-Countries-API.git",
    liveSite: "https://arnas-codes.github.io/REST-Countries-API/",
  },
  {
    id: 7,
    img: Multistepform,
    projectName: "Multi Step Form",
    projectDes:
      "Advanced multi-step form experience with validation and state management.",
    usedTool: ["React", "Tailwind CSS"],
    projectsRepo: "https://github.com/Arnas-Codes/Multi-step-form.git",
    liveSite: "https://arnas-codes.github.io/Multi-step-form/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 pt-20">
      {/* Section Header */}
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

        <button className="bg-(--glass) border-(--border) text-(--text) hover:border-(--primary) hover:text-(--primary) w-fit rounded-xl border px-5 py-3 backdrop-blur-md transition-all duration-300">
          View All Projects
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projectData.map((project) => (
          <article
            key={project.id}
            className="project-card group flex flex-col overflow-hidden rounded-xl border border-(--border) bg-(--bg-secondary)/80 transition-all duration-300 hover:-translate-y-2 hover:border-(--primary)"
          >
            {/* Project Image */}
            <div className="aspect-video overflow-hidden border-b border-(--border)">
              <img
                src={project.img}
                alt={project.projectName}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-5 p-6">
              <div>
                <h3 className="text-xl font-bold text-(--text)">
                  {project.projectName}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-(--text-secondary)">
                  {project.projectDes}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.usedTool.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-(--border) bg-(--bg-secondary) px-3 py-1 text-xs text-(--text-secondary)"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Buttons */}
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
      </div>
    </section>
  );
};

export default Projects;
