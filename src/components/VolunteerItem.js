import React from "react";

const VolunteerItem = ({ organization, role, cause, startYear, endYear, description, logo }) => {
  return (
    <div className="card border-0 mb-3">
      <div className="row g-3">
        {/* Logo */}
        <div className="col-auto">
          <img
            src={logo}
            alt={organization}
            className="rounded"
            style={{ width: "56px", height: "56px", objectFit: "contain" }}
          />
        </div>

        {/* Content */}
        <div className="col">
          <h6 className="mb-1 fw-semibold">{organization}</h6>
          <div className="text-muted">{role}</div>
          <div className="text-muted" style={{ fontSize: "0.875rem" }}>
            {startYear} – {endYear}
          </div>
          {cause && (
            <div className="text-muted" style={{ fontSize: "0.875rem" }}>
              Cause: {cause}
            </div>
          )}
          {description && (
            <p className="mb-0 mt-1 text-muted" style={{ fontSize: "0.875rem" }}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VolunteerItem;