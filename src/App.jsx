import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import MoviesInner from "./components/movies_inner/movies_inner"

function App() {

  return (
    <>
      

      <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/movie-inner' element={<MoviesInner />}/>
      </Routes>
    </>
  )
}

export default App