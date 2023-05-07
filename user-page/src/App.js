import './App.css';
import Header from './components/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login'
import Catalog from './pages/catalog'

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
