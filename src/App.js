import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/home/home';
import Signup from './components/SignUp/signup'; // Corrected path

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Main />} />
                <Route path="/Signup" element={<Signup />} /> {/* Corrected path */}
            </Routes>
        </Router>
    );
}

export default App;
