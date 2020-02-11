import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

const ProjectDetails = props => {
  console.log("props2", props);
  // onst {projectDetails} =  props
  const { project, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title"> {project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action gret lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.firstLastName}
            </div>
            <div>2nd of feb, 2am</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container cetner">
        <p>Loading project ..</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log("projdetails", state);
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;

  const auth = state.firebase.auth;

  return { project, auth };

  // return {
  //   projectDetails: projects[id]
  // };
  // // return {
  //   projectDeets: projects
  // }
  // return state.firestore.ordered.projects.filter(project => {
  //   if (project.id === ownProps.match.params.id)
  //    return {projectDeets: }
  // });

  //  state.filter(project => {
  //    if()
  //  })
  //   // details: state.match.params.id
  // };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
