import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import about from '../assets/images/about.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

const About = () => {
    const x = 60;
    const y=45;
  return (
    <section id='about' className='about-sec'>
    <Container fluid className='about'>
        <div className='title'>
            <h2 className='tit'>About Us</h2>
            <div className='subtitle'>-learn more about us-</div>
        </div>
      <Row>
        <Col sm={6}>
            <Image src={about} className='about-img mt-4'/>
        </Col>
        <Col sm={6} className='mt-4'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum beatae ratione nesciunt. Nesciunt voluptatum, itaque dolore ab nemo laboriosam voluptas blanditiis quasi magni repellat fugiat dolorem qui pariatur voluptates. Neque optio sint ipsa. Ducimus officiis illum vel eligendi tenetur harum?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum beatae ratione nesciunt.</p>
            
            <div className='progress-block'>
                <div>
                <h5>Problem Solving</h5> 
                <ProgressBar now={x} label={`${x}%`} style={{ height: '40px' }}  />
                </div>
                <div>
                <h5>Canvas</h5> 
                <ProgressBar now={y} label={`${y}%`} style={{ height: '40px' }} />
                </div>
               
            </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default About