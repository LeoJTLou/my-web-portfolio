import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import portfoliosData from '../data/projects';

import ProjectHero from '../sections/ProjectHeroSection';
import CountdownSection from '../sections/CountdownSection';

export default function PortfolioPage() {
  const { slug } = useParams();

  // Look up the portfolio using the slug
  const portfolio = portfoliosData.find((p) => p.slug === slug);

  // If no portfolio is found, display a 404 message
  if (!portfolio) {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <h2 className="mb-3">Project Not Found</h2>
        <p className="mb-4">Sorry, the project you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary">Go Back Home</Link>
      </div>
    );
  }

  return (
    <div>
        <ProjectHero
            title={portfolio.title}
            description={portfolio.description}
            image={portfolio.image}
            liveUrl={portfolio.liveUrl}
            sourceUrl={portfolio.sourceUrl}
        />
        <CountdownSection
            title={`Launching ${portfolio.title} In:`}
            targetDate={portfolio.launchdate}
        />
    </div>
  );
}