import './App.css';
import Header from './components/Header';
import Index from './components/Index';
import Teste from './components/Teste';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContextProvider from './context/Context';


function App() {
  return (
    <ContextProvider>
      <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Index />}/>
      <Route path='/teste' element={<Teste />}/>
    </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;
