import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'

const Learn = () => {
    var data=[
        {
            id:1,
            image:require('../assets/images/udemy.jpg'),
            name:"Udemy",
            course:"MERN Stack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fblink:"https://www.facebook.com",
            twitter:"https://www.twitter.com",
            linkenin:"https://www.linkedin.com",
            link:"https://www.github.com"
        },
        {
            id:2,
            image:require('../assets/images/coursera.jpg'),
            name:"Coursera",
            course:"Java FullStack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
             
            fblink:"https://www.facebook.com",
            twitter:"https://www.twitter.com",
            linkenin:"https://www.linkedin.com",
            link:"https://www.github.com"
        },
        {
            id:3,
            image:require('../assets/images/Hacker.png'),
            name:"Hacker Rank",
            course:"Cyber Security",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
             
            fblink:"https://www.facebook.com",
            twitter:"https://www.twitter.com",
            linkenin:"https://www.linkedin.com",
            link:"https://www.github.com"
        },
        {
            id:4,
            image:require('../assets/images/scaler.png'),
            name:"Scaler",
            course:"Dot Net Full Stack",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
             
            fblink:"https://www.facebook.com",
            twitter:"https://www.twitter.com",
            linkenin:"https://www.linkedin.com",
            link:"https://www.github.com"
        },
        {
            id:5,
            image:require('../assets/images/cuvette.png'),
            name:"Cuvette",
            course:"Data Analytics",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fblink:"https://www.facebook.com",
            twitter:"https://www.twitter.com",
            linkenin:"https://www.linkedin.com",
            link:"https://www.github.com"
        },
        {
            id:6,
            image:require('../assets/images/cimg11.jpg'),
            name:"Amazon",
            course:"AWS Cloud",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            fblink:"https://www.facebook.com",
            twitter:"https://www.twitter.com",
            linkenin:"https://www.linkedin.com",
            link:"https://www.github.com"
        }
        
        ]
  return (
    <section id='learn' className='learn-sec'>
        <Container fluid className='learn mt-5' style={{width:'80%', height:'100vh'}}>
            <div className='title mt-5 mb-4'>
                <h3 className='tit'>Learning Platforms</h3>
                <p className='subtitle'>-My Suggestions-</p>
            </div>
      <Row>
        <div className='learncard-con'>{
            data.map(obj=>{
               return(
                <Col sm={4} className='learn-card' key={obj.id}>
                    <div className='learn-logo'>
                        <Image src={obj.image}/>
                        <div className='learn-details'>
                        <div className='social'>
                            <ul className='social-list'>
                                <li className='soc-lists'><a href={obj.fblink} className='anchor'><i className="fa-brands fa-facebook logos"></i></a></li>
                                <li className='soc-lists'><a href={obj.twitter} className='anchor'><i className="fa-brands fa-square-x-twitter logos"></i></a></li>
                                <li className='soc-lists'><a href={obj.linkenin} className='anchor'><i className="fa-brands fa-linkedin logos"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='learn-det'>
                    <h3 className='pj'>{obj.name}</h3>
                    <h4>{obj.course}</h4>
                    {/* <p className='pjpg'>{obj.description}</p> */}
                    {/* <a className='btn-a' href={obj.link}>Git</a> */}
                    </div>
                    
                
                </Col>
               )
            })
            }
        
        </div>
      </Row>
    </Container>
    </section>
  )
}

export default Learn