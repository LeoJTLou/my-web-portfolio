import React from 'react';

export default function ProjectHero({ title, description, image, liveUrl, sourceUrl }) {
  return (
    <section className="container py-5">
      <div className="row align-items-center">
        
        {/* Left Column */}
        <div className="col-md-6 text-center text-md-start">
          <h1 className="display-5 fw-bold mb-3">{title}</h1>
          <p className="lead mb-4">{description}</p>
          
          <div className="btn-group">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View Project
              </a>
            )}
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary"
              >
                View Source
              </a>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img 
            src={image} 
            alt={title} 
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}