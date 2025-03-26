import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Skills = () => {

    var data=[
        {
            id:1,
            icon:"fa-brands fa-python",
            title:"Python",
            description: "Python is a versatile, high-level programming language known for its readability and simplicity. It's used for web development, data science, AI, automation, and more. Its large standard library and active community make it a popular choice for beginners and experts alike.",
             
        },
        {
            id:2,
            icon:"fa-brands fa-js",
            title:"JavaScript",
            description: "JavaScript (JS) makes websites interactive. It's a versatile scripting language used for front-end (user interaction) and back-end (server-side) web development.",
   
        },
        {
            id:3,
            icon:"fa-brands fa-html5",
            title:"HTML5",
            description: "HTML5 represents a significant evolution in web development, serving as the cornerstone for modern web pages. It transcends the limitations of its predecessors by introducing a suite of powerful features that enhance both functionality and user experience. ",

        },
        {
            id:4,
            icon:"fa-brands fa-css3",
            title:"CSS",
            description: "CSS (Cascading Style Sheets) is a stylesheet language that dictates the visual presentation of web page elements. In simple terms, it controls the look and feel of HTML content, handling aspects like colors, fonts, layouts, and responsiveness.",
            
        },
        {
            id:5,
            icon:"fa-brands fa-react",
            title:"React.js",
            description: "It uses a component-based architecture, allowing developers to create reusable UI elements. React excels at managing the view layer of web and mobile applications, providing efficient updates and a smooth user experience through its virtual DOM.",
       
        },
        {
            id:6,
            icon:"fa-brands fa-node-js",
            title:"Node.js",
            description:"Node.js revolutionized web development by extending JavaScript's reach beyond the browser, enabling server-side scripting. Built on Chrome's high-performance V8 JavaScript engine, it provides a runtime environment that allows developers to use JavaScript for back-end logic.",
        }
        
        ]
        
        
  return (
    <section id='skills' className='skills-sec'>
    <Container fluid className='skills mt-5' style={{width:'80%', height:'90vh'}}>
        <div className='title mt-5 mb-4'>
            <h2 className='tit'>Technical Skills</h2>
            <div className='subtitle'>Technologies</div>
        </div>
      <Row>
        <div className='card-con'>{
        data.map(obj=>{
            return(
                    <Col sm={4} className='cards' key={obj.id}>
                    <div className='icon'>
                        <i className={obj.icon}></i>
                    </div>
                        <h3 className='sktt mt-2'>{obj.title}</h3>
                        <p className='skpg'>{obj.description}</p>
                    </Col>
            )
        })
    }
        </div>
      </Row>
    </Container>
    <div className='tempo'></div>
    </section>
  )
}

export default Skills