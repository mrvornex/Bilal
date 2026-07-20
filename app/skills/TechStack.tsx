import TechItem from "../skills/TechItem";

const techStack = [
  { name: "Node.js", icon: "./images/nodejs-icon.svg" },
  { name: "Express.js", icon: "./images/expressjs-icon.svg" },
  { name: "React", icon: "./images/react-icon.svg" },
  { name: "Next.js", icon: "./images/next-icon.svg" },
  { name: "JavaScript", icon: "./images/javascript-icon.svg" },
  { name: "TypeScript", icon: "./images/typescript-icon.svg" },
  { name: "MongoDB", icon: "./images/mongodb-icon.svg" },
  { name: "Tailwind CSS", icon: "./images/tailwind-icon.svg" },
  { name: "HTML5", icon: "./images/html-icon.svg" },
  { name: "CSS3", icon: "./images/css-icon.svg" },
];

const TechStack = () => {
  return (
    <section className="mt-24">
      <h2 className="text-lg font-bold tracking-widest uppercase text-black mb-10">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {techStack.map((tech) => (
          <TechItem
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default TechStack;