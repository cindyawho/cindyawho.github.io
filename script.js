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

function hideInfoBar(e){
    if (e.innerText === "↤") {
        e.innerText = "↦";
        console.log("HIDE");
        const infoBarElem = document.querySelector(".infoBarWrapper");
        infoBarElem.style.left = "-135px";
        const centralContentElem = document.querySelector(".centralContent");
        centralContentElem.style.left = "212px"
        // spanElem.style.display = "block";
    } else if (e.innerText === "↦") {
        e.innerText = "↤";
        console.log("SHOW");
        const infoBarElem = document.querySelector(".infoBarWrapper");
        infoBarElem.style.left = "60px";
        const centralContentElem = document.querySelector(".centralContent");
        centralContentElem.style.left = "400px"
        // spanElem.style.display = "none";
    } else {
        e.innerText = "Congrats! You broke the code :)";
    }
}
/*******************************************/
/*            Tech Stack Icons             */
/*******************************************/
function showIcons() {
    const cardTechContainer = document.getElementById("techStack-container");
    cardTechContainer.textContent = "";
    const templateIcon = document.querySelector(".techStackIcon");
    
    //Now accesses my projects.js file which has the projects array of objects! Yay!
    for (let i = 0; i < techStackIcons.length; i++) {
        let type = techStackIcons[i].type;
        let alt = techStackIcons[i].name;
        let href = techStackIcons[i].url;

        const nextCard = templateIcon.cloneNode(true); // Copy the template card
        let tempID = "iconNum" + i.toString();
        nextCard?.setAttribute("id", tempID); //Add id with number to edit styles during filtering functions
        editIcon(nextCard, type, alt, href); // Edit props
        cardTechContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editIcon(card, name, alt, href) {
    card.style.display = "block";

    card.alt = alt;
    card.src = href;
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

    const divElemOverlay = card.querySelector(".projectItemOverlay");
    divElemOverlay.textContent = summary;

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

function editWorkCardContent(card, type, title, employer, dates, description, respStart, responsibilities1, responsibilities2, moreInfoLinks) {
    card.style.display = "grid";

    const cardType = card.querySelector(".work-type");
    const outerDiv = cardType.parentElement.parentElement;for(let i = 0; i < type.length; i++){
        cardType.textContent = type[i];
        outerDiv.classList.add(type[i]);
    }

    const cardHeader = card.querySelector("h3");
    cardHeader.textContent = title;

    const empElem = card.querySelector(".work-emp");
    empElem.textContent = employer;

    const datesElem = card.querySelector(".work-dates");
    datesElem.textContent = dates;

    const descElem = card.querySelector(".work-desc");
    descElem.textContent = description;

    const respElem = card.querySelector(".work-respStart");
    respElem.textContent = respStart;

    const ulElem = card.querySelector(".workJobList");
    for(let i = 0; i < responsibilities1.length; i++){
        const listElement = document.createElement("LI");
        const liText = document.createTextNode(responsibilities1[i]);
        listElement.appendChild(liText);
        ulElem.appendChild(listElement);
    }

    if(responsibilities2.length > 0){
        const spanElem = document.createElement("span");
        spanElem.classList.add("seeMoreLess");

        ulElem.appendChild(spanElem);

        const ulElem2 = card.querySelector(".seeMoreLess");
        for(let i = 0; i < responsibilities2.length; i++){
            const listElement = document.createElement("LI");
            const liText = document.createTextNode(responsibilities2[i]);
            listElement.appendChild(liText);
            ulElem2.appendChild(listElement);
        }

        const divElem = document.createElement("div");
        divElem.classList.add("seeFunction");
        divElem.textContent = "See More...";
        ulElem.appendChild(divElem);

        divElem.addEventListener('click', () => {
            if (divElem.innerText === "See More...") {
                divElem.innerText = "See Less...";
                spanElem.style.display = "block";
            } else if (divElem.innerText === "See Less...") {
                divElem.innerText = "See More...";
                spanElem.style.display = "none";
            } else {
                divElem.innerText = "Congrats! You broke the code :)";
            }
        });
    }
    
    const linksElem = card.querySelector(".work-links");
    for(let i = 0; i < moreInfoLinks.length; i++){
        const linkElem = document.createElement("a");
        const liText = document.createTextNode(moreInfoLinks[i].text);
        linkElem.appendChild(liText);
        linkElem.href = moreInfoLinks[i].url;
        linksElem.appendChild(linkElem);
        const br = document.createElement('br');
        linksElem.appendChild(br);
    }

}

function filterWork(e){
    const buttonText = e.innerHTML.toLowerCase(); 
    console.log(buttonText); 
    
    const workCardContainer = document.getElementById("card-container-work");
    let children = workCardContainer.children;
    for (let i = 0; i < children.length; i++) {
        currChild = children[i];
        console.log(currChild);
        if(buttonText == "all"){
            currChild.style.display = "grid";
        } else if(currChild.classList.contains(buttonText)){
            currChild.style.display = "grid";
        } else{
            currChild.style.display = "none";
        }
    }
}

// ---------ONLOADING FUNCTIONS----------

function onloadFunctions(){
    showCards();
    showWorkCards();
    showIcons();
}

document.addEventListener("DOMContentLoaded", onloadFunctions);
