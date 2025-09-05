import Contact from "../components/Contact";
import Skirk from "../assets/GtsiSJWWYAAnaTu.webp";

export default function ContactForm () {
    return (
        <section id="contact">
            <div className="container py-5">
                <h2 className="text-center py-3 fw-bold">Contact Me</h2>
                <p className="text-center pb-4">Please note that it may take up to 3 business days for me to respond. Thank you for your patience.</p>
                <div className="row">
                    <div className="col-md-6">
                        <img src={Skirk} alt="Skirk" className="img-fluid rounded py-3" style={{ maxHeight: "450px", objectFit: "cover" }} />
                    </div>
                    <div className="col-md-6">
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
}