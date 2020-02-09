const initState = {
  projects: [
    { id: "1", title: "first ", content: "blah, blah, blash" },
    { id: "2", title: "second ", content: "blah, blah, blash" },
    { id: "3", title: "lorem ", content: "blah, blah, blash" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }
  return state;
};

export default projectReducer;
