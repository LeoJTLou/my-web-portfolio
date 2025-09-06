import { Link } from "react-router-dom";
import Accordian from "../components/Accordian";
import ResumeProfile from "../assets/Profile.pdf";

export default function Resume() {
    return (
        <section id="resume">
            <div className="container my-5">
                <h2 className="text-center mb-4">My Resume</h2>
                <p className="text-center mb-5">You can view and download my resume below.</p>
                <div className="text-center mb-5">
                    <button className="btn btn-primary mb-4">
                        <a href={ResumeProfile} download className="text-white text-decoration-none">
                            Download Resume
                        </a>
                    </button>
                    <Link to="/" className="btn btn-secondary mb-4 ms-3">
                        Back to Home
                    </Link>
                </div>
                <Accordian/>
            </div>
        </section>
    );
}