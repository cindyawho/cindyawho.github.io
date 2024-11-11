function viewSource(projectIdNumber) {
    // document.getElementById("viewSourceCode")
    viewString = "view-source:";
    projectId = "project" + projectIdNumber.toString();
    // console.log("The project ID is " + projectId);
    urlString = document.getElementById(projectId).href;
    updatedURL = viewString.toString() + urlString.toString();
    // console.log("The updated url is " + updatedURL);
    sourceId = "source" + projectIdNumber.toString();
    document.getElementById(sourceId).href = updatedURL;
}

function openPDF(){
    // window.open(th.href,'_blank');
    window.open("./assets/CindyAndradeResume-webs.pdf",'_blank');
}

function hireButton(){
    window.open("#contact", '_self');
}

let seeFunctionDivs = document.querySelectorAll('.seeFunction');
console.log(seeFunctionDivs);
for (const div of seeFunctionDivs) {
    console.log(div);
    div.addEventListener('click', () => {
        if(div.innerText=="See More..."){
            div.innerText = "See Less...";
            div.previousElementSibling.style.display = "block";
        } else if(div.innerText=="See Less..."){
            div.innerText = "See More...";
            div.previousElementSibling.style.display = "none";
        } else {
            div.innerText= "Congrats! You broke the code :) "
        }
    })
}

/*******************************************/
/*              Project Cards               */
/*******************************************/
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    //Now accesses my projects.js file which has the projects array of objects! Yay!
    for (let i = 0; i < projects.length - 1; i++) {
        let title = projects[i].title;
        let summary = projects[i].summary;
        let imgURL = projects[i].imgURL;
        let imgAlt = projects[i].imgAlt;
        let skills = projects[i].skills;
        let demoURL = projects[i].demoURL;
        let gitHubLink = projects[i].gitHubLink;
        let codeURL = projects[i].codeURL;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        let tempID = "projectNum" + i.toString();
        nextCard?.setAttribute("id", tempID); //Add id with number to edit styles during filtering functions
        editCardContent(nextCard, title, summary, imgURL, imgAlt, skills, demoURL, gitHubLink, codeURL); // Edit props
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, title, summary, imgURL, imgAlt, skills, demoURL, gitHubLink, codeURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h3");
    cardHeader.textContent = title;

    const cardAuthor = card.querySelector(".projectSummary");
    cardAuthor.textContent = summary;

    const cardImage = card.querySelector("img");
    cardImage.src = imgURL;
    cardImage.alt = imgAlt;
    const cardLink = card.querySelector(".imgLink");
    cardLink.href = demoURL;

    const cardSkills = card.querySelector(".projectSkills");
    let skillsText = "Tech Stack: ";
    for(let i = 0; i < skills.length; i++){
        if(skills.length == 1){
            skillsText = skillsText + skills[i];
            break;
        }
        if(i == skills.length - 1){
            skillsText = skillsText + "and "
        }
        skillsText = skillsText + skills[i];
        if(i != skills.length-1){
            skillsText = skillsText + ", ";
        } 
    }
    cardSkills.textContent = skillsText;
    
    const cardProjectLink = card.querySelector(".projectDemo");
    cardProjectLink.href = demoURL;

    const cardCodeLink = card.querySelector(".projectCode");
    if(gitHubLink.length > 0){
        cardCodeLink.href = gitHubLink;
    } else {
        cardCodeLink.href = codeURL;
    }
}

document.addEventListener("DOMContentLoaded", showCards);

/*******************************************/
/*           Work Experience Cards         */
/*******************************************/
function showWorkCards() {
    const cardContainer = document.getElementById("card-container-work");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card-work");
    
    //Now accesses my workExperiences.js file which has the projects array of objects! Yay!
    for (let i = 0; i < workExperiences.length - 1; i++) {
        let type = workExperiences[i].type;
        let title = workExperiences[i].title;
        let employer = workExperiences[i].employer;
        let dates = workExperiences[i].dates;
        let description = workExperiences[i].description;
        let respStart = workExperiences[i].respStart;
        let responsibilities1 = workExperiences[i].responsibilities1;
        let responsibilities2 = workExperiences[i].responsibilities2;
        let moreInfoLinks = workExperiences[i].moreInfoLinks;

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        let tempID = "workNum" + i.toString();
        nextCard?.setAttribute("id", tempID); //Add id with number to edit styles during filtering functions
        editWorkCardContent(nextCard, type, title, employer, dates, description, respStart, responsibilities1, responsibilities2, moreInfoLinks); // Edit props
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}