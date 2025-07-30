import React from 'react';

const formatDate = (date) => {
  return date.toLocaleString('default', { month: 'short', year: 'numeric' });
};

const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}${months} mo${months !== 1 ? 's' : ''}`;
};

export default function WorkExperienceItem({
  logo,
  jobTitle,
  company,
  employmentType,
  startDate,
  endDate,
  location,
  achievements = [],
  technicalHighlights = [],
}) {
  const formattedStart = formatDate(startDate);
  const isCurrent = endDate === null;
  const formattedEnd = isCurrent ? 'Present' : formatDate(endDate);
  const duration = calculateDuration(startDate, endDate);

  return (
    <div className="experience-item">
      {/* Left Column: Logo */}
      <div className="experience-logo">
        {logo && (
          <img
            src={logo}
            alt={`${company} logo`}
            className="experience-logo-img"
          />
        )}
      </div>

      {/* Right Column: Content */}
      <div className="experience-content">
        <h4 className="experience-title">{jobTitle}</h4>
        <p className="experience-meta">
          {company} · {employmentType} · <span className="experience-location">{location}</span>
        </p>
        <p className="experience-dates">
          {formattedStart} – {formattedEnd} · {duration}
        </p>

        {achievements.length > 0 && (
          <div className="experience-section">
            <strong>Achievements:</strong>
            <ul className="experience-list">
              {achievements.map((item, index) => (
                <li key={`achievement-${index}`} className="experience-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {technicalHighlights.length > 0 && (
          <div className="experience-section">
            <strong>Technical Highlights:</strong>
            <ul className="experience-list">
              {technicalHighlights.map((item, index) => (
                <li key={`tech-${index}`} className="experience-list-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}