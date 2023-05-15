import logo from './logo.png';
import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import FloatingNav from './components/floatingNav';
import ProductInventory from './pages/Product Inventory/productInventory';
import moment from 'moment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainNav from './components/mainNav';
import Dashboard from './pages/Dashboard/dashboard';
import ShopProducts from './pages/Shop Products/shopProducts';
import Login from './pages/Login/login';
import { User } from './authenticator';

function App() {
  const [floatNavigation, isHidden] = useState(false);

  const UserObj = useContext(User).authenticated;

  useEffect(() => {

  }, [UserObj]);

  const handleCloseFloatNav = () => {
    isHidden(false);
  }

  const pageContent = () => {
    return (
      <>
        <MainNav />
        <main className='app-main'>
          <div className='user-panel'>
            <button className='user-panel-btn btn-less' type="button">
              <span className="material-symbols-outlined">
                shopping_basket
              </span>
              Order Basket
            </button>
            <button className='user=panel-btn btn-less' type="button" onClick={() => isHidden(true)}>
              <i className="fa-regular fa-user"></i>
              Admin
            </button>
            <FloatingNav visible={floatNavigation} closeFunc={handleCloseFloatNav} />
          </div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/productInventory" element={<ProductInventory />} />
            <Route path="/shopProducts" element={<ShopProducts />} />
          </Routes>
        </main>
      </>
    );
  }

  //console.log(moment().format("YYYYMMDDTHHmmss"));

  return (
    <div className="App">
      <BrowserRouter>
        {UserObj === true ? pageContent() : <Login />}
      </BrowserRouter>
    </div>
  );
}

export default App;
