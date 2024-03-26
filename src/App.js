import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Charts from './Components/Charts';
import TodoApi from './Components/TodoApi';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/todo' element={<TodoApi/>}/>
        <Route path='/charts' element={<Charts/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

