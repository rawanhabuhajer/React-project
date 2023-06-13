import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
    </Routes>
  );
}

export default App;
