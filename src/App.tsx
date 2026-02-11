import { Copyright } from "iconoir-react"
import "./App.css"
import AboutSection from "./view/AboutSection"
import ExperienceSection from "./view/ExperienceSection"
import HomeSection from "./view/HomeSection"
import RecentProjectSection from "./view/RecentProjectSection"
import TechStackSection from "./view/TechStackSection"
export default function App() {

  return (
    <>
      <main>
        <section>
          <HomeSection />
          <hr />
        </section>
        <section>
          <AboutSection />
          <hr />
        </section>
        <section>
          <ExperienceSection />
          <hr />
        </section>
           <section>
          <RecentProjectSection />
          <hr />
        </section>
       <section>
          <TechStackSection />
        </section> 
      </main>
      <footer>
        <hr/>
        <p>
          <Copyright />
          Jayvee Hidlao. All rights reserved.
        </p>
      </footer>
    </>
  )
}