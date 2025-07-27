import QuoteImage from '../assets/artificial-intelligence-3382507_1920.jpg';

export default function QuoteSection() {
    return (
        <section className="quote-block text-white text-center d-flex align-items-center" style={{
        backgroundImage: `url(${QuoteImage})`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '300px'
        }}>
            <div className="overlay position-absolute top-0 start-0 w-100 h-100" style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                zIndex: 1
            }}></div>

            <div className="container position-relative" style={{ zIndex: 2 }}>
                <blockquote className="blockquote mb-0 fs-4 fw-semibold">
                <p>"Design is not just what it looks like and feels like. Design is how it works."</p>
                <footer className="blockquote-footer text-white-50 mt-2">Steve Jobs</footer>
                </blockquote>
            </div>
        </section>
    );
}