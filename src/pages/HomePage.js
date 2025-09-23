import React, {useState} from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WhatICanDo from "../sections/WhatICanDo";
import QuoteSection from "../sections/QuoteSection";
import PortfolioSection from "../sections/PortfolioSection";
import ContactForm from "../sections/ContactForm";
import SuccessModal from "../components/Modal";

export default function HomePage () {
    const [formStatus, setFormStatus] = useState(null);
    return (
        <React.Fragment>
            <HeroSection />
            <WhatICanDo />
            <AboutSection />
            <QuoteSection />
            <PortfolioSection />
            <ContactForm 
                setFormStatus={setFormStatus}
            />
            <SuccessModal 
                title={formStatus ? "Message Sent!" : "Error!"}
                body={formStatus ? "Thank you for reaching out! I will get back to you as soon as possible." : "There was an error sending your message. Please try again later."}
            />
        </React.Fragment>
    )
}