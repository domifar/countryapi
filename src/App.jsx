import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Locations from './components/Locations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Locations />} />
        </Route>
      </Routes>
    </BrowserRouter>
)
}

export default App