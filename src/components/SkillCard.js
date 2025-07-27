export default function SkillCard({ iconClass, title, description, colorClass }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 text-center shadow border-0">
        <div className="card-body">
          <i className={`${iconClass} fa-4x mb-3 ${colorClass}`} aria-hidden="true"></i>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}