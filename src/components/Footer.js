import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    let [show,setShow] = useState(false)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY>400){
                setShow(true);
            }
            else{
                setShow(false)
            }
        })
    },[])
    
    let gotop=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        }

        )
    }
  return (
    <Container fluid className='foot'>
        <div className='cpy'>&copy; 2024 MySite. All Rights Reserved.</div>
        <div className='social'>
            <ul className='social-list'>
                <li className='soc-lists'><a href="www.facebook.com" className='anchor'><i className="fa-brands fa-facebook con"></i></a></li>
                <li className='soc-lists'><a href="www.twitter.com" className='anchor'><i className="fa-brands fa-square-x-twitter con"></i></a></li>
                <li className='soc-lists'><a href= "www.linkedin.com" className='anchor'><i className="fa-brands fa-linkedin con"></i></a></li>
            </ul>
        </div>
        {
            show && (<div className='go-top' onClick={gotop}></div>)
        }
    </Container>
  )
}

export default Footer