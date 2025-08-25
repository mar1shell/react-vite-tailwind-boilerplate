import { Moon, Sun } from "lucide-react";
import useDarkMode from "../../hooks/useDarkMode/useDarkMode";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="fixed top-6 right-6 z-50 cursor-pointer rounded-full border border-gray-200 bg-white p-3 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  );
}

export default ThemeToggle;
