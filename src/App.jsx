import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import MoviesInner from "./components/movies_inner/movies_inner"
import Modal from './components/modal/modal'
import Create from './pages/create/create'

function App() {

  return (
    <>
    <Modal />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie-inner/:movieId' element={<MoviesInner />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </>
  )
}

export default App