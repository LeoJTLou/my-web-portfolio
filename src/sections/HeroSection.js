import { Link } from 'react-router-dom'
import MyPicture from '../assets/IMG_3511.jpg'

export default function HeroSection () {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="display-4 fw-bold">Hi, I am Leo Lou</h1>
                    <h3>I am a <span className="fw-bold">Web Developer</span></h3>
                    <p className="fs-5">It is very nice to meet you! Feel free to look around and see some of my work below.</p>
                    <Link className="btn btn-primary" to="#projects">
                        View My Work
                    </Link>
                </div>
                <div className="col-md-6 text-center">
                    <img
                        src={MyPicture}
                        alt="Leo Lou"
                        className="img-fluid"
                        style={{ maxWidth: '300px', borderRadius: '50%' }}
                    />
                </div>
            </div>
        </div>
    )
}