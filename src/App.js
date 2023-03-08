import './App.css';
import NavBar from './components/NavBar.js'
import HomePage from './pages/Home.js'
import Category from './pages/Category.js'
import ItemDetail from './pages/ItemDetail.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <NavBar/> 
   <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/category/:categoryId' element={<Category />} />
      <Route path='/item/:itemId' element={<ItemDetail />} />
   </Routes>
  </BrowserRouter>
  );
}

export default App;
