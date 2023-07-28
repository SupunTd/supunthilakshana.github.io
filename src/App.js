import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Main from './components/home/home';

function App() {
    return (
        <Router>
            <Routes>
                <Route path ="*" element={<Navigate to="/"/>}></Route>
                <Route path="/" element ={<Main/>} ></Route>
            </Routes>
        </Router>
    );
}

export default App;
