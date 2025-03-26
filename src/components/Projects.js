import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
 


const Projects = () => {
    var data=[
        {
            id:1,
            image:require('../assets/images/pimg1.jpg'),
            title:"Python",
            description: "Python is a versatile, high-level programming language known for its readability and simplicity. It's used for web development, data science, AI, automation, and more. Its large standard library and active community make it a popular choice for beginners and experts alike.",
            link:"www.github.com"
        },
        {
            id:2,
            image:require('../assets/images/laptop1.jpg'),
            title:"JavaScript",
            description: "JavaScript (JS) makes websites interactive. It's a versatile scripting language used for front-end (user interaction) and back-end (server-side) web development.",
             link:"www.github.com"
        },
        {
            id:3,
            image:require('../assets/images/pimg2.jpg'),
            title:"HTML5",
            description: "HTML5 represents a significant evolution in web development, serving as the cornerstone for modern web pages. It transcends the limitations of its predecessors by introducing a suite of powerful features that enhance both functionality and user experience. ",
            link:"www.github.com"
        },
        {
            id:4,
            image:require('../assets/images/pimg3.jpg'),
            title:"CSS",
            description: "CSS (Cascading Style Sheets) is a stylesheet language that dictates the visual presentation of web page elements. In simple terms, it controls the look and feel of HTML content, handling aspects like colors, fonts, layouts, and responsiveness.",
            link:"www.github.com"
        },
        {
            id:5,
            image:require('../assets/images/pimg4.jpg'),
            title:"React.js",
            description: "It uses a component-based architecture, allowing developers to create reusable UI elements. React excels at managing the view layer of web and mobile applications, providing efficient updates and a smooth user experience through its virtual DOM.",
            link:"www.github.com"
        },
        {
            id:6,
            image:require('../assets/images/pimg5.jpg'),
            title:"Node.js",
            description:"Node.js revolutionized web development by extending JavaScript's reach beyond the browser, enabling server-side scripting. Built on Chrome's high-performance V8 JavaScript engine, it provides a runtime environment that allows developers to use JavaScript for back-end logic.",
            link:"www.github.com"
        }
        
        ]
         
        
  return (
    <section id='projects' className='project-sec'>
    <Container fluid className='project mt-5' style={{width:'80%', height:'100vh'}}>
        <div className='title mt-5 mb-4'>
            <h3 className='tit'>Projects</h3>
            <p className='subtitle'>-My work-</p>
        </div>
      <Row>
        
        <div className='procard-con'>{
        data.map(obj=>{
            return(
                <Col sm={4} className='pro-card' key={obj.id}>
                    <div className='pro-img'>
                        <Image src={obj.image} className='img'/>
                    <div className='pro-details'>
                    <h3 className='pj'>{obj.title}</h3>
                    <p className='pjpg'>{obj.description}</p>
                    <a className='btn-a' href={obj.link}>Git</a>
                    </div>
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

export default Projects