import Navigation from "./view/Navigation";
import Sections from "./view/Sections";
import "./App.css"
import "./assets/styles/utilities.css"
export default function App() {
 
  return (
    <>
      <header>
        <nav>
          <Navigation />
        </nav>
      </header>
      <main>
          <Sections />
      </main>
      <footer> </footer>
    </>
  )
}