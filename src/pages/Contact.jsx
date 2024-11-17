import React from 'react';

const Contact = () => {
    return (
        <section className="contact">
            <h1>Contact Me</h1>
            <form>
                <label>Name:</label>
                <input type="text" required />
                <label>Email:</label>
                <input type="email" required />
                <label>Message:</label>
                <textarea rows="5" required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
