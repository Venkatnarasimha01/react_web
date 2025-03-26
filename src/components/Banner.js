import Carousel from 'react-bootstrap/Carousel';
import "../App.css"
const Banner = () => {
    var data=[
        {
            id:1,
            image:require('../assets/images/cimg1.jpg'),
            title:"Web Developer",
            description: "Web developers are the architects of the internet, constructing and maintaining the digital spaces we interact with daily. They utilize a diverse toolkit of programming languages and frameworks to bring websites to life, ensuring both visual appeal and functional efficiency.",
            link:'https://www.google.com'
        },
        {
            id:2,
            image:require('../assets/images/cimg2.jpg'),
            title:"Frontend Developer",
            description: "Developers create software. They code, test, and maintain applications across various platforms (web, mobile, desktop, etc.), using programming languages to solve problems and build digital solutions.",
            link:'https://www.google.com'
        },
        {
            id:3,
            image:require('../assets/images/cimg3.jpg'),
            title:"Backend Developer",
            description: "Back-end developers are the architects behind the scenes of websites and applications. They build and maintain the server-side logic, databases, and APIs that power the user-facing front-end. They use languages like Python, Java, or PHP to handle data processing, security, and performance, ensuring seamless functionality and data integrity. They focus on how the system works, rather than how it looks.",
            link:'https://www.google.com'
        },
        {
            id:4,
            image:require('../assets/images/cimg4.jpg'),
            title:"React Js",
            description: "A ReactJS developer specializes in building user interfaces using the React JavaScript library. They create dynamic, interactive web applications by leveraging React's component-based architecture. Their focus is on efficient front-end development, ensuring smooth user experiences and optimal performance. They work with JSX, state management, and often utilize tools like Redux or Context API.",
            link:'https://www.google.com'
        },
        {
            id:5,
            image:require('../assets/images/cimg5.png'),
            title:"Java Script",
            description: "A JavaScript (JS) developer uses JavaScript to build interactive web applications. They work on both front-end (user interface) and back-end (server-side) development. Front-end JS developers create dynamic website features, while back-end JS developers, using Node.js, build server logic. They handle everything from user interactions to data manipulation.",
            link:'https://www.google.com'
        }
        ]
  return (
    <section id='home' className='banner'>
    <Carousel fade>
        {
            data.map(obj=>{
                return(
                    <Carousel.Item key={obj.id}>
                        <img
                        className='d-block w-100'
                        src={obj.image} 
                        alt={"slide"+obj.id}
                        />
                        <Carousel.Caption>
                            <h3>{obj.title}</h3>
                            <p> {obj.description}</p>
                            <a className='btn' href={obj.link}>Load more<i className='fas fa-chevron-right'></i></a>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })
        }
      
    </Carousel>
    </section>
  )
}

export default Banner