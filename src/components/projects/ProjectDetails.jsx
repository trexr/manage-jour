import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Proj Tile - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            nemo vel nam tempore omnis maxime. Laudantium a explicabo numquam
            assumenda pariatur, iste neque, optio dicta ipsum molestiae rem ut
            nihil.
          </p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>Posted by t</div>
          <div>2nd of feb, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
