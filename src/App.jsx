import { Banner } from "./components/Banner"
import { Header } from "./components/Header"
import { Benefits } from "./components/Benefits"
import { Steps } from "./components/Steps"
import { Timeline } from "./components/Timeline"
import { Products } from "./components/Products"
import "./assets/global.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Steps />
      <Timeline />
      <Products />
    </div>
  )
}

export default App
