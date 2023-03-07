import './Projects.css'
import image1 from '../assets/noughts-and-crosses.png'
import image2 from '../assets/dictionary-app.png'
import image3 from '../assets/calculator-app.png'
import image4 from '../assets/the-changing-room.png'





export default function Projects() {
    return (
        <div className="projects-section">
            <h1 className='projects-header'>Projects</h1>
            <div className='image-container'>
                <div>
                    <a href='https://cool-sawine-53e86b.netlify.app/'><img className='image' src={image1} alt="noughts and crosses" /></a>
                    A frontend noughts and crosses game using HTML and CSS.
                </div>
                <div>
                    <img className='image' src={image2} alt="dictionary" />
                    A Dictionary app using a public API, ReactJS, CSS
                </div>
                <div>
                    <img className='image' src={image3} alt="calculator" />
                </div>
                <div>
                    <img className='image' src={image4} alt="clothing website"/>
                </div>
            </div>
        </div>


    )
}

