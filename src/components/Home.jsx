import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import logo from '.././public/bg.jpg';


const Home = () => {
    return (
        <div className="home-container text-center text-white" id="home">
            <Container>
                <h1 className="display-4">Welcome to Izumii Bot</h1>
                <p>Automate your Menfess interaction easily with our bot!</p>
                <div className="card-container">
                    <Card className="menfess-card">
                        <Card.Img variant="top" src=`${logo}` alt="Menfess Logo" />
                        <Card.Body>
                            <Card.Title>Izumii BOT</Card.Title>
                            <Card.Text>
                                Send messages to your crush anonymously.
                            </Card.Text>
                            <Button variant="primary" className="btn-get-started" href="https://api.whatsapp.com/send?phone=6287740175435&text=.menu">
                                Get Started!
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </div>
    );
};

export default Home;
