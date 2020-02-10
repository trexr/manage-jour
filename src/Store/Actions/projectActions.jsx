export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //make async call to db
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "t",
        authorLastName: "t",
        authorId: 12321,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT", err });
      });
  };
};
