import React, { useEffect, useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import { Homepage } from './pages/Homepage';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;