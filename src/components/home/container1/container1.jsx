import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import MainHomeImage from "../../Images/HomeMainImage.jpg";

const HomePage = () => {
    return (
        <Box p={12} textAlign="center">
            <Grid container spacing={4} alignItems="center">
                {/* Left side with text */}
                <Grid p={12}  item xs={12} md={6}>
                    <Typography variant="h2" gutterBottom>
                        Unleashing the Power of Code
                    </Typography>
                    <Typography variant="body1">
                        Hi, I'm Supun Thilakshana. Welcome to my digital journey where I explore the endless possibilities of coding and technology.
                    </Typography>
                </Grid>

                {/* Right side with image */}
                <Grid item xs={12} md={6}>
                    <img
                        src={MainHomeImage}
                        alt="Programmer"
                        style={{ width: '100%', borderRadius: '12px', boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
