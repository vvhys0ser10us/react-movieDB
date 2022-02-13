import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import Movies from './Movies'
import Movie from './SingleMovie'

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/movies/:id" element={<Movie />}></Route>
    </Routes>
  )
}

export default App
