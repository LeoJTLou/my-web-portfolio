import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WhatICanDo from "../sections/WhatICanDo";
import QuoteSection from "../sections/QuoteSection";
import PortfolioSection from "../sections/PortfolioSection";
import ContactForm from "../sections/ContactForm";
import SuccessModal from "../components/Modal";

export default function HomePage () {
    return (
        <React.Fragment>
            <HeroSection />
            <WhatICanDo />
            <AboutSection />
            <QuoteSection />
            <PortfolioSection />
            <ContactForm />
            <SuccessModal 
                title={"Message Sent!"}
                body={"Thank you for reaching out! I will get back to you as soon as possible."}
            />
        </React.Fragment>
    )
}