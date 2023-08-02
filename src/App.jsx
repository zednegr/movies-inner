import './App.css'
import { Routes, Route } from "react-router-dom"
import Header from './components/header/header'
import MoviesInner from "./components/movies_inner/movies_inner"
import Create from './pages/create/create'
import Navbar from './components/navbar/navbar'
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/movie-inner/:movieId' element={<MoviesInner />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </>
  )
}

export default App