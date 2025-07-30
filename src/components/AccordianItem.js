export default function AccordianItem({ id, header, body, isOpen }) {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading-${id}`}>
          <button
            className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse-${id}`}
            aria-expanded={isOpen}
            aria-controls={`collapse-${id}`}
          >
            {header}
          </button>
        </h2>
        <div
          id={`collapse-${id}`}
          className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
          aria-labelledby={`heading-${id}`}
          data-bs-parent="#myAccordion"
        >
          <div className="accordion-body">{body}</div>
        </div>
      </div>
    );
  }  