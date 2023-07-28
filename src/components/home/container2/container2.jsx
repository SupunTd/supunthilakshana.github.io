import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3 } from 'react-icons/fa';

const MernLogo = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => (prevRotation + 2) % 360);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box p={2} textAlign="center">
            <Box display="flex" alignItems="center" justifyContent="center">
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaNodeJs size={60} style={{ marginRight: '10px' }} />
                </Box>
                <Box padding={2} style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center' }}>
                    <FaReact size={60} style={{ marginRight: '10px' }} />
                </Box>
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaDatabase size={60} style={{ marginRight: '10px' }} />
                </Box>
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaHtml5 size={60} style={{ marginRight: '10px' }} />
                </Box>
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaCss3 size={60} />
                </Box>
            </Box>
            <Typography variant="subtitle2">
                Powered by MERN Stack
            </Typography>
        </Box>
    );
};

export default MernLogo;
