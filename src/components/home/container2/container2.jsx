import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { FaNodeJs, FaReact, FaDatabase, FaHtml5, FaCss3, FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const MernLogo = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation((prevRotation) => (prevRotation + 2) % 360);
        }, 10);

        return () => clearInterval(interval);
    }, []);

    // Function to handle the link redirection
    const handleRedirect = (url) => {
        window.open(url, '_blank');
    };

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

            <Box display="flex" alignItems="center" justifyContent="center">


                {/* Facebook */}
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaFacebook
                        size={60}
                        style={{ marginRight: '10px', cursor: 'pointer' }}
                        color="#3b5998"
                        onMouseEnter={() => setRotation(0)}
                        onMouseLeave={() => setRotation(2)}
                        onClick={() => handleRedirect('https://www.facebook.com/supun.thilakshana.1')}
                    />
                </Box>

                {/* Instagram */}
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaInstagram
                        size={60}
                        style={{ marginRight: '10px', cursor: 'pointer' }}
                        color="#e4405f"
                        onMouseEnter={() => setRotation(0)}
                        onMouseLeave={() => setRotation(2)}
                        onClick={() => handleRedirect('https://www.instagram.com/supun_thilakshana/')}
                    />
                </Box>

                {/* GitHub */}
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaGithub
                        size={60}
                        style={{ marginRight: '10px', cursor: 'pointer' }}
                        color="#211F1F"
                        onMouseEnter={() => setRotation(0)}
                        onMouseLeave={() => setRotation(2)}
                        onClick={() => handleRedirect('https://github.com/SupunTd')}
                    />
                </Box>

                {/* LinkedIn */}
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaLinkedin
                        size={60}
                        style={{ marginRight: '10px', cursor: 'pointer' }}
                        color="#0077B5"
                        onMouseEnter={() => setRotation(0)}
                        onMouseLeave={() => setRotation(2)}
                        onClick={() => handleRedirect('https://www.linkedin.com/in/supunthilakshana/')}
                    />
                </Box>

                {/* YouTube */}
                <Box padding={2} style={{ transform: `rotate(0deg)`, transformOrigin: 'center' }}>
                    <FaYoutube
                        size={60}
                        style={{ marginRight: '10px', cursor: 'pointer' }}
                        color="#FF0000"
                        onMouseEnter={() => setRotation(0)}
                        onMouseLeave={() => setRotation(2)}
                        onClick={() => handleRedirect('https://www.youtube.com/@supunthilakshana')}
                    />
                </Box>
            </Box>
            <Typography variant="subtitle2">
                My Social Media
            </Typography>



        </Box>
    );
};

export default MernLogo;
