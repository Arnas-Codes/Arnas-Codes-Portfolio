import reactIcon from "../assets/ServicesIcons/ReactIcon.png";
import responsiveIcon from "../assets/ServicesIcons/responsive.png";
import apiIcon from "../assets/ServicesIcons/apiIcon.png";
import componentIcon from "../assets/ServicesIcons/componentIcon.png";
import performanceIcon from "../assets/ServicesIcons/permomanceIcon.png";
import stateIcon from "../assets/ServicesIcons/stateIcon.png";

const offerings = [
  {
    id: 1,
    img: reactIcon,
    name: "Single Page Applications",
    description:
      "Fast, dynamic, and seamless web applications built with React.",
  },
  {
    id: 2,
    img: responsiveIcon,
    name: "Responsive Design",
    description:
      "Mobile-first, accessible, and beautiful experiences across all devices.",
  },
  {
    id: 3,
    img: componentIcon,
    name: "Component Development",
    description:
      "Reusable, modular, and scalable React components for maintainable codebases.",
  },
  {
    id: 4,
    img: apiIcon,
    name: "API Integration",
    description:
      "REST APIs, async data fetching, and real-time application updates.",
  },
  {
    id: 5,
    img: stateIcon,
    name: "State Management",
    description:
      "Managing complex application state using Redux and Context API.",
  },
  {
    id: 6,
    img: performanceIcon,
    name: "Performance Optimization",
    description:
      "Optimized for speed, SEO, accessibility, and Core Web Vitals.",
  },
];

const Services = () => {
  return (
    <section className="w-full px-4 pb-16 sm:px-6 lg:px-8 xl:px-0">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="text-(--primary) text-sm font-medium uppercase tracking-widest">
            What I Offer
          </p>

          <h2 className="text-(--text) mt-3 text-3xl font-bold md:text-4xl">
            Explore My Offerings
          </h2>

          <p className="text-(--text-secondary) mx-auto mt-4 max-w-2xl">
            Building modern, scalable, and user-friendly web applications with
            clean architecture and excellent user experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offer) => (
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
    </section>
  );
};

export default Services;