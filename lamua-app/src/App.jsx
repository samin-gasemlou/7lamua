import React from 'react';
import Home from './pages/Home';
import Eye from './pages/Eye';
import Skin from './pages/Skin';
import Skinny from './pages/Skinny';
import Woman from './pages/Woman';
import Brand from './pages/Brand';
import SingleIntro from './pages/SingleIntro';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Login01 from './pages/Login01';
import Login02 from './pages/Login02';
import SingleBlog from './pages/SingleBlog';
import Support from './pages/Support';

function App() {
  return (
    <div>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Eye" element={<Eye />} />
      <Route path="/Skin" element={<Skin />} />
      <Route path="/Skinny" element={<Skinny />} />
      <Route path="/Woman" element={<Woman />} />
      <Route path="/Brand" element={<Brand />} />
      <Route path="/SingleIntro/:id" element={<SingleIntro />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Login01" element={<Login01 />} />
      <Route path="/Login02" element={<Login02 />} />
      <Route path="/Support" element={<Support />} />
      <Route path="/SingleBlog/:id" element={<SingleBlog />} />
        </Routes>
    </div>
  )
}

export default App
