import { Navigation } from "@/components/navigations/Navigation";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { TitleBar } from "@/components/sections/TitleBar";

export default function Home() {

  return (
    <div className="px-60">
      <Navigation/>
      <TitleBar/>
      <Hero/>
      <About/>
      <Experience/>
    </div>
  );
}
