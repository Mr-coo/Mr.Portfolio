import { Navigation } from "@/components/navigations/Navigation";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { TitleBar } from "@/components/sections/TitleBar";

export default function Home() {

  return (
    <div className="px-80">
      <Navigation/>
      <TitleBar/>
      <Hero/>
      <Experience/>
    </div>
  );
}
