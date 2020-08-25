export const getProjects = state => state.firestore.ordered.projects;

export const getProject = id => state => {
    const projects = state.firestore.data.projects;
    return projects ? projects[id] : null;
};