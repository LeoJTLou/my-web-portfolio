import MySelfiePicture from "../assets/myPicture1.JPG";

export default function AboutSection() {
    return (
        <section>
            <div className="container my-5">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2 className="fw-bold">About Me</h2>
                        <p className="fs-5">Hey there! I'm a web developer, web designer, graphic designer, and digital marketer based in Vancouver, Canada. I love bringing creative ideas to life—whether it's building sleek websites, crafting eye-catching visuals, or helping brands grow online. I'm passionate about helping people with their digital needs and making tech more approachable and fun.</p>

                        <p className="fs-5">When I'm not working on projects, my favourite pastimes are playing video games, going out for hikes when the weather is nice, hanging out with friends, and watching YouTube videos. I'm also currently in the process of starting out as a content creator myself. On top of that, I always love yapping about a variety of different topics such as technology, science, history, and art. I am also planning future travels too. There are still so many countries I’d love to explore!</p>
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