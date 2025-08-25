import { technologies } from "../../lib/data";

function TechStack() {
  return (
    <section className="bg-white px-6 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Carefully selected tools for the best developer experience
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech) => (
            <span
              key={tech.name}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-medium shadow-md ${tech.color} transition-transform duration-200 hover:scale-105`}
            >
              {tech.icon}
              <span className="text-white">{tech.name}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
