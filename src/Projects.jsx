import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiX } from 'react-icons/fi';
import { LuCalendarDays, LuLink, LuNotebookPen, LuGamepad2, LuYoutube, LuGithub, LuGalleryVerticalEnd, LuBookUser} from 'react-icons/lu';
import { SiAdobexd, SiArtstation } from 'react-icons/si';

/**
 * Projects.jsx
 * Minimalist project showcase with category filters and fade-in animation.
 * Edit project data as needed.
 */
function Projects() {
  // Ref for fade-in animation
  const sectionRef = useRef(null);
  // Filter state
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showModal, setShowModal] = useState(false); // local state to keep modal mounted for animation
  // Lightbox state for enlarged image
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isEnlargedImageOpen, setIsEnlargedImageOpen] = useState(false);
  const [isEnlargedImageZoomed, setIsEnlargedImageZoomed] = useState(false);

  // Show modal when isModalOpen becomes true
  useEffect(() => {
    if (isModalOpen) {
      setShowModal(true);
    } else if (showModal) {
      // If closing, wait for animation before unmounting
      const timer = setTimeout(() => setShowModal(false), 250); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [isModalOpen]);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

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

  /* Horizontal scrollable grid */
  useEffect(() => {
    const grid = document.querySelector('.projects-grid');
    if (!grid) return;
    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      grid.scrollLeft += e.deltaY;
    };
    grid.addEventListener('wheel', onWheel, { passive: false });
    return () => grid.removeEventListener('wheel', onWheel);
  }, []);

  useEffect(() => {
    if (isEnlargedImageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      const timer = setTimeout(() => {setEnlargedImage(null);}, 250);
      return () => clearTimeout(timer);
    }
  }, [isEnlargedImageOpen]);

  // Project data (edit as needed)
  const projects = [
    {
      id: 1,
      title: 'Crisis Revelations',
      subtitle: '3D Horror FPS Game',
      description: 'Join Ethan on his mission to find his daughter and uncover their dark fate.',
      cover: '/portfolio/assets/Crisis Revelations/Cover.png',
      images: [
        '/portfolio/assets/Crisis Revelations/Cover.png',
        '/portfolio/assets/Crisis Revelations/1.png',
        '/portfolio/assets/Crisis Revelations/2.png',
        '/portfolio/assets/Crisis Revelations/3.png',
        '/portfolio/assets/Crisis Revelations/4.png',
        '/portfolio/assets/Crisis Revelations/5.png',
        '/portfolio/assets/Crisis Revelations/6.png',
      ],
      technologies: ['Unity', 'C#'],
      category: ['Unity'],
      date: 'January 2024',
      contribution: 'Combat Mechanics, Enemies and Boss design, UI, Cinematic trailer',
      itchio: 'https://xmumgames.itch.io/crisis-revelations',
      youtube: 'https://youtu.be/WDCqchx4f8c',
    },
    {
      id: 2,
      title: 'Selfish Racing',
      subtitle: ' 3D Multiplayer Racing Game',
      description: 'Online multiplayer 3D game blending high-speed racing with a strategic hide-and-seek twist.',
      cover: '/portfolio/assets/Selfish Racing/Cover.png',
      images: [
        '/portfolio/assets/Selfish Racing/Cover.png',
        '/portfolio/assets/Selfish Racing/1.png',
        '/portfolio/assets/Selfish Racing/2.png',
        '/portfolio/assets/Selfish Racing/3.png',
        '/portfolio/assets/Selfish Racing/4.png',
        '/portfolio/assets/Selfish Racing/5.png',
        '/portfolio/assets/Selfish Racing/6.png',
      ],
      technologies: ['Unity', 'C#'],
      category: ['Unity'],
      date: 'July 2024',
      contribution: 'Game Mechanics, Cinematic trailer',
      youtube: 'https://youtu.be/fyJQHV5HU9s',
    },
    {
      id: 3,
      title: 'Matrix Mastery',
      subtitle: '2D Drag & Drop Puzzle Game',
      description: 'A 2D drag and drop puzzle game to learn how to manage time based on different tasks.',
      cover: '/portfolio/assets/Matrix Mastery/Cover.png',
      images: [
        '/portfolio/assets/Matrix Mastery/Cover.png',
        '/portfolio/assets/Matrix Mastery/1.png',
        '/portfolio/assets/Matrix Mastery/2.png',
        '/portfolio/assets/Matrix Mastery/3.png',
        '/portfolio/assets/Matrix Mastery/4.png',
        '/portfolio/assets/Matrix Mastery/5.png',
      ],
      technologies: ['Unity', 'C#', 'JavaScript'],
      category: ['Unity'],
      date: 'May 2025',
      contribution: 'Whole project',
    },
    {
      id: 4,
      title: 'Culinary Craft',
      subtitle: '3D Cooking Game',
      description: 'A 3D cooking game where you need to cook the food in the correct order to get the highest score.',
      cover: '/portfolio/assets/Culinary Craft/Cover.png',
      images: [
        '/portfolio/assets/Culinary Craft/Cover.png',
        '/portfolio/assets/Culinary Craft/1.png',
        '/portfolio/assets/Culinary Craft/2.png',
        '/portfolio/assets/Culinary Craft/3.png',
        '/portfolio/assets/Culinary Craft/4.png',
        '/portfolio/assets/Culinary Craft/5.png',
      ],
      technologies: ['Unity', 'C#', 'JavaScript'],
      category: ['Unity'],
      date: 'May 2025',
      contribution: 'Whole project',
    },
    {
      id: 5,
      title: 'Chemical Impact',
      subtitle: '3D RPG-based Educational Game',
      description: 'A 3D RPG-based educational game where you can learn about the chemical knowledge.',
      cover: '/portfolio/assets/Chemical Impact/Cover.png',
      images: [
        '/portfolio/assets/Chemical Impact/Cover.png',
      ],
      technologies: ['Unity', 'C#'],
      category: ['Unity'],
      date: 'December 2024',
      contribution: 'Player controller, Combat mechanics, Enemy and Boss design, Level Design, UI',
      github: 'https://github.com/Dannyy92/Chemical-Impact.git',
    },
    {
      id: 6,
      title: 'Run Explorer!',
      subtitle: '3D Endless Runner Game',
      description: 'A 3D endless runner game where you need to run as far as you can.',
      cover: '/portfolio/assets/Run Explorer/Cover.png',
      images: [
        '/portfolio/assets/Run Explorer/Cover.png',
        '/portfolio/assets/Run Explorer/1.png',
        '/portfolio/assets/Run Explorer/2.png',
        '/portfolio/assets/Run Explorer/3.png',
      ],
      technologies: ['Unity', 'C#'],
      category: ['Unity'],
      date: 'May 2024',
      contribution: 'Whole project',
      youtube: 'https://youtu.be/So5jaVzNi7M',
    },
    {
      id: 7,
      title: 'Ourcraft',
      subtitle: 'VR-based Mini RPG',
      description: 'A VR-based mini RPG where you need to complete quests and fight monsters.',
      cover: '/portfolio/assets/Ourcraft/Cover.png',
      images: [
        '/portfolio/assets/Ourcraft/Cover.png',
        '/portfolio/assets/Ourcraft/1.png',
        '/portfolio/assets/Ourcraft/2.png',
        '/portfolio/assets/Ourcraft/3.png',
        '/portfolio/assets/Ourcraft/4.png',
        '/portfolio/assets/Ourcraft/5.png',
        '/portfolio/assets/Ourcraft/6.png',
      ],
      technologies: ['VR', 'Unity', 'C#'],
      category: ['Unity'],
      date: 'November 2023',
      contribution: 'Combat Mechanics, Enemy and Boss design',
      youtube: 'https://youtu.be/zgO9qvSsuBQ',
    },
    {
      id: 8,
      title: 'Veil of the Ancients',
      subtitle: 'Game Environment Showcase',
      description: 'An ancient-chinese inspired environment design',
      cover: '/portfolio/assets/Veil of the Ancients/Cover.png',
      images: [
        '/portfolio/assets/Veil of the Ancients/Cover.png',
        '/portfolio/assets/Veil of the Ancients/1.png',
        '/portfolio/assets/Veil of the Ancients/2.png',
        '/portfolio/assets/Veil of the Ancients/3.png',
      ],
      technologies: ['Game Environment', 'Unity URP', 'Cinematic'],
      category: ['Game Environment', 'Unity', 'Cinematic'],
      date: 'June 2024',
      contribution: 'Whole project',
      youtube: 'https://youtu.be/mViFplvq0pA',
    },
    {
      id: 9,
      title: 'Forsaken Shrine',
      subtitle: 'Game Environment Showcase',
      description: 'An ancient-chinese inspired environment design',
      cover: '/portfolio/assets/Forsaken Shrine/Cover.png',
      images: [
        '/portfolio/assets/Forsaken Shrine/Cover.png',
        '/portfolio/assets/Forsaken Shrine/1.png',
      ],
      technologies: ['Game Environment', 'Unity', 'Cinematic'],
      category: ['Game Environment', 'Unity', 'Cinematic'],
      date: 'December 2023',
      contribution: 'Whole project',
      youtube: 'https://youtu.be/6wDDZ2lTEMs',
    },
    {
      id: 10,
      title: 'Unreal C++ Dev',
      subtitle: 'Gameplay Ability System and C++',
      description: 'Development using GAS and C++',
      cover: '/portfolio/assets/Unreal CPP Dev/Cover.png',
      images: [
        {type: 'video', src: '/portfolio/assets/Unreal CPP Dev/FeatureDemo.mp4'},
        '/portfolio/assets/Unreal CPP Dev/Cover.png',
        '/portfolio/assets/Unreal CPP Dev/1.png',
        '/portfolio/assets/Unreal CPP Dev/2.png',
        '/portfolio/assets/Unreal CPP Dev/3.png',
        '/portfolio/assets/Unreal CPP Dev/4.png',
      ],
      technologies: ['Unreal 5', 'C++', 'Gameplay Ability System', 'Blueprint'],
      category: ['Unreal', 'Game'],
      date: 'November 2025',
      contribution: 'Whole project',
      github: 'https://github.com/Dannyy92/RPGCPPDemo'
    },
    {
      id: 11,
      title: 'The Sunken Bastion',
      subtitle: 'Game Environment Showcase',
      description: 'A realistic and mysterious underwater environment design',
      cover: '/portfolio/assets/The Sunken Bastion/Cover.png',
      images: [
        '/portfolio/assets/The Sunken Bastion/Cover.png',
        '/portfolio/assets/The Sunken Bastion/1.png',
        '/portfolio/assets/The Sunken Bastion/2.png',
        '/portfolio/assets/The Sunken Bastion/3.png',
        '/portfolio/assets/The Sunken Bastion/4.png',
      ],
      technologies: ['Game Environment', 'Unreal 5', 'Cinematic'],
      category: ['Game Environment', 'Unreal', 'Cinematic'],
      date: 'December 2024',
      contribution: 'Whole project',
      youtube: 'https://youtu.be/trrjpsxrazU',
    },
    {
      id: 12,
      title: 'Combat Demo',
      subtitle: 'Combat and Enemy Design',
      description: 'Combat and enemy design based on GAS and C++',
      cover: '/portfolio/assets/Unreal Enemy Demo/Cover.png',
      images: [
        {type: 'video', src: '/portfolio/assets/Unreal Enemy Demo/gameplay.mp4'},
        {type: 'video', src: '/portfolio/assets/Unreal Enemy Demo/Demo.mp4'},
        '/portfolio/assets/Unreal Enemy Demo/Cover.png',
        '/portfolio/assets/Unreal Enemy Demo/1.png',
        '/portfolio/assets/Unreal Enemy Demo/2.png',
        '/portfolio/assets/Unreal Enemy Demo/3.png',
        '/portfolio/assets/Unreal Enemy Demo/4.png',
        '/portfolio/assets/Unreal Enemy Demo/5.png',
        '/portfolio/assets/Unreal Enemy Demo/6.png',
        '/portfolio/assets/Unreal Enemy Demo/7.png',
      ],
      technologies: ['Unreal 5', 'C++', 'Gameplay Ability System', 'Blueprint'],
      category: ['Unreal', 'Game'],
      date: 'November 2025',
      contribution: 'Whole project',
    },
    {
      id: 13,
      title: 'Hornet',
      subtitle: 'Hollow Knight: Silksong',
      description: 'Hollow Knight: Silksong fans art. Remade the character Hornet into 3D.',
      cover: '/portfolio/assets/Hornet/Cover.jpg',
      images: [
        {type: 'video', src: '/portfolio/assets/Hornet/Hornet.mp4'},
        '/portfolio/assets/Hornet/Cover.jpg',
        '/portfolio/assets/Hornet/1.jpg',
        '/portfolio/assets/Hornet/2.jpg'
      ],
      technologies: ['Maya', 'Unreal 5'],
      category: ['3D Modeling', 'Unreal'],
      date: 'September 2025',
      contribution: 'Whole project',
      artstation: 'https://www.artstation.com/artwork/3EW9aA',
    },
    {
      id: 14,
      title: 'Unreal Real-Time VFX',
      subtitle: '',
      description: 'Showcase of real-time VFX in Unreal Engine 5.',
      cover: '/portfolio/assets/UnrealRealTimeVFX/Cover.png',
      images: [
        {type: 'video', src: '/portfolio/assets/UnrealRealTimeVFX/LightningHeavy.mp4'},
      ],
      technologies: ['Unreal 5'],
      category: ['Unreal'],
      contribution: 'Whole project',
      date: 'September 2025',
    },
    {
      id: 15,
      title: 'Unreal Dynamic Materials',
      subtitle: '',
      description: 'Showcase of dynamic materials in Unreal Engine 5.',
      cover: '/portfolio/assets/UnrealMaterials/Cover.png',
      images: [
        {type: 'video', src: '/portfolio/assets/UnrealMaterials/StylizedGrass.mp4'},
        {type: 'video', src: '/portfolio/assets/UnrealMaterials/GroundCrack.mp4'},
        {type: 'video', src: '/portfolio/assets/UnrealMaterials/RockWithCrack.mp4'},
      ],
      technologies: ['Unreal 5'],
      category: ['Unreal'],
      contribution: 'Whole project',
      date: 'September 2025',
    }
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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

  const settingsVert = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    focusOnSelect: true,
    variableHeight: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Filtered projects by category
  const filteredProjects = filter === 'all' ? projects : projects.filter(p => Array.isArray(p.category) ? p.category.includes(filter) : p.category === filter);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="container">
        <h2>My Works</h2>
        {/* Project category filters */}
        <div className="project-filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'Unity' ? 'active' : ''} onClick={() => setFilter('Unity')}>Unity</button>
          <button className={filter === 'Unreal' ? 'active' : ''} onClick={() => setFilter('Unreal')}>Unreal</button>
        </div>
        {/* Projects grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                {/* Project image placeholder (replace src with your own image for production) */}
                <img src={project.cover} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setSelectedProject(project);
                        setIsModalOpen(true);
                      }}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            ))}
        </div>
      </div>
      {showModal && selectedProject && createPortal(
        <div className="modal-overlay" style={{zIndex: 2000}} onClick={() => setIsModalOpen(false)}>
          <div className={`modal-card${isModalOpen ? ' open' : ' close'}`} style={{zIndex: 3000}} onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <text>{selectedProject.title}</text>
              <button onClick={() => setIsModalOpen(false)} aria-label="Close modal"><FiX /></button>
            </div>
            <div className="modal-project-tech">
              {selectedProject.technologies.map((tech, idx) => (
                <span key={idx} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
            <div className="modal-project-slider">
            {selectedProject.images && selectedProject.images.length > 0 && (
              <Slider {...(selectedProject.id === 100 ? settingsVert : settings)} className="project-modal">
                {selectedProject.images.map((media, idx) => {
                  if (typeof media === "string") {
                    return (
                      <div key={idx}>
                        <img
                          src={media}
                          alt={`${selectedProject.title} screenshot ${idx + 1}`}
                          style={{ cursor: 'zoom-in' }}
                          onClick={() => {
                            setEnlargedImage(media);
                            setIsEnlargedImageOpen(true);
                          }}
                        />
                      </div>
                    );
                  } else if (media.type === "video") {
                    return (
                      <div key={idx}>
                        <video
                          controls
                          style={{
                            maxWidth: "100%",
                            maxHeight: "260px",
                            borderRadius: "16px",
                            border: "3px solid var(--primary)",
                            background: "#000"
                          }}
                        >
                          <source src={media.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    );
                  }
                  return null;
                })}
                </Slider>
              )}
            </div>
            <div className="modal-description">
              <div className="modal-description-icon">
                <LuNotebookPen size={24} />
              </div>
              <div className="modal-description-text">
                <p>{selectedProject.description}</p>
              </div>
            </div>
            <div className="modal-divider"></div>
            {/* Add more details as needed */}
            <div className="modal-date">
              <LuCalendarDays size={24} /> {selectedProject.date}
            </div>
            <div className="modal-date">
              <LuBookUser size={24} /> 
              <span style={{ opacity: "0.5" }}>
                Contributed:{""}
              </span>
              <span style={{ fontWeight: 500 }}>
                {selectedProject.contribution}
              </span>
            </div>
            <div className="modal-links">
              <LuLink size={24} />
                {(!selectedProject.itchio && !selectedProject.youtube && !selectedProject.youtube2 && !selectedProject.github && !selectedProject.adobeXd && !selectedProject.portfolio && !selectedProject.artstation) && (
                <span style={{marginLeft: '8px', opacity: 0.5}}>N/A</span>
              )}
              {selectedProject.itchio && (
                <button className="modal-link-button itch-io" onClick={() => window.open(selectedProject.itchio, '_blank')} target="_blank" rel="noopener noreferrer">
                  <LuGamepad2 size={24} /> Itch.io
                </button>
              )}
              {selectedProject.youtube && (
                <button className="modal-link-button youtube" onClick={() => window.open(selectedProject.youtube, '_blank')} target="_blank" rel="noopener noreferrer">
                  <LuYoutube size={24} /> Youtube
                </button>
              )}
              {selectedProject.youtube2 && (
                <button className="modal-link-button youtube" onClick={() => window.open(selectedProject.youtube2, '_blank')} target="_blank" rel="noopener noreferrer">
                  <LuYoutube size={24} /> Youtube
                </button>
              )}
              {selectedProject.github && (
                <button className="modal-link-button github" onClick={() => window.open(selectedProject.github, '_blank')} target="_blank" rel="noopener noreferrer">
                  <LuGithub size={24} /> Github
                </button>
              )}
              {selectedProject.adobeXd && (
                <button className="modal-link-button adobe-xd" onClick={() => window.open(selectedProject.adobeXd, '_blank')} target="_blank" rel="noopener noreferrer">
                  <SiAdobexd size={24} /> Adobe XD
                </button>
              )}
              {selectedProject.portfolio && (
                <button className="modal-link-button portfolio" onClick={() => window.open(selectedProject.portfolio, '_blank')} target="_blank" rel="noopener noreferrer">
                  <LuGalleryVerticalEnd size={24} /> Portfolio
                </button>
              )}
              {selectedProject.artstation && (
                <button className="modal-link-button artstation" onClick={() => window.open(selectedProject.artstation, '_blank')} target="_blank" rel="noopener noreferrer">
                  <SiArtstation size={24} /> Artstation
                </button>
              )}
            </div>
          </div>
        </div>
      , document.body)}
      {/* Lightbox for enlarged image */}
      {enlargedImage && createPortal(
        <div 
          className={isEnlargedImageOpen ? "lightbox-overlay open" : "lightbox-overlay close"}
          onClick={() => {
            setIsEnlargedImageOpen(false);
          }}
        >
          <div 
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <button 
              className="lightbox-close-btn"
              onClick={() => {
                setIsEnlargedImageOpen(false);
              }} 
              aria-label="Close enlarged image"
            >
              <FiX />
            </button>
            <img 
              className="lightbox-img"
              src={enlargedImage} 
              style={{cursor: isEnlargedImageZoomed ? 'zoom-out' : 'zoom-in', transform: isEnlargedImageZoomed ? 'scale(1.5)' : 'scale(1)', transition: 'transform 0.3s ease-in-out'}}
              alt="Enlarged project screenshot" 
              onClick={() => {
                setIsEnlargedImageZoomed(!isEnlargedImageZoomed);
              }}
            />
          </div>
        </div>
      , document.body)}
    </section>
  );
}

export default Projects; 
