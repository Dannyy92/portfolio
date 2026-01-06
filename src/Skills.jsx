import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SiUnity, SiUnrealengine, SiAutodeskmaya, SiBlender, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiCplusplus, SiHtml5, SiCss3, SiFigma, SiAdobexd } from 'react-icons/si';
import { LuUserRoundCheck, LuUsers, LuLanguages } from 'react-icons/lu';

/**
 * Skills.jsx
 * Minimalist skills section with icons for each skill (no level bars), using react-slick for carousel.
 * Edit skills and icons as needed.
 */
function Skills() {
  // Ref for fade-in animation
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Skill categories and icons
  const skillCategories = [
    {
      title: 'Personal',
      skills: [
        { name: 'Responsible', icon: <LuUserRoundCheck size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Teamwork', icon: <LuUsers size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: 'Game Engine',
      skills: [
        { name: 'Unity', icon: <SiUnity size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Unreal Engine', icon: <SiUnrealengine size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: '3D Software',
      skills: [
        { name: 'Maya', icon: <SiAutodeskmaya size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Blender', icon: <SiBlender size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: 'Creative Tools',
      skills: [
        { name: 'Photoshop', icon: <SiAdobephotoshop size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'After Effects', icon: <SiAdobeaftereffects size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: 'Programming',
      skills: [
        { name: 'Unity C#', icon: <SiUnity size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'C & C++', icon: <SiCplusplus size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML', icon: <SiHtml5 size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'CSS', icon: <SiCss3 size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: 'UI/UX',
      skills: [
        { name: 'Adobe XD', icon: <SiAdobexd size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Figma', icon: <SiFigma size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
    {
      title: 'Languages',
      skills: [
        { name: 'English', icon: <LuLanguages size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Chinese', icon: <LuLanguages size={24} color="var(--icon-color)" variant="Linear" /> },
        { name: 'Malay', icon: <LuLanguages size={24} color="var(--icon-color)" variant="Linear" /> },
      ],
    },
  ];

  // Slick carousel settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    variableHeight: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="skills-container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          <Slider {...settings}>
            {skillCategories.map((category, idx) => (
              <div key={idx} className="skill-category">
                <h3>{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="skill-item">
                      <span className="skill-icon">{skill.icon}</span>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Skills; 
