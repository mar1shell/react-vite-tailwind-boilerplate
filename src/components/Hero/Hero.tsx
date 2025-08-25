import { Github, Zap, Code } from "lucide-react";

function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-6 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-8 flex justify-center">
          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 shadow-lg">
            <Code className="h-12 w-12 text-white" />
          </div>
        </div>

        <h1 className="mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-5xl font-bold text-transparent md:text-7xl dark:from-blue-400 dark:to-indigo-400">
          React Vite Tailwind
        </h1>

        <p className="mb-4 text-xl text-gray-600 md:text-2xl dark:text-gray-300">
          TypeScript Boilerplate
        </p>

        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-500 dark:text-gray-400">
          A structured and scalable boilerplate for building modern web
          applications with React, Vite, TypeScript, and Tailwind CSS. Includes
          dark mode, utilities, and best practices for maintainable frontend
          development.
        </p>

        <div className="mb-12 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="https://github.com/mar1shell/react-vite-tailwind-boilerplate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex transform items-center gap-2 rounded-lg bg-gray-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:shadow-xl dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
          >
            <Github className="h-5 w-5" />
            View on GitHub
          </a>

          <a
            href="#getting-started"
            className="inline-flex transform items-center gap-2 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl"
          >
            <Zap className="h-5 w-5" />
            Get Started
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            ⚡️ Lightning Fast
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            🎨 Beautiful UI
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            🌙 Dark Mode
          </span>
          <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
            🧩 Scalable
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
