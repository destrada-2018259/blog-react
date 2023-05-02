import { AboutMe } from "./components/AboutMe"
import { Footer } from "./components/Footer"
import { MyProjects } from "./components/MyProjects"
import { NavigationBar } from "./components/NavigationBar"


export const App = () => {
  return (
    <>
    <NavigationBar />
    <AboutMe />
    <MyProjects />
    <Footer />
    </>
  )
}
