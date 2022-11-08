import { Banner } from "./components/Banner"
import { Header } from "./components/Header"
import { Benefits } from "./components/Benefits"
import { Steps } from "./components/Steps"
import { Timeline } from "./components/Timeline"
import { Products } from "./components/Products"
import { Contact } from "./components/Contact"
import "./assets/global.css"
import { Guide } from "./components/Guide"



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Steps />
      <Timeline />
      <Products />
      <Contact />
    </div>
  )
}

export default App
