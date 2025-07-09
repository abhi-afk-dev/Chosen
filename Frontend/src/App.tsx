import { Routes, Route } from "react-router-dom"
import WB from "./pages/ws"
import RSELECT from "./pages/rselect"
import PYTHONROADMAP from "./pages/pythonroadmap"
import PYTHONQUEST from "./pages/questeditor"
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<WB/>}/>
      <Route path="/select" element={<RSELECT/>}/>
      <Route path="/select/python/roadmap" element={<PYTHONROADMAP/>}/>
      <Route path="/select/python/quest" element={<PYTHONQUEST/>}/>
    </Routes>

  )
}

export default App
