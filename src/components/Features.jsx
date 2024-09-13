import React from 'react';
import { FaUserSecret, FaReply, FaCogs } from 'react-icons/fa';

const Features = () => {
    return (
        <div className="feature-section" id="features">
            <h2>Features</h2>
            <div className="feature-cards">
                <div className="feature-card">
                    <div className="card-icon">
                        <FaUserSecret />
                    </div>
                    <h3 className="card-title">Anonymous Messaging</h3>
                    <p className="card-text">Send and receive messages without revealing your identity.</p>
                </div>
                <div className="feature-card">
                    <div className="card-icon">
                        <FaReply />
                    </div>
                    <h3 className="card-title">Instant Replies</h3>
                    <p className="card-text">Get immediate responses to your messages, ensuring quick communication.</p>
                </div>
                <div className="feature-card">
                    <div className="card-icon">
                        <FaCogs />
                    </div>
                    <h3 className="card-title">Customizable</h3>
                    <p className="card-text">Tailor the bot's behavior and responses to fit your needs.</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
