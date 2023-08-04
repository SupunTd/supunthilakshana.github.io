import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MainHeader from "../mainHeader/mainHeader";

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        padding: theme.spacing(2),
    },
    heading: {
        margin: theme.spacing(2, 0),
        color: theme.palette.primary.main,
    },
    paragraph: {
        margin: theme.spacing(1, 0),
        lineHeight: '1.6',
    },
    button: {
        marginTop: theme.spacing(2),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
}));

const ResumePage = () => {
    const classes = useStyles();

    const handleRedirect = () => {
        const linkedInUrl = 'https://drive.google.com/drive/folders/1oSyLGHfoVHfvus_apkU46xwm-Vt5myeK?usp=sharing';
        window.open(linkedInUrl, '_blank');
    };

    return (
        <>
            <MainHeader/>
        <div className={classes.root}>
            <h1 className={classes.heading}>My Resume</h1>
            <h2 className={classes.heading}>Education</h2>
            <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at mauris
                orci. Sed viverra nulla odio, ac malesuada nibh varius in.
            </p>

            <h2 className={classes.heading}>Experience</h2>
            <p className={classes.paragraph}>
                Fusce porttitor, nunc ut pellentesque imperdiet, nisi nunc luctus
                risus, vel interdum dolor odio eu nunc.
            </p>

            <h2 className={classes.heading}>Skills</h2>
            <p className={classes.paragraph}>
                Quisque euismod auctor mauris, id aliquam velit venenatis vel.
                Pellentesque habitant morbi tristique senectus et netus et malesuada
                fames ac turpis egestas.
            </p>

            <Button className={classes.button} onClick={handleRedirect}>
                Public Resume
            </Button>
        </div>
        </>
    );
};

export default ResumePage;
