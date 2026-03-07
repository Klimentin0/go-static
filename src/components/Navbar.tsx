import { Link, useLocation } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (path: string) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">APP</Link>
      </div>

      <div
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li className={isActive("/news")}>
          <Link to="/news">Новости</Link>
        </li>

        <li className={isActive("/about")}>
          <Link to="/about">О нас</Link>
        </li>

        <li className={isActive("/contact")}>
          <Link to="/contact">Контакты</Link>
        </li>
      </ul>
    </nav>
  )
}
