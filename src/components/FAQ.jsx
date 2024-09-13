import React from 'react';

const FAQ = () => {
    return (
        <div className="faq-section" id="faq">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-container">
                <div className="faq-item">
                    <div className="faq-question">How does the Menfess bot work?</div>
                    <div className="faq-answer">The bot processes anonymous messages, allowing users to send and receive messages without revealing their identity.</div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Is my data safe?</div>
                    <div className="faq-answer">Yes, we prioritize user privacy and ensure that all data remains secure and anonymous.</div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">How do I use the bot?</div>
                    <div className="faq-answer">Simply start a conversation with the bot and follow the instructions provided to send and receive messages.</div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">Can I customize the bot's responses?</div>
                    <div className="faq-answer">Yes, the bot's responses can be customized according to your preferences.</div>
                </div>
                <div className="faq-item">
                    <div className="faq-question">What should I do if I encounter an issue?</div>
                    <div className="faq-answer">Contact our support team for assistance with any issues you encounter.</div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
