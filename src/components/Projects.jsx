import './Projects.css'
import image1 from '../assets/noughts-and-crosses.png'
import image2 from '../assets/dictionary-app.png'
import image3 from '../assets/calculator-app.png'
import image4 from '../assets/the-changing-room.png'





export default function Projects() {
    return (
        // <div className="projects-section">
        // <h1 className='projects-header'>Projects</h1>
        <div className='grid'>

            <a className='card' href='https://cool-sawine-53e86b.netlify.app/'>
                <img src={image1} alt="noughts and crosses" />
                <h2>Noughts and Crosses</h2>
            </a>

            <a className='card' href='https://beautiful-zabaione-9b86e4.netlify.app/'>
                <img src={image2} alt="dictionary" />
                <h2>Dictionary</h2>
            </a>

            <a className='card' href='https://my-calculator-app-red.vercel.app/'>
                <img src={image3} alt="calculator" />
                <h2>Calculator</h2>
            </a>

            <a className='card' href='https://the-changing-room.vercel.app'>
                <img src={image4} alt="clothing website" />
                <h2>The Changing Room</h2>
            </a>
        </div>
        // </div>


    )
}

