import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import Movie from './pages/movie/movie'

function App() {

  return (
    <>
      

      <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/movie-inner' element={<Movie />}/>
      </Routes>
    </>
  )
}

export default App