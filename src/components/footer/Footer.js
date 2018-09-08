import React from 'react';
import { Col, Container, Row, Footer, Animation } from 'mdbreact';
import tmdbimg from './tmdb.png';

class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="4">
                        <h5 className="title">Footer Content</h5>
                        <p>Here you can use rows and columns here to organize your footer content.</p>
                    </Col>
                    <Col sm="4">
                        <h5 className="title">Links</h5>
                        <ul>
                        <li className="list-unstyled"><a href="#!">Link 1</a></li>
                        <li className="list-unstyled"><a href="#!">Link 2</a></li>
                        <li className="list-unstyled"><a href="#!">Link 3</a></li>
                        <li className="list-unstyled"><a href="#!">Link 4</a></li>
                        </ul>
                    </Col>
                    <Col sm="4">
                    <Animation type="slideInRight">
                    <img className="d-block w-100" src={tmdbimg} alt="Powered By The Movie Db" style={{height: '100px', width: '100px'}}/>
                    </Animation>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;