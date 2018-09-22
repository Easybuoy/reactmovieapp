import React from 'react';
import { Col, Container, Row, Footer, Animation } from 'mdbreact';
import tmdbimg from './tmdb.png';

class FooterPage extends React.Component {
    render(){ console.log();
        return(
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="4">
                        <h5 className="title">Footer Content</h5>
                        <p>Put reviews here</p>
                    </Col>
                    <Col sm="4">
                        <h5 className="title text-center">Contact</h5>
                        
                        
                    </Col>
                    <Col sm="4">
                    <Animation type="slideInRight">
                    <img className="d-block w-100" src={tmdbimg} alt="Powered By The Movie Db" />
                    {/* style={{height: '100px', width: '100px'}} */}
                    </Animation>
                    </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> Movie App </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;