import 'bootstrap/dist/css/bootstrap.min.css';
import Apphead from './components/Apphead';
import Banner from './components/Banner';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Learn from './components/Learn';
import Cont from './components/Cont';
import Footer from './components/Footer';
// import Learning from './components/Learning';
// import Contact from './components/Contact';


const App = () => {
  return (
    <div className='App'>
    <header id='header'>
      <Apphead/>
    </header>
    <main>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Learn/>
      <Cont/>
      {/* <Learning/> */}
      {/* <Contact/> */}
    </main>
    <footer>
      <Footer/>
    </footer>
    </div>
  )
}

export default App