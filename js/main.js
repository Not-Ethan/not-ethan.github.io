import {
    fullname,
    title,
    bio,
    experience,
    education,
    projects,
    skills
} from '../portfolio_config.js'

// Populates the timeline (called in js/scripts.js)
export const populateExperience = () => {
    const timeline = document.getElementById("experience-timeline");
    console.log("Timeline element:", timeline);
    experience.forEach(exp => {
        const experienceDiv = document.createElement("div");
        experienceDiv.setAttribute("data-date", `${exp.startDate} – ${exp.endDate}`);
        
        if (exp.location) {
            experienceDiv.setAttribute("data-location", exp.location);
        }
        
        experienceDiv.innerHTML = `
            <h3>${exp.employer}</h3>
            <h4>${exp.title}</h4>
            <ul>
            ${exp.description.map(desc => `<li>${desc}<br></li>`).join('')}
            </ul>
            
        `;
        
        timeline.appendChild(experienceDiv);
        console.log(
            `Added experience: ${exp.employer} – ${exp.title}`
        );
    });
};

document.addEventListener('DOMContentLoaded', ()=>{
    console.log("DOM fully loaded and parsed.");
    const replaceName = document.getElementsByClassName('replace-name');
    const replaceTitle = document.getElementsByClassName('replace-title');
    const replaceBio = document.getElementsByClassName('replace-bio');
    for (let i = 0; i < replaceName.length; i++) {
        replaceName[i].textContent = fullname;
    }

    for (let i = 0; i < replaceTitle.length; i++) {
        replaceTitle[i].textContent = title;
    }

    for (let i = 0; i < replaceBio.length; i++) {
        replaceBio[i].innerHTML = bio.join('<br>');
    }

    populateEducation();
    populateProjects();
    populateSkills();

})


export function populateEducation() {
    // Get the education container
    const educationContainer = document.getElementById("education");

    if (!educationContainer) {
        console.error("#education container not found in the DOM.");
        return;
    }

    // Loop through the education data and create blocks
    education.forEach((edu) => {
        // Create the education block
        const educationBlock = document.createElement("div");
        educationBlock.className = "education-block";

        // Populate the content
        educationBlock.innerHTML = `
            <h3>${edu.school}</h3>
            <span class="education-date">${edu.startDate} - ${edu.endDate}</span>
            <h4>${edu.degree}</h4>
            <p>${edu.location}</p>
            <ul>
                ${edu.description.map(item => `<li>${item}</li>`).join('')}
            </ul>
        `;

        // Append to the education container
        educationContainer.appendChild(educationBlock);
    });
}

function populateProjects() {
    const projectsContainer = document.querySelector("#projects .row");

    if (!projectsContainer) {
        console.error("#projects .row container not found in the DOM.");
        return;
    }

    // Loop through the projects data and create blocks
    projects.forEach((project) => {
        // Create the project block
        const projectBlock = document.createElement("div");
        projectBlock.className = "project shadow-large"; // Use the same classes as the static content

        // Populate the content (exact structure)
        projectBlock.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.name}" />
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <ul>
                    ${project.description.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        `;

        // Append the project block to the container
        projectsContainer.appendChild(projectBlock);
    });
}

function populateSkills() {
    const skillsContainer = document.getElementById("skills-list");
    
    skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsContainer.appendChild(skillItem);
    });
}