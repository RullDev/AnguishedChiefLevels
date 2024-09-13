import React from 'react';

const About = () => {
    return (
        <div className="about-section" id="about">
            <h2>About Us</h2>
            <p>
                We are committed to delivering an exceptional Menfess experience. Our bot is built to handle anonymous messages with precision, ensuring user privacy and seamless interaction.
            </p>
            <div className="card-container">
                <div className="mini-card">
                    <h3 className="card-title">Privacy</h3>
                    <p className="card-text">We prioritize user privacy, ensuring that all interactions remain anonymous and secure.</p>
                </div>
                <div className="mini-card">
                    <h3 className="card-title">Efficiency</h3>
                    <p className="card-text">Our bot processes messages quickly and efficiently, providing instant feedback.</p>
                </div>
                <div className="mini-card">
                    <h3 className="card-title">User-Friendly</h3>
                    <p className="card-text">Designed with user experience in mind, our interface is intuitive and easy to navigate.</p>
                </div>
            </div>
        </div>
    );
};

export default About;
