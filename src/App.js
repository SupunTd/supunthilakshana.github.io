import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Main from './components/home/home';
import Resume from './components/Resume/Resume';
import Signup from './components/SignUp/Signup'; // Corrected path
import SignIn from './components/SignIn/SignIn';
function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<Navigate to="/" />} />
                <Route path="/" element={<Main />} />
                <Route path="/Resume" element={<Resume />} />
                <Route path="/SignUp" element={<Signup />} /> {/* Corrected path */}
                <Route path="/SignIn" element={<SignIn />} /> {/* Corrected path */}
            </Routes>
        </Router>
    );
}

export default App;
