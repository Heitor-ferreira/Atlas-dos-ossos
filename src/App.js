import './App.css';
import Header from './components/Header';
import Index from './components/Index';
import Favorite from './components/Favorite';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProvider from './context/Context';
import FloatingButton from './Interative/FavBut';


function App() {
  return (
    <ContextProvider>
      <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/favorite-list' element={<Favorite />}/>
    </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
