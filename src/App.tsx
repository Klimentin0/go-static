import { Routes, Route } from "react-router"
import './App.css'
import Menu from "./components/Menu.tsx"
import Home from "./components/pages/home/Home.tsx"
import News from "./components/pages/news/News.tsx"

function App() {

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </>
  )
}

export default App
