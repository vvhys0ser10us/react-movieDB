import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })

  const fetchMovie = async (url) => {
    setLoading(true)
    const res = await fetch(url)
    const data = await res.json()
    if (data.Response === 'False') {
      setError({ show: true, msg: data.Error })
      setLoading(false)
    } else {
      setMovie(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    const url = `${API_ENDPOINT}&i=${id}`
    fetchMovie(url)
  }, [id])

  if (loading) {
    return <div className="loading"></div>
  }

  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to homepage
        </Link>
      </div>
    )
  }

  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link to="/" className="btn">
          back to homepage
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
