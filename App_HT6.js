import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom'
import Sidebar from './HT6/Sidebar'
import Home from './HT6/Home'
import Contacts from './HT6/Contacts'
import Reviews from './HT6/Reviews'
import Review from './HT6/Review'
import './HT6/Sidebar.css';
import './HT6/Contacts.css';
import './HT6/Reviews.css';

const Layout = () => {
  return (
      <Sidebar>
        <div>
          <Outlet></Outlet>
        </div>
      </Sidebar>
  )
};

function App() {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element=
          {<>
            <Sidebar></Sidebar>
            <Home></Home>
          </>}>
        </Route>

        <Route path='contacts' element=
          {<>
            <Sidebar></Sidebar>
            <Contacts></Contacts>
          </>}>
        </Route>

        <Route path='reviews' element=
          {<>
            <Sidebar></Sidebar>
            <Reviews></Reviews>
          </>}>
        </Route>

        <Route path="/reviews/:reviewId" element={<Review></Review>}></Route>

        <Route path="*" element={<div>Eror 404: page not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  </>
};


export default App;


