import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { FcMindMap } from 'react-icons/fc';

const HeaderBar = () => {
    return (
        <AppBar position="static" color="default" elevation={7} sx={{ backgroundColor: '#FFFFFF', color: '#333333', paddingLeft: '50px', paddingRight: '60px' }}>
            <Toolbar>

                <FcMindMap size={30} style={{ marginRight: '10px', marginLeft: '10px' }} />

                <Typography  variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
                    Hi 😋
                </Typography>

                {/* Navigation links */}
                <Typography variant="subtitle1" sx={{ mr: 6, fontWeight: 'bold' }}>
                    Home
                </Typography>
                <Typography variant="subtitle1" sx={{ mr: 6, fontWeight: 'bold' }}>
                    About
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    SignUp
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
