import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { MyProjects } from "./components/MyProjects"
import { NavigationBar } from "./components/NavigationBar"
import {MyKnowledgeHero} from "./components/MyKnowledgeHero"
import { MyKnowledgeCards } from "./components/MyKnowledgeCards"

export const App = () => {
  return (
    <>
    <NavigationBar />
    <AboutMe />
    <MyKnowledgeHero/>
    <MyKnowledgeCards/>
    <MyProjects />
    <Footer />
    </>
  )
}
