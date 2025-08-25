/**
 * Main layout component
 * Wraps all page content
 */

import Footer from "../Footer/Footer";

function Main({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 transition-colors duration-300 dark:bg-gray-900">
      {children}
      <Footer />
    </div>
  );
}

export default Main;
