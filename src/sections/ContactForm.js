import Contact from "../components/Contact";

export default function ContactForm () {
    return (
        <section id="contact">
            <div className="container py-5">
                <h2 className="text-center py-3 fw-bold">Contact Me</h2>
                <div className="row">
                    <div className="col-md-6">
                        
                    </div>
                    <div className="col-md-6">
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}