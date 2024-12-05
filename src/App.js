import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Index from './components/Index';
import { Route, Routes } from "react-router-dom";
import ContextProvider from './context/Context';


function App() {
  return (
    <Header />
  );
}

export default App;
