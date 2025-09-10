import Countdown from "../components/Countdown";

export default function CountdownSection({ title, targetDate }) {
  const target = new Date(targetDate);
  const now = new Date();

  // Only render if targetDate is in the future
  if (target <= now) {
    return null;
  }

  return (
    <section
      className="text-center"
      style={{ backgroundColor: "#f3f3f3ff", paddingTop: "3rem", paddingBottom: "3rem" }}
    >
      <h2 className="text-2xl font-bold mb-3">{title}</h2>
      <Countdown targetDate={targetDate} />
    </section>
  );
}