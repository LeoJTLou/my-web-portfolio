import { Link } from 'react-router-dom'
import MyPicture from '../assets/IMG_3511.jpg'

export default function HeroSection () {
    return (
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                    <h1 className="display-4 fw-bold">Hi, I am Leo Lou</h1>
                    <h2 className="h3">I am a <span className="fw-bold">Web Developer</span> specializing in React and user-friendly web solutions.</h2>
                    <p className="fs-5">
                        I create interactive websites and apps that are clean, responsive, and easy to use. <span className="fw-bold">Check out my projects below</span> to see what I’ve built.</p>
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