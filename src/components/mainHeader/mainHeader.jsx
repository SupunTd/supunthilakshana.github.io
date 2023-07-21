import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const HeaderBar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    My Website
                </Typography>
                <Typography variant="subtitle1" sx={{ mr: 2 }}>
                    Home
                </Typography>
                <Typography variant="subtitle1" sx={{ mr: 2 }}>
                    About
                </Typography>
                <Typography variant="subtitle1">
                    Contact
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
