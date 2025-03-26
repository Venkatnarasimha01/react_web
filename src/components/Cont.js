import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Cont = () => {
  return (
    <section id='contact' className='contact'>
    <Container fluid className='learn mt-5' style={{width:'80%', height:'100vh'}}>
            <div className='title mt-5 mb-4'>
                <h3 className='tit'>Contact Me</h3>
                <p className='subtitle'>-Get in Touch-</p>
            </div>
            <Form className='contact-form'>
      <Row className='row1'>
        <Col sm={3}>
          <Form.Control type='text' placeholder="Enter Name" name='name' autoComplete='name'/>
        </Col>
        <Col sm={3}>
          <Form.Control type='email' placeholder="Enter Email Id" name='email' autoComplete='email'/>
        </Col>
        <Col sm={3}>
          <Form.Control type='tel' placeholder="Enter Mobile No" name='mobile' autoComplete='mobile'/>
        </Col>
        <Row>
        <Col sm={12}>
        <Form.Control as="textarea" placeholder="Leave a comment here" name='comment' autoComplete='comment'/>
        </Col>
        </Row>
      </Row>
      <div className='success'>
      <Button variant="success" >Success</Button>
      </div>
    </Form>
    <div className='google-map'>
    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.0288789375131!2d78.47174783863896!3d17.360953545880456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a6e1a939b%3A0xcb5a69e4aaf113fb!2sCharminar!5e0!3m2!1sen!2sin!4v1742744830869!5m2!1sen!2sin" width="1200" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </Container>
    
    </section>
  )
}

export default Cont