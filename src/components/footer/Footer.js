import React from 'react';
import { Col, Container, Row, Footer, Animation } from 'mdbreact';
import { Fa } from 'mdbreact';
import tmdbimg from './tmdb.png';

class FooterPage extends React.Component {
    render(){ 
        return(
            <Footer color="blue" className="font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                    <Col sm="4">
                        <a style={{'color': 'white'  }} rel="noopener noreferrer" href= "https://github.com/Easybuoy"><Fa icon="github" size="2x" className="fav" /></a>
                        <a style={{'color': 'white'}} rel="noopener noreferrer" href= "https://www.freecodecamp.org/easybuoy"><Fa icon="free-code-camp" size="2x" className="fav" /></a>
                        <a style={{'color': 'white'}} rel="noopener noreferrer" href= "https://codepen.io/easybuoy-the-flexboxer/"><Fa icon="codepen" size="2x" className="fav" /></a>
                        <a style={{'color': 'white'}} rel="noopener noreferrer" href= "https://www.linkedin.com/in/easybuoy/"><Fa icon="linkedin" size="2x" className="fav" /></a>
                        <a style={{'color': 'white'}} rel="noopener noreferrer" href= "https://stackoverflow.com/users/story/8326940"><Fa icon="stack-overflow" size="2x" className="fav" /></a>
                        <a style={{'color': 'white'}} rel="noopener noreferrer" href= "http://twitter.com/easybuoy/"><Fa icon="twitter" size="2x" className="fav" /></a>


                    </Col>
                    <Col sm="4">
                        
                        
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
                        &copy; {(new Date().getFullYear())} Copyright: <a href='https://reactmovieapptmdb.herokuapp.com'> Movie App </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;