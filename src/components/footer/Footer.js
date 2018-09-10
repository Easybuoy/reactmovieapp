import React from 'react';
import { Col, Container, Row, Footer, Animation, Input } from 'mdbreact';
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
                        <h5 className="title text-center">Contact</h5>
                        <div className="">
                        {/* action="https://formspree.io/" */}
                        <form method="POST" >
                        <label htmlFor="from" className="white-text">From</label>
                        <input type="email" id="from" className="form-control"/>
                        <br/>
                        <label htmlFor="to" className="white-text">To</label>
                        <input type="text" id="to" className="form-control" value="Ezekiel Ekunola"/>
                        <br />
                        <label htmlFor="message" className="white-text">Message</label>
                        <textarea type="text" id="message" className="form-control" rows="3"></textarea>

                        <div className="text-center mt-4">
                            <button className="btn btn-outline-purple" type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
                        </div>
                        </form>

                        </div>
                        
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