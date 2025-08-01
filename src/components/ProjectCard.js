export default function ProjectCard({ title, imageUrl, description, projectLink }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto">
          View Project
        </a>
      </div>
    </div>
  );
}