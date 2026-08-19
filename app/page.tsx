import { Navigation } from "@/components/navigations/Navigation";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { SocialRail } from "@/components/socials/SocialRail";
import { TitleBar } from "@/components/sections/TitleBar";

export default function Home() {

  return (
    <div className="overflow-x-clip px-5 sm:px-8 md:px-16 lg:px-24 xl:px-40 2xl:px-60">
      <Navigation/>
      <TitleBar/>
      <SocialRail/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
}
