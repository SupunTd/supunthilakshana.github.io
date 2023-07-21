import React from 'react';

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
        <div>
            <header style={styles.header}>
                <h1 style={styles.h1}>Supun Thilakshana</h1>
                <p style={styles.p}>Electrical and Information Engineer</p>
            </header>
            <section style={styles.section}>
                <h2 style={styles.h2}>About Me</h2>
                <p style={styles.pSection}>
                    I am an enthusiastic and motivated individual with a passion for
                    web development. I love creating innovative and user-friendly
                    websites.
                </p>
            </section>
            <section style={styles.section}>
                <h2 style={styles.h2}>Experience</h2>
                <p style={styles.pSection}>
                    Web Developer | XYZ Company | 2019 - Present
                </p>
                <p style={styles.pSection}>
                    Frontend Developer | ABC Agency | 2017 - 2019
                </p>
            </section>
            {/* Add more sections as needed */}
        </div>
    );
}

export default App;
