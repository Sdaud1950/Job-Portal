import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import JobDetails from './Pages/joblistings';
import Login from './Pages/Login';
import Register from './Pages/Register';
import NavBar from './Component/NavBar';
import PageNotFound from './Pages/PageNotFound';
function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path='/job' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/job/:id' element={<JobDetails/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='Register' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>

      </Routes>

    </Router>
  )
}

export default App
