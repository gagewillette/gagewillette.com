import Background from "./components/background";
import Navbar from "./components/navbar";
import Hero from "./components/sections/hero";
import About from "./components/sections/about";

export default function Home() {
  return (
    <main className="min-h-scren bg-background text-foreground">
      <Background />
      <Navbar />
      <Hero />
      <About />


    </main>
  );
}
