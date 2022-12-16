const projects = document.getElementById("projects");

for (let i = 1; i < 51; i++) {
  const project = document.createElement("div");
  project.classList.add("project");

  project.innerHTML = `
    <p class="project-title">Day ${i.toString().padStart(2, "0")}</p>
    <h5 class="project-link">
      <a href="./Day_${i.toString().padStart(2, "0")}" class="link"
        >Name Placeholder</a
      >
    </h5>
    <div class="objectives">
      <ul class="objective-list">
        <li class="list-item">Objectives Placeholder</li>
        <li class="list-item">Objectives Placeholder</li>
        <li class="list-item">JS Objectives Placeholder</li>
      </ul>
    </div>
    `;

  projects.appendChild(project);
}
