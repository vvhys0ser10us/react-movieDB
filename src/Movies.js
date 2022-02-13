import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
import { fireEvent } from '@testing-library/react'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, loading } = useGlobalContext()
  console.log(movies)

  if (loading) {
    return <div className="loading"></div>
  }
  return <h2>movies component</h2>
}

export default Movies
