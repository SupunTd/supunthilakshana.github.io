import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';
import { auth, createUserWithEmailAndPassword } from '../../firebase';
import SignupPageImage from "../Images/SignupPage.jpg";
import MainHeader from "../mainHeader/mainHeader";
const Signup = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { email, password } = formData;
            await createUserWithEmailAndPassword(auth, email, password);
            // You can do something else here like redirect to another page after successful signup.
            console.log('User signed up successfully!');
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };

    return (
        <>
            <MainHeader/>
        <Box p={2} textAlign="center">
            <Typography variant="h4">Sign Up</Typography>
            <Box display="flex" justifyContent="center" alignItems="center">
                {/* Left side with image */}
                <Box width="50%" p={2}>
                    {/* Add your image here */}
                    <img src={SignupPageImage} alt="Your Image" />
                </Box>

                {/* Right side with form */}
                <Box width="50%" p={2}>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            required
                        />
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            variant="outlined"
                            required
                        />
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
                            Sign Up
                        </Button>
                    </form>

                    {/* Redirect link */}
                    <Box mt={2}>
                        <Typography variant="body2">
                            Already have an account?{' '}
                            <Link href={"/SignIn"} color="primary">
                                Sign In
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
        </>
    );
};

export default Signup;
