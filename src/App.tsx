/**
 * Main application component
 * If using React Router, define routes here
 * And use different layouts from /layouts
 * and define Page components in /pages
 */

import Main from "./layouts/Main/Main";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Main>
      <Home />
    </Main>
  );
}

export default App;
