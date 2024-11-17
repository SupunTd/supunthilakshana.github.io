import React from 'react';

const Projects = () => {
    const projectList = [
        { title: 'Project 1', description: 'Description for Project 1' },
        { title: 'Project 2', description: 'Description for Project 2' },
    ];

    return (
        <section className="projects">
            <h1>My Projects</h1>
            <div className="project-cards">
                {projectList.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
