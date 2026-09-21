import { useEffect, useState } from "react"
import { useParams } from "react-router"
import api from '../../services/api'

import "./movies.css"

export function Movies() {
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    async function loadMovies() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '486cf28af09bfe05eae35b3756702a16',
          language: 'pt-BR'
        }
      })
        .then((response) => {
          console.log(response.data)
          setMovie(response.data)
        })
    }

    loadMovies()
  }, [])
  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
      <h3>Sinópse</h3>
      <p>
        {movie.overview}
      </p>
      <strong>
        Avaliação: {movie.vote_average} / 10
      </strong>
    </div>
  )
}