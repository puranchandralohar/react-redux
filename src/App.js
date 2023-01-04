import { Route, Routes } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { Home } from './pages/Home';

import './App.css';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/cart' element={<Cart/> } />
    </Routes> 
    </>
  );
}

export default App;
