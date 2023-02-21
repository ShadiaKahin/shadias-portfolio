import './Projects.css'
import image1 from '../assets/noughts-and-crosses.png'
import image2 from '../assets/dictionary-app.png'
import image3 from '../assets/calculator-app.png'





export default function Projects() {
    return (
        <div className="projects-section">
            <h1>Projects section</h1>
            Projects
            <div>
                <img className='image' src={image1} alt="noughts and crosses" />
            </div>
            <div>
                <img className='image' src={image2} alt="dictionary" />
            </div>
            <div>
                <img className='image' src={image3} alt="calculator" />
            </div>
        </div>
        
        
    )
}

