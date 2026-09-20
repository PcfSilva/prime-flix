import { Link } from "react-router"

import "./header.css"

export function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Prime Flix</Link>
      </h1>
      <Link className="favorites" to="/favorites">Fav<span>❤️</span>ritos</Link>
    </header>
  )
}