// import {React, useState, useEffect} from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
// import {ArrowRightCircle} from 'react-bootstrap-icons'
// import headerImg from "../assets/header-img.jpg"

// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const toRotate = ["Software Developer", "Web Designer", "UI/UX Designer", "Mobile Developer"];
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const period = 200;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta );

//     return () => { clearInterval(ticker)};
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

//     setText(updatedText);
//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta/2)
//     }
//     if (isDeleting && updatedText ===fullText){
//       setIsDeleting(true);
//       setDelta(period);
//     }
//     else if (isDeleting && updatedText === ''){
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setDelta(500);
//     }
//   }

//   return (
//     <div>
//       <section className='banner' id='home'>
//         <Container>
//             <Row className='align-items-center'>
//                 <Col xs={12} md={6} xl={7}>
//                     <span className='tagline'>Welcome!</span>
//                     <h1>{"Hi I'm Aishwarya"}<span className='wrap'>{text}</span></h1>
//                     <p>More about me..</p>
//                     <button onClick={()=> console.log('connect')}>Let's Connect</button> <ArrowRightCircle size={25}/>
//                 </Col>
//                 <Col xs={12} md={6} xl={5}>
//                     <img src={headerImg} alt='Header Img'></img>
//                 </Col>
//             </Row>
//         </Container>
//       </section>
//     </div>
//   )
// }

// // export default Banner;

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/header-img.jpg";
import headerImg from '../assets/header-img0.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "UI/UX Designer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(400);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio!!</span>
                <h1>{`Hi! I'm Aishwarya`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer","Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p></p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={30} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" alignment="left"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
