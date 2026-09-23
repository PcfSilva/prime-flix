import { useEffect, useState } from "react"
import { Link } from "react-router"

import "./favorites.css"

export function Favorites() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const myList = localStorage.getItem("@saveMovies")
    setMovies(JSON.parse(myList))
  }, [])

  return (
    <div className="my-movies">
      <ul>
        {movies.map((movie) =>
          <li key={movie.id}>
            <span>{movie.title}</span>
            <div>
              <Link to={`/movies/${movie.id}`}>Ver detalhes</Link>
              <button>Excluir</button>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}