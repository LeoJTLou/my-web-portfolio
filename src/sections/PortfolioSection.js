import ProjectCard from "../components/ProjectCard";
import GiftBox from "../assets/anime-girl-gift.jpg";
import AnimeStudent from "../assets/cute-anime-girl-glasses.jpg";
import IdleCapitalistPicture from "../assets/anime-idle-tycoon.jpg";
import portfoliosData from "../data/projects";

// Add a featured project section for your flagship project (still in development)

export default function PortfolioSection() {
  const projects = [
    {
      title: "The Idle Capitalist",
      imageUrl: IdleCapitalistPicture,
      description: "Inspired by the game 'Adventure Capitalist', this is a game where you can build your own business empire. The game is still in development, but you can play it on my website.",
      projectLink: "Portfolio/" + portfoliosData[0].slug,
    },
    {
      title: "Quiz Me",
      imageUrl: AnimeStudent,
      description: "This is a quiz app that allows you to create and take quizzes. You can create your own quizzes and share them with your friends. The app is still in development, but you can play it on my website.",
      projectLink: "Portfolio/" + portfoliosData[1].slug,
    },
    {
      title: "Loot Box Simulator",
      imageUrl: GiftBox,
      description: "This is a simulator that simulates the real odds of popular loot boxes, mystery boxes, and gacha. It is a simple app in which you can open boxes and see what you get, see the odds, and track your spending.",
      projectLink: "Portfolio/" + portfoliosData[2].slug,
    },
  ];

  return (
    <section className="container my-5" id="projects">
      <h2 className="mb-4 text-center fw-bold">My Projects</h2>
      <p className="text-center">Below are some of my most recent projects. All projects are currently still in development. So please be patient with me. Expect some bugs and glitches.</p>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4" key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
