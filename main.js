import {
    fullname,
    title,
    bio,
    experience
} from './portfolio_config.js'

// Function to populate the timeline
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
            <p>${exp.description.join('<br>')}</p>
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

    populateExperience();
})