import MySelfiePicture from "../assets/myPicture1.JPG";

export default function AboutSection() {
    return (
        <section id="about">
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="fw-bold">About Me</h2>
                        <p className="fs-5">Hi, I’m Leo—a web developer based in Vancouver, Canada. I help small businesses and brands grow online by creating sleek, user-friendly websites that turn visitors into customers.</p>

                        <p className="fs-5">I’ve been working solo as a developer for over five years, building projects from the ground up and handling everything from design and coding to digital marketing. This experience has taught me not just how to build functional websites, but how to create digital experiences that solve real problems.</p>

                        <p className="fs-5">Beyond web development, I’m actively exploring hands-on technical pursuits like electrical work, engineering, and aviation. When I’m not building or learning, you’ll usually find me playing video games or streaming. I’m also starting out as a content creator and enjoy discussing topics like technology, science, history, art, and basically whatever I feel like talking about.</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img
                            src={MySelfiePicture}
                            alt="Leo Lou's selfie from 2019"
                            className="img-fluid rounded"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}