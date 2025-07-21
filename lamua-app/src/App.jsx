import React from 'react';
import Home from './pages/Home';
import Eye from './pages/Eye';
import Skin from './pages/Skin';
import Skinny from './pages/Skinny';
import Woman from './pages/Woman';
import Brand from './pages/Brand';
import SingleWoman from './pages/SingleWoman'
import SingleEye from './pages/SingleEye';
import SingleSkin from './pages/SingleSkin'
import SingleSkinny from './pages/SingleSkinny'
import SingleBrand from './pages/SingleBrand'
import { Routes, Route } from 'react-router-dom';


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
      <Route path="/SingleWoman" element={<SingleWoman />} />
      <Route path="/SingleEye" element={<SingleEye />} />
      <Route path="/SingleSkin" element={<SingleSkin />} />
      <Route path="/SingleSkinny" element={<SingleSkinny />} />
      <Route path="/SingleBrand" element={<SingleBrand />} />
        </Routes>
    </div>
  )
}

export default App
