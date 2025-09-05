import { Link } from 'react-router-dom';
import SkillCard from '../components/SkillCard';

export default function WhatICanDo() {
  const skills = [
    {
      iconClass: 'fas fa-code',
      title: 'Web Developer',
      description: 'Building responsive, fast, and scalable web applications using modern technologies and best practices.',
      colorClass: 'text-primary',
    },
    {
      iconClass: 'fas fa-paint-brush',
      title: 'Web & UI Designer',
      description: 'Crafting beautiful, user-friendly designs and interfaces that communicate your brand effectively.',
      colorClass: 'text-success',
    },
    {
      iconClass: 'fas fa-bullhorn',
      title: 'Digital Marketer',
      description: 'Creating impactful marketing strategies to grow your online presence and connect with your audience.',
      colorClass: 'text-warning',
    },
  ];

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 fw-bold">What I Can Do</h2>
      <p className="text-center mb-5">I specialize in web development, design, and digital marketing. If you'd like a full breakdown of my skills and experience, feel free to reach out or view my <Link to="/resume">resume</Link>.</p>
      <div className="row justify-content-center">
        {skills.map(({ iconClass, title, description, colorClass }) => (
          <SkillCard
            key={title}
            iconClass={iconClass}
            title={title}
            description={description}
            colorClass={colorClass}
          />
        ))}
      </div>
    </section>
  );
}