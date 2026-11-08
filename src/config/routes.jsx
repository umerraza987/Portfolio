import React from 'react'
import { Routes, Route } from "react-router";
import Home from '../components/Home/home';

const Routes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>

    </Routes>
  )
}

export default Routes