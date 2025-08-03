import React, { useEffect } from 'react';
import './Team.css';

const Team = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const teamMembers = [
        {
            name: "Serra",
            role: "Developer & Founder",
            description: "Passionate about food and technology, bringing people together through culinary experiences.",
            github: "https://github.com/Serra-naz",
            profileImage: "https://via.placeholder.com/200x200?text=Photo",
            skills: ["React", "Node.js", "Product Strategy"]
        },
        {
            name: "Timea",
            role: "Developer & Founder",
            description: "Full-stack developer with expertise in mobile and web technologies, building scalable solutions.",
            github: "https://github.com/TimeaPortmann", 
            profileImage: "https://via.placeholder.com/200x200?text=Photo", 
            skills: ["React Native", "Backend Development", "Database Design"]
        },
        {
            name: "Selina",
            role: "Developer & Founder",
            description: "Creative designer focused on user experience and bringing beautiful, intuitive interfaces to life.",
            github: "https://github.com/Selimo100",
            profileImage: "https://via.placeholder.com/200x200?text=Photo", 
            skills: ["UI Design", "UX Research", "Prototyping"]
        },
        {
            name: "Emma",
            role: "Social Media Manager",
            description: "Creative designer focused on user experience and bringing beautiful, intuitive interfaces to life.",
            github: "https://github.com/Ewoehl",
            profileImage: "https://via.placeholder.com/200x200?text=Photo",
            skills: ["UI Design", "UX Research", "Prototyping"]
        }
    ];

    return (
        <div className="team-page">
            <div className="container">
                <div className="team-header">
                    <h1 className="team-title">Meet Our Team</h1>
                    <p className="team-description">
                        We're a passionate group of food lovers and tech enthusiasts working together to revolutionize
                        how people discover and share recipes based on their cravings.
                    </p>
                </div>

                {/* <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card">
                            <div className="member-image">
                                <img src={member.profileImage} alt={member.name} />
                            </div>
                            <div className="member-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                                <p className="member-description">{member.description}</p>
                                <div className="member-skills">
                                    {member.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                                <div className="member-links">
                                    <a
                                        href={member.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-link"
                                    >
                                        <span className="github-icon">🐙</span>
                                        View GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="team-cta">
                    <h2>Join Our Journey</h2>
                    <p>
                        Interested in working with us? We're always looking for talented individuals who share our passion
                        for food and technology.
                    </p>
                    <a href="mailto:yumigo.information@gmail.com" className="contact-btn">
                        Get In Touch
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Team;
