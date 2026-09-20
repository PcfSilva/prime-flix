import { Link } from "react-router"

export function Header() {
  return (
    <header>
      <h1 className="logo">
        <Link to="/">Prime Flix</Link>
      </h1>
      <Link className="favorites" to="/favorites">Favoritos</Link>
    </header>
  )
}