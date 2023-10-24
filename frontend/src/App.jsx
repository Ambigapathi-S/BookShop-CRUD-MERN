import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CreateBook from './pages/createBook';
import ShowBook from './pages/showBooks';
import EditBook from './pages/editBook';
import DeleteBook from './pages/deleteBook';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
      <Route path='/books/edit/:id' element={<EditBook />} />
      <Route path='/books/delete/:id' element={<DeleteBook />} />
    </Routes>
  )
}

export default App