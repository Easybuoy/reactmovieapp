import React from 'react';
import { Col, Container, Row, Footer, Animation, Input } from 'mdbreact';
import tmdbimg from './tmdb2.png';

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
                        <div className="">
                            
                            
                        <form method="POST" action="https://formspree.io/ekunolaeasybuoy@gmail.com" >
                        <label htmlFor="email" className="white-text">From</label>
                        <input type="email" id="email" name="_replyto" className="form-control" placeholder="Your Email" required/>
                        <br/>
                        <label htmlFor="to" className="white-text">To</label>
                        <input type="text" id="to" name="to" className="form-control" value="Ezekiel Ekunola" readOnly/>
                        <br />
                        <label htmlFor="message" className="white-text">Message</label>
                        <textarea type="text" id="message" name="message" className="form-control" rows="3" minLength="50" maxLength="500" required></textarea>
                        <input type="hidden" name="_next" value={window.location.host + '/thanks'} />
                        <input type="text" name="_gotcha" style={{display:'none'}} />
                        <div className="text-center mt-4">
                        
                            <button className="btn btn-outline-white hoverable z-depth-5" style={{borderRadius: '50px'}} type="submit">Send<i className="fa fa-paper-plane-o ml-2"></i></button>
                        </div>
                        </form>

                        </div>
                        
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
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;