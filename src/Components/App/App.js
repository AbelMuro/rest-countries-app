import React from 'react';
import HeaderBar from './HeaderBar';
import Content from './Content';
import DisplayCountry from './DisplayCountry';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './Store';
import './styles.css';

function App(){
    return(
        <Provider store={store}>
            <BrowserRouter>
                <HeaderBar/>
                <Routes>
                    <Route path='/' element={<Content />}/>
                    <Route path='/:country' element={<DisplayCountry/>}/>
                </Routes>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;