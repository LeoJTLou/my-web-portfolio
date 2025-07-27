import ProjectCard from "../components/ProjectCard";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Project One",
      imageUrl: "/images/project1.jpg",  // Replace with your image path
      description: "A brief description of Project One.",
      projectLink: "#",
    },
    {
      title: "Project Two",
      imageUrl: "/images/project2.jpg",
      description: "A brief description of Project Two.",
      projectLink: "#",
    },
  ];

  return (
    <section className="container my-5" id="projects">
      <h2 className="mb-4 text-center">My Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-6" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
