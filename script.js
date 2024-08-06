function editProfile() {
    let profileContent = document.getElementById('profile-content');
    let newProfileText = prompt('Edit your profile:', profileContent.textContent);
    if (newProfileText) {
        profileContent.textContent = newProfileText;
    }
}

function addExperience() {
    let experienceList = document.getElementById('experience-list');
    let newExperience = prompt('Add your new experience:');
    if (newExperience) {
        let listItem = document.createElement('li');
        listItem.textContent = newExperience;
        experienceList.appendChild(listItem);
    }
}

function addEducation() {
    let educationList = document.getElementById('education-list');
    let newEducation = prompt('Add your new education:');
    if (newEducation) {
        let listItem = document.createElement('li');
        listItem.textContent = newEducation;
        educationList.appendChild(listItem);
    }
}

function addSkill() {
    let skillsList = document.getElementById('skills-list');
    let newSkill = prompt('Add your new skill:');
    if (newSkill) {
        let listItem = document.createElement('li');
        listItem.textContent = newSkill;
        skillsList.appendChild(listItem);
    }
}

function addProject() {
    let projectsList = document.getElementById('projects-list');
    let newProject = prompt('Add your new project:');
    if (newProject) {
        let listItem = document.createElement('li');
        listItem.textContent = newProject;
        projectsList.appendChild(listItem);
    }
}
