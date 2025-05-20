import './App.css';
import ServiceCard from './ServiceCard';
import LeadershipCard from './LeadershipCard';
import ProjectCard from './ProjectCard';

function App() {
  const services = [
    {
      icon: '/ACMV.png',
      title: 'ACMV & HVAC Systems',
      tagColor: '#003366',
      description:
        'Design and installation of ductwork, piping, VRF systems, chilled water systems, and cleanroom air handling.',
    },
    {
      icon: '/Work.png',
      title: 'M&E Works',
      tagColor: '#2e7d32',
      description:
        'Turnkey mechanical and electrical engineering, utilities installation, and infrastructure upgrades.',
    },
    {
      icon: '/Cleanroom.png',
      title: 'Cleanroom Construction',
      tagColor: '#1565c0',
      description:
        'Design, construction, and validation of Class 10k and 100k cleanrooms.',
    },
    {
      icon: '/Maintenance.png',
      title: 'Preventive Maintenance',
      tagColor: '#ef6c00',
      description:
        'Comprehensive maintenance for ACMV, chiller plants, and utilities systems.',
    },
    {
      icon: '/ProjectManagement.png',
      title: 'Consultancy & Project Management',
      tagColor: '#6a1b9a',
      description:
        'System assessments, retrofit consultations, and full project lifecycle management.',
    },
  ];

  const projectGroups = [
    {
      title: 'Semiconductor & Cleanroom',
      tagColorStart: '#0052D4',
      tagColorEnd: '#65C7F7',
      projects: [
        { client: 'Sony Electronics Singapore', scope: 'ACMV and piping for cleanroom areas' },
        { client: 'Murata Electronics Singapore', scope: 'Dryer installation and rotor replacement' },
        { client: 'Tokuyama Singapore', scope: 'New cleanroom construction' },
        { client: 'A-STAR IME FSC', scope: 'Fire safety certification and utilities works' },
      ],
    },
    {
      title: 'Pharmaceutical & Life Sciences',
      tagColorStart: '#8e2de2',
      tagColorEnd: '#4a00e0',
      projects: [
        { client: 'GSK Singapore', scope: 'Lab fit-up and black utilities piping (SGD 8.6M)' },
        { client: 'Amgen Singapore', scope: 'QC lab works and ACMV systems' },
        { client: 'BioMedical Sciences Institutes', scope: 'Reinstatement and consultancy services' },
      ],
    },
    {
      title: 'Industrial & Manufacturing',
      tagColorStart: '#FF512F',
      tagColorEnd: '#F09819',
      projects: [
        { client: 'Shimano Singapore', scope: 'AHU upgrades' },
        { client: 'Skyworks Global', scope: 'Chiller and cooling tower replacements' },
        { client: 'Hamilton Aerospace', scope: 'Comprehensive chiller maintenance' },
      ],
    },
    {
      title: 'Commercial & Retail',
      tagColorStart: '#1D976C',
      tagColorEnd: '#93F9B9',
      projects: [
        { client: 'Big Box Pte Ltd', scope: 'M&E works, fire protection (SGD 44.9M)' },
        { client: 'Norinchukin Bank', scope: 'Office fit-out M&E services' },
        { client: 'SG @ Bedok', scope: 'Miscellaneous ACMV works' },
      ],
    },
    {
      title: 'Maintenance Contracts',
      tagColorStart: '#f7971e',
      tagColorEnd: '#ffd200',
      projects: [
        { client: 'IME SP2', scope: 'HVAC & system maintenance (2023–2025)' },
        { client: 'Hamilton Aerospace', scope: 'Chiller plant maintenance' },
        { client: 'Multi-site buildings', scope: 'Preventive maintenance contracts' },
      ],
    },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Key Projects</a></li>
          <li><a href="#leadership">Leadership</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Banner */}
      <header id="home" className="banner-header">
        <img src="/banner.png" alt="Banner" className="banner-image" />
        <div className="banner-box">
          <img src="/we_logo.png" alt="Logo" className="banner-logo" />
          <div className="banner-text">
            <h1>WE Engineering Pte Ltd</h1>
            <p className="subtitle">Company Profile</p>
            <div className="underline"></div>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="services" className="content-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tagColor={service.tagColor}
            />
          ))}
        </div>
      </section>

      {/* Key Projects */}
      <section id="projects" className="content-section">
        <h2>Key Projects</h2>
        <div className="projects-column">
          {projectGroups.map((group, index) => (
            <ProjectCard
              key={index}
              icon={group.icon}
              title={group.title}
              tagColor={group.tagColor}
              projects={group.projects}
            />
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="content-section leadership-section">
        <h2>Leadership</h2>
        <LeadershipCard
          photo="/Eric.png"
          name="Eric Auiyong"
          title="Managing Director"
          bio1="With over three decades of experience in HVAC, M&E, and cleanroom project management, Mr. Eric Auiyong has led high-compliance projects for semiconductor, pharmaceutical, research, and data center facilities."
          bio2="Formerly Project Director at Takasago Singapore Pte Ltd, he brings technical expertise, hands-on leadership, and a commitment to delivering exceptional value to clients."
        />
      </section>

      {/* Contact */}
      <section id="contact" className="content-section contact">
        <h2>Contact Us</h2>
        <p>Email: info@we-engineering.com.sg</p>
        <p>Address: WCEGA TOWER, 21 Bukit Batok Cres, #29-81, Singapore 658065</p>
      </section>

      {/* Footer */}
      <footer>
        &copy; {new Date().getFullYear()} WE Engineering Pte Ltd. All rights reserved.
      </footer>
    </div>
  );
}

export default App;