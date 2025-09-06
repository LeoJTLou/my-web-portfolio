import React from "react";

const LicenseItem = ({ name, organization, issueDate, expirationDate, credentialId, credentialUrl, logo }) => {
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
          <h6 className="mb-1 fw-semibold">{name}</h6>
          <div className="text-muted">{organization}</div>
          <div className="text-muted" style={{ fontSize: "0.875rem" }}>
            Issued {issueDate}
            {expirationDate ? ` · Expires ${expirationDate}` : ""}
          </div>
          {credentialId && (
            <div className="text-muted" style={{ fontSize: "0.875rem" }}>
              Credential ID: {credentialId}
            </div>
          )}
          {credentialUrl && (
            <a
              href={credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-block mt-1"
              style={{ fontSize: "0.875rem" }}
            >
              See credential
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LicenseItem;