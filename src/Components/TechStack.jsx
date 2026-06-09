import JsIcon from "../assets/TechStackImgs/js.png";
import htmlIcon from "../assets/TechStackImgs/html.ico";
import CssIcon from "../assets/TechStackImgs/css.png";
import ReactIcon from "../assets/TechStackImgs/react.png";
import NextJsIcon from "../assets/TechStackImgs/Nextjs.avif";
import TailwindIcon from "../assets/TechStackImgs/tailwind.png";
import GitIcon from "../assets/TechStackImgs/git.png";
import GitHubIcon from "../assets/TechStackImgs/github.png";
import VsCodeIcon from "../assets/TechStackImgs/vscode.png";

const techs = [
  {
    name: "Languages",
    techIcons: JsIcon,
  },
  {
    name: "Frontend",
    techIcons: [htmlIcon, CssIcon, ReactIcon, NextJsIcon, TailwindIcon],
  },
  {
    name: "Tools",
    techIcons: [GitIcon, GitHubIcon, VsCodeIcon],
  },
];

const TechStack = () => {
  return (
    <div className="w-full lg:w-1/2 flex items-stretch justify-center md:justify-start px-0 py-0">
      <div className="w-full h-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-2xl p-8 md:p-10 shadow-sm">
        <div className="mb-8">
          <h1 className="text-sm font-medium uppercase tracking-wider text-[var(--text-secondary)]">
            Tech stack
          </h1>
          <p className="text-2xl font-bold tracking-tight text-[var(--text)] mt-1">
            Technologies I Use
          </p>
          <div className="h-0.5 w-8 bg-indigo-500 mt-3 rounded-full" />
        </div>

        <div className="space-y-6">
          {techs.map((tech, i) => {
            const iconsArray = [tech.techIcons].flat();

            return (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border)] pb-5 last:border-0 last:pb-0 gap-4"
              >
                <p className="text-sm font-semibold text-[var(--text-secondary)] sm:w-1/4">
                  {tech.name}
                </p>

                <div className="flex flex-wrap gap-3 sm:w-3/4">
                  {iconsArray.map((icon, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-xl border border-[var(--glass-border)] bg-[var(--glass)] backdrop-blur-2xl flex items-center justify-center p-2.5 shadow-sm hover:scale-105 transition-transform duration-200"
                    >
                      <img
                        src={icon}
                        alt={`${tech.name} icon`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
