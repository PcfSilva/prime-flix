import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router"
import api from '../../services/api'
import { NotFound } from "../Not-found"

import "./movies.css"

export function Movies() {
  const [movie, setMovie] = useState({})
  const navigate = useNavigate()
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
          setMovie(response.data)
        })
        .catch((e) => {
          navigate("*", { replace: true })
          return
        })
    }

    loadMovies()
  }, [navigate, id])

  function saveMovies() {
    const myList = localStorage.getItem("@saveMovies")
    let saveMovies = JSON.parse(myList) || []
    const hasMovies = saveMovies.some((movies) => movies.id === movie.id)
    if (hasMovies) {
      alert("FILME JÁ EXISTE NA LISTA!")
      return
    }
    saveMovies.push(movie)
    alert("FILME ADICIONADO COM SUCESSO!")
    localStorage.setItem("@saveMovies", JSON.stringify(saveMovies))
  }

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

      <div className="btn-area">
        <button onClick={saveMovies}>Salvar</button>
        <Link target="blank" rel="external" to={`https://www.youtube.com/results?search_query=${movie.title} trailer`}>Trailer</Link>
      </div>
    </div>
  )
}