import React from 'react';
import { IconButton } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorite from '../components/Favorite';


const FloatingButton = () => {
    return (
        <IconButton
            style={{
                position: 'fixed', // Fixa o botão para que ele se mova junto com a tela
                bottom: '10px',       // Distância do topo da tela
                right: '10px',     // Distância do lado direito da tela
                zIndex: 1000,     // Certifica-se de que o botão fique acima de outros elementos
                color: 'white',
                transform: 'scale(1.8)'
            }}
            aria-label="star-icon-button" // Descrição de acessibilidade
            onClick={() =>  <Route path='/favorite-list' element={<Favorite />}/>} // Exemplo de ação ao clicar no botão
        >
            <StarsIcon />
        </IconButton>
    );
};

export default FloatingButton;