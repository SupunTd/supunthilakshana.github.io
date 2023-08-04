import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        backgroundColor: '#f5f5f5',
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '90%', // Change width to '100%'
        left: 0,
        height: '2rem', // Optionally, specify the height (you can adjust this as needed)
    },
}));

const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <p>All rights reserved © {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
