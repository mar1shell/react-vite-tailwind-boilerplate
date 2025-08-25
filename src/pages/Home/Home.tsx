import Hero from "../../components/Hero/Hero";
import ThemeToggle from "../../components/ThemeToggle";
import TechStack from "../../components/TechStack/TechStack";
import GettingStarted from "../../components/GettingStarted/GettingStarted";
import Features from "../../components/Features/Features";

function Home() {
  return (
    <>
      <ThemeToggle />
      <Hero />
      <Features />
      <TechStack />
      <GettingStarted />
    </>
  );
}

export default Home;
