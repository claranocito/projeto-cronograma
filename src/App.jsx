import { Banner } from "./components/Banner"
import { Header } from "./components/Header"
import "./assets/global.css"
import { Benefits } from "./components/Benefits"
import { Steps } from "./components/Steps"


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Benefits />
      <Steps />
    </div>
  )
}

export default App
