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
    
    //Now accesses my data.js file which has the projects array of objects! Yay!
    for (let i = 0; i < projects.length; i++) {
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