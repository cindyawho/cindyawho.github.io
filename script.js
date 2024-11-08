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