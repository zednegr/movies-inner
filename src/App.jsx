import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import MoviesInner from './components/movies_inner/movies_inner'

function App() {

  return (
    <>
      <Header />
      <MoviesInner />
    </>
  )
}

export default App