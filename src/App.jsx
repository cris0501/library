import React, {useEffect, useState} from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

import Home from './views/Home'
import View from './views/View'
import Login from './views/Login'
import Register from './views/Register'
import Catalog from './views/Catalog';

import './assets/styles/App.css'

const App = () => {
  const location = useLocation()
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if ( ['/login', '/register','/view'].includes(location.pathname) ) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  }, [location.pathname]);
  
  return (
    <div>
      <nav className={`flex justify-around items-center text-xl p-5 ${isHidden ? 'hidden' : ''}`}>
        <div className="flex justify-around items-center w-1/3">
          <Link to="/"> <i className='mr-2 icon-home'></i> <p className='hidden lg:inline'> Inicio </p> </Link>
          <Link to="/catalog"> <i className='mr-2 icon-library'></i> <p className='hidden lg:inline'> Catalogo </p> </Link>
        </div>
        <div>
          <Link to="/login"> <i className='mr-2 icon-user'></i> Iniciar </Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/view" element={<View />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
