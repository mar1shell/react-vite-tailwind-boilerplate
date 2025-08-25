import { Copy, Rocket, Terminal } from "lucide-react";
import { steps } from "../../lib/data";
import { copyToClipboard } from "../../lib/utils";

function GettingStarted() {
  return (
    <section
      id="getting-started"
      className="bg-white px-6 py-20 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 w-fit rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 p-4">
            <Rocket className="h-8 w-8 text-white" />
          </div>
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Follow these simple steps to start building your next project
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg sm:p-8 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-6">
                <div className="mb-4 flex-shrink-0 sm:mb-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-lg font-bold text-white sm:h-12 sm:w-12">
                    {index + 1}
                  </div>
                </div>

                <div className="w-full flex-grow">
                  <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mb-4 text-base text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>

                  <div className="relative">
                    <div className="flex flex-col items-start gap-2 overflow-x-auto rounded-xl bg-gray-900 p-3 font-mono text-sm text-green-400 sm:flex-row sm:items-center sm:gap-3 sm:p-4 dark:bg-gray-950">
                      <Terminal className="mb-2 h-5 w-5 flex-shrink-0 sm:mb-0" />
                      <code className="flex-grow break-all">
                        {step.command}
                      </code>
                      <button
                        onClick={() => copyToClipboard(step.command)}
                        className="group/copy flex-shrink-0 rounded-lg p-2 transition-colors duration-200 hover:bg-gray-800"
                        aria-label="Copy command"
                      >
                        <Copy className="h-4 w-4 text-gray-400 transition-colors duration-200 group-hover/copy:text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/mar1shell/react-vite-tailwind-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl"
          >
            View Full Documentation
            <Rocket className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default GettingStarted;
