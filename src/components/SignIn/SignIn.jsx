// SignIn.js

import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, LinearProgress } from '@mui/material';
import { auth, createUserWithEmailAndPassword } from '../../firebase';
import SignInPageImage from '../Images/SignInPage.jpg'; // Replace with the actual image path
import MainHeader from '../mainHeader/mainHeader';

const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { email, password } = formData;
            await createUserWithEmailAndPassword (auth, email, password);
            setSuccess(true);
            console.log('User signed in successfully!');
        } catch (error) {
            console.error('Error signing in:', error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <MainHeader />
            <Box p={2} textAlign="center">
                <Typography variant="h4">Sign In</Typography>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Box width="50%" p={2}>
                        <img src={SignInPageImage} alt="Your Image" />
                    </Box>
                    <Box width="50%" p={2}>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                required
                            />
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Sign In
                            </Button>
                        </form>
                        {loading && <LinearProgress />}
                        {success && <Typography variant="body2">Signin successful! Redirecting...</Typography>}
                        <Box mt={2}>
                            <Typography variant="body2">
                                Don't have an account?{' '}
                                <Link href={"/SignUp"} color="primary"> {/* Link to Sign Up page */}
                                    Sign Up
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default SignIn;
