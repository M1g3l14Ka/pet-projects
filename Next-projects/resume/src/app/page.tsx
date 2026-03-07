import HomePage from "@/components/HomePage";
import ProjectsPage from "@/components/ProjectsPage";
import WorkPage from "@/components/WorkPage";
import FooterPage from "@/components/FooterPage";

import { headerTitleBtns, headerTiles, hireBtns, petTimelineData, workTimelineData } from "@/data/data";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-sans bg-[#050505]">

      <section>
        <HomePage
          headerTitleBtns={headerTitleBtns}
          headerTiles={headerTiles}
          hireBtns={hireBtns}
        />
      </section>


      <section id="Pet">
        <ProjectsPage
          petTimelineData={petTimelineData}
        />
      </section>

      <section id="Work">
        <WorkPage
          workTimelineData={workTimelineData}
        />
      </section>

      <FooterPage/>


    </main>
  );
}
