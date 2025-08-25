import { features } from "../../lib/data";

function Features() {
  return (
    <section className="bg-gray-50 px-6 py-20 dark:bg-gray-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Everything You Need to Get Started
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 dark:text-gray-300">
            A comprehensive boilerplate with all the essential features and
            tools for modern React development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group transform rounded-2xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900"
            >
              <div className="mb-6 w-fit rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 transition-transform duration-300 group-hover:rotate-6">
                <feature.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="leading-relaxed text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
