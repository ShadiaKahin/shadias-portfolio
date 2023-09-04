import image from '../assets/background-pic.jpg'
import './hero.css'

function Hero() {
    return (
        <div className="hero">
            <div className="image-wrapper">
                <img className="background-image" src={image} alt="floral pic"></img>
            </div>

            <div className="hero-content">
                Hi, I'm Shadia Kahin
                <br />
                <br />
                A Software Developer
            </div>

        </div>
    )
}

export default Hero;