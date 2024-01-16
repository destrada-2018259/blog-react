
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

import react from './images/react.png';
import java from './images/java.png';
import csharp from './images/csharp.png';
import spring from './images/spring.png';
import go from './images/go.png';
import html from './images/html.png';
import javascript from './images/javascript.png';
import mongo from './images/mongo.png';
import angular from './images/angular.png';
import node from './images/node.png';
import sql from './images/sql.png';
import css from './images/css.png'
import './MyKnowledgeCards.css'



// import './myProjects.css'
export const MyKnowledgeCards = () => {


    function progressBar(porcentaje) {
        return <ProgressBar variant='info' now={porcentaje} />;
    }

    return (
        <Container fluid className='myKnowledge-background' >
                <Row className='mk-row' >
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={javascript} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>JavaScript</Card.Title>
                                {progressBar(90)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={html} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>HTML</Card.Title>
                                {progressBar(100)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={css} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>CSS</Card.Title>
                                {progressBar(90)}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mk-row'>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={react} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>React</Card.Title>
                                {progressBar(80)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={angular} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>Angular</Card.Title>
                                {progressBar(70)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={spring} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>Spring Boot</Card.Title>
                                {progressBar(90)}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mk-row'>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={java} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>Java SE, EE</Card.Title>
                                {progressBar(90)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={csharp} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>C#(.NET)</Card.Title>
                                {progressBar(60)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={node} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>NodeJs</Card.Title>
                                {progressBar(80)}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='mk-row'>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={go} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>GO</Card.Title>
                                {progressBar(60)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={sql} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>BD Relacionales</Card.Title>
                                {progressBar(80)}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='mk-col'>
                        <Card className='mk-card' >
                            <Card.Img variant="top" src={mongo} className='mk-img' />
                            <Card.Body>
                                <Card.Title className='mk-card-title'>BD no Relacionales</Card.Title>
                                {progressBar(70)}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        </Container>
    )
}
