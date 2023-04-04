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
                    <a href='https://beautiful-zabaione-9b86e4.netlify.app/'><img className='image' src={image2} alt="dictionary" /></a>
                    A Dictionary app using a public API, ReactJS, CSS.
                </div>
                <div>
                    <a href='https://my-calculator-app-red.vercel.app/'><img className='image' src={image3} alt="calculator" /></a>
                    A frontend React app using react, Javascript, HTML and CSS.
                </div>
                <div>
                    <a href='https://the-changing-room.vercel.app'><img className='image' src={image4} alt="clothing website" /></a>
                    a Fullstack Vue.js app with Supabase backend.
                </div>
            </div>
        </div>


    )
}

