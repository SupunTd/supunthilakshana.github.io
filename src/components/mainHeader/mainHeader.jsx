import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, CircularProgress } from '@mui/material';
import { FcMindMap } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
    const [homeLoading, setHomeLoading] = useState(false);
    const [signupLoading, setSignupLoading] = useState(false);

    const handleHomeNavigation = () => {
        setHomeLoading(true);
        setTimeout(() => {
            setHomeLoading(false);
        }, 1000);
    };

    const handleSignupNavigation = () => {
        setSignupLoading(true);
        setTimeout(() => {
            setSignupLoading(false);
        }, 1000);
    };

    const linkStyle = {
        textDecoration: 'none', // Remove underline
        color: 'inherit', // Inherit text color from parent
    };

    return (
        <AppBar
            position="static"
            color="default"
            elevation={7}
            sx={{
                backgroundColor: '#FFFFFF',
                color: '#333333',
                paddingLeft: '50px',
                paddingRight: '60px',
            }}
        >
            <Toolbar>
                <FcMindMap size={30} style={{ marginRight: '10px', marginLeft: '10px' }} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    <Link to="/" onClick={handleHomeNavigation} style={linkStyle}>Hi 😋</Link>
                </Typography>

                {/* Navigation links */}
                <Typography variant="subtitle1" sx={{ mr: 6, fontWeight: 'bold' }}>
                    <Link to="/" onClick={handleHomeNavigation} style={linkStyle}>
                        Home
                    </Link>
                    {homeLoading && <CircularProgress color="secondary" size={20} />}
                </Typography>
                <Typography variant="subtitle1" sx={{ mr: 6, fontWeight: 'bold' }}>
                    About
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    <Link to="/Signup" onClick={handleSignupNavigation} style={linkStyle}>
                        SignUp
                    </Link>
                    {signupLoading && <CircularProgress color="secondary" size={20} />}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
