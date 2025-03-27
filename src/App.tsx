import { useEffect, useState } from "react"
import AboutUs from "./components/aboutUs"
import Contact from "./components/contact"
import Footer from "./components/footer"
import Home from "./components/home"
import Navbar from "./components/navbar"
import Services from "./components/ourServices"
import { SelectedPage } from "./shared/types"

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div>
      <Navbar
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <AboutUs setSelectedPage={setSelectedPage}/>
      <Services setSelectedPage={setSelectedPage}/>
      <Contact setSelectedPage={setSelectedPage}/>
      <Footer/>
    </div>
  )
}

export default App
