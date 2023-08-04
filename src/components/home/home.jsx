import React from 'react';
import MainHeader from '../mainHeader/mainHeader';
import Container1 from "./container1/container1";
import Container2 from "./container2/container2";
import Container3 from "./container3/container3";
import Footer from "../Footer/footer";
const styles = {
    header: {
        textAlign: 'center',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    h1: {
        fontSize: '2.5rem',
        margin: '0',
    },
    p: {
        fontSize: '1.5rem',
        margin: '0',
        color: '#888',
    },
    section: {
        margin: '20px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    h2: {
        fontSize: '1.8rem',
        margin: '0 0 10px 0',
    },
    pSection: {
        fontSize: '1.2rem',
        margin: '0',
    },
};

function App() {
    return (
        <>
            <MainHeader/>
            <Container1 />
            <Container2 />


        <div>

            <header style={styles.header}>
                <h1 style={styles.h1}>Supun Thilakshana</h1>
                <p style={styles.p}>Electrical and Information Engineer</p>
            </header>

        </div>
            <Footer/>
        </>

    );
}

export default App;
