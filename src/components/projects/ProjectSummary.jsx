import React from "react";
//using moment js to deal with dates

const ProjectSummary = ({ project }) => {
  console.log(project.createAt.toDate());
  return (
    <div className="card project-summary z-depth-1">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{project.title}</span>
        <p> {project.content}</p>
        <p>
          Posted by {project.authorFirstName} {project.authorLastName}
        </p>
        <p className="grey-text">{project.createAt.toDate().toDateString()}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
