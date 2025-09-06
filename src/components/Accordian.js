import AccordianItem from "./AccordianItem";
import WorkExperienceItem from "./WorkExperienceItem";
import experiences from "../data/experiences";
import EducationItem from "./EducationItem";
import education from "../data/education";
import LicenseItem from "./LicenseItem";
import licenses from "../data/licenses";
import VolunteerItem from "./VolunteerItem";
import volunteer from "../data/volunteer";
import SkillCard from "./SkillCard";
import skills from "../data/skills";

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
        <section>
          {education.map((edu, index) => (
            <EducationItem key={index} {...edu} />
          ))}
        </section>
      ),
      isOpen: false,
    },
    {
      id: "three",
      header: "Licenses & Certifications",
      body: (
        <section>
          {licenses.map((lic, index) => (
            <LicenseItem key={index} {...lic} />
          ))}
        </section>
      ),
      isOpen: false,
    },
    {
      id: "four",
      header: "Volunteering",
      body: (
        <section>
          {volunteer.map((vol, index) => (
            <VolunteerItem key={index} {...vol} />
          ))}
        </section>
      ),
      isOpen: false,
    },
    {
      id: "five",
      header: "Skills",
      body: (
        <section>
          <div className="row">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>
      ),
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