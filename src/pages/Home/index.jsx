import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Link } from 'react-router'

import './home.css'

export function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get('/movie/now_playing', {
        params: {
          api_key: '486cf28af09bfe05eae35b3756702a16',
          language: 'pt-BR',
          page: '1'
        }
      })
      setMovies(response.data.results.slice(0, 10))
    }
    loadMovies()
  }, [])

  return (
    <div className='container'>
      {movies.map((movie) => (
        <article key={movie.id}>
          <strong className='title'>{movie.title}</strong>
          <img className='image' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
          <Link className='btn-access' to={`/movies/${movie.id}`}>Acessar</Link>
        </article>
      ))}
    </div>
  )
}