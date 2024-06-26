import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"
import Root from "./components/Root"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route index element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/projects" element={<Projects />} />


    </Route>
  )
)
  return (
    <>
    <RouterProvider router={router} />
    <Footer />
    </>
  )
}

export default App
