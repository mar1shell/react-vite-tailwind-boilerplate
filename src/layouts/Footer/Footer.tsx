import { Heart, Code } from "lucide-react";
import { socialMediaIcons2 } from "../../lib/data";

function Footer() {
  return (
    <footer className="px-6 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <div className="mx-auto mb-6 w-fit rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4">
            <Code className="h-8 w-8 text-white" />
          </div>
          <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            Let's Build Something Amazing
          </h3>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Ready to start your next project? Get the boilerplate and begin
            building modern web applications today.
          </p>
        </div>

        <div className="mb-16 flex justify-center gap-6">
          {socialMediaIcons2.map((social, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex"
            >
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative rounded-2xl border border-gray-200/50 bg-white/70 p-4 text-gray-600 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:rotate-3 active:scale-95 dark:border-slate-700/50 dark:bg-slate-800/70 dark:text-gray-400 ${social.color} ${social.bgColor}`}
              >
                <social.icon />
                <span className="sr-only">{social.label}</span>

                {/* Tooltip */}
                <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 transform rounded-lg bg-gray-900 px-3 py-1 text-xs text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-gray-900">
                  {social.label}
                </div>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-lg dark:border-gray-700 dark:bg-gray-800">
            <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              Made with <Heart className="h-4 w-4 text-red-500" /> by{" "}
              <a
                href="https://github.com/mar1shell"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-blue-600 transition-colors duration-300 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                mar1shell
              </a>
            </p>
          </div>

          <div className="flex justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
            <a
              href="https://github.com/mar1shell/react-vite-tailwind-boilerplate/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300"
            >
              MIT License
            </a>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <a
              href="https://github.com/mar1shell/react-vite-tailwind-boilerplate"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-gray-700 dark:hover:text-gray-300"
            >
              Source Code
            </a>
            <span className="text-gray-300 dark:text-gray-600">•</span>
            <span>© 2025 mar1shell</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
