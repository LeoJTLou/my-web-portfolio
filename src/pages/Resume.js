import Accordian from "../components/Accordian";

export default function Resume() {
    return (
        <section id="resume">
            <div className="container my-5">
                <h2 className="text-center mb-4">My Resume</h2>
                <p className="text-center mb-5">You can view and download my resume below.</p>
                <Accordian/>
            </div>
        </section>
    );
}