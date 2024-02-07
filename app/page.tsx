import Intro from "./components/intro";
import Separator from "./components/separator";
import About from "./components/about";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Separator />
      <About />
      <Separator />
      <Skills />
      <Separator />
      <Projects />
    </main>
  );
}
