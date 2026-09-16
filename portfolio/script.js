const projects = [
  { title: "Age Calculator", description: "A simple app to calculate age." },
  { title: "Loop Demo", description: "Interactive loop program with styled output." },
  { title: "Portfolio Website", description: "This very portfolio template!" }
];

document.getElementById("loadProjects").addEventListener("click", () => {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = ""; // Clear previous
  for (let i = 0; i < projects.length; i++) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `<h3>${projects[i].title}</h3><p>${projects[i].description}</p>`;
    projectList.appendChild(projectDiv);
  }
});
