import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import MoviesInner from "./components/movies_inner/movies_inner"
import Create from './pages/create/create'
import Navbar from './components/navbar/navbar'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import MoviesEdit from './components/movies_edit/movies_edit'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie-inner/:movieId' element={<MoviesInner />} />
        <Route path='/create' element={<Create />} />
        <Route path='/movies_edit' element={<MoviesEdit />} />
      </Routes>
    </>
  )
}

export default App