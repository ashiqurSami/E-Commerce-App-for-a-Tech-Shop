import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/home-page.jsx"
import ProductByBrand from './pages/product-by-brand.jsx';
import ProductByCategory from './pages/product-by-category.jsx';
import ProductBykeyword from './pages/product-by-keyword.jsx';
import ProductDetails from './pages/product-details.jsx';
import LoginPage from "./pages/login-page.jsx";
import OTPPage from "./pages/otp-page.jsx";
import ProfilePage from "./pages/profile-page.jsx";



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/by-brand/:id" element={<ProductByBrand></ProductByBrand>}></Route>
          <Route path="/by-category/:id" element={<ProductByCategory></ProductByCategory>}></Route>
          <Route path='/by-keyword/:keyword' element={<ProductBykeyword></ProductBykeyword>}></Route>
          <Route path='/details/:id' element={<ProductDetails></ProductDetails>}></Route>
          <Route path='/login' element={<LoginPage/>}></Route>
          <Route path='/otp' element={<OTPPage></OTPPage>}></Route>
          <Route path='/profile' element={<ProfilePage></ProfilePage>}></Route>
        </Routes>
    </BrowserRouter>
  );
};

export default App;