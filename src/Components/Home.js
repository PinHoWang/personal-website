
import React, { Component } from "react";
import '../App.css';

import { Container, Image } from 'react-bootstrap';


class Home extends Component {
  render() {
    
    return (
      <div className="home">
        <div className='home-intro'>
            <Container>
                <Image className='home-photo' src='../images/photo_2inch.jpg' roundedCircle />
            </Container>
            <h3 className='home-name'>PinHo (Jimmy) Wang</h3>
            <h4 className='home-brief'>
                New Grad Software Engineer<br />
                Love Full Stack Techniques
            </h4>
        </div>
      </div>
    );
  }
}

export default Home;
