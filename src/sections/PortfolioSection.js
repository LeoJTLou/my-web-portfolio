import ProjectCard from "../components/ProjectCard";

export default function PortfolioSection() {
  const projects = [
    {
      title: "Project One",
      imageUrl: "/images/project1.jpg",
      description: "This unnamed project is a mobile game inspired by games like Genshin Impact and Honkai Star Rail. It is a turn-based RPG with a unique combat system and an engaging storyline.",
      projectLink: "#",
    },
    {
      title: "Inferneo AI",
      imageUrl: "/images/project2.jpg",
      description: "This is an AI-powered companion that can help you with various tasks, be your friend, and even play games with you. Inspired by apps like Grok AI. Currently only one model is available.",
      projectLink: "#",
    },
  ];

  return (
    <section className="container my-5" id="projects">
      <h2 className="mb-4 text-center fw-bold">My Projects</h2>
      <p className="text-center">Below are some of my most recent projects. All projects are currently still in development. So please be patient with me.</p>
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
