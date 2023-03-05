import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import './Home.css'

export default function Home() {
    return (
        <div className='home'>
            <About />
            <Skills />
            <Projects />
        </div>
    )
}
