import React from 'react';
import HeaderBar from './HeaderBar';
import Content from './Content';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App(){
    return(
        <BrowserRouter>
            <HeaderBar/>
            <Routes>
                <Route path='/' element={<Content />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;