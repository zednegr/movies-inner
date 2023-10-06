import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import MoviesInner from "./components/movies_inner/movies_inner"
import Create from './pages/create/create'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import MoviesEdit from './components/movies_edit/movies_edit'
import Navbar from './components/navbar/navbar'


function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie-inner/:movieId' element={<MoviesInner />} />
        <Route path='/create' element={<Create />} />
        <Route path='/movies_edit' element={<MoviesEdit />} />
      </Routes>

      fsdfsa
    </>
  )
}

export default App