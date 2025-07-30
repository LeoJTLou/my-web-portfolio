import AccordianItem from "./AccordianItem";
import WorkExperienceItem from "./WorkExperienceItem";
import experiences from "../data/experiences";

export default function Accordian() {
  const items = [
    {
      id: "one",
      header: "Experience",
      body: (
        <section>
          {experiences.map((exp, index) => (
            <WorkExperienceItem key={index} {...exp} />
          ))}
        </section>
      ),
      isOpen: true,
    },
    {
      id: "two",
      header: "Education",
      body: (
        <>
          <strong>This is the second item's accordion body.</strong> You can add
          any HTML content here.
        </>
      ),
      isOpen: false,
    },
    {
      id: "three",
      header: "Licenses & Certifications",
      body: "This is the third item's accordion body.",
      isOpen: false,
    },
    {
      id: "four",
      header: "Volunteering",
      body: "This is the fourth item's accordion body.",
      isOpen: false,
    },
    {
      id: "five",
      header: "Skills",
      body: "This is the fifth item's accordion body.",
      isOpen: false,
    },
  ];

  return (
    <div className="accordion" id="myAccordion">
      {items.map((item) => (
        <AccordianItem key={item.id} {...item} />
      ))}
    </div>
  );
}