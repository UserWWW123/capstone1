function changePage(pageNumber) {
    let pages = document.querySelectorAll('.lessonMiddle');
    
    pages.forEach(page => {
        page.style.display = 'none';
    });

    let getPage = document.querySelector(`.lessonpage${pageNumber}`);
    if (getPage) {
        getPage.style.display = 'block';
    }
}

function toggleNoteIframe(){
    let iframe = document.getElementById("noteIframe");
    if(iframe.style.display === "none" || iframe.style.display === ""){
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }
}

function lessonIframe(){
    let lessonIframe = document.querySelector(".instructionSection");
    let noteButton = document.querySelector(".takeNote");
    if (lessonIframe && noteButton){
        noteButton.style.display = "none";
    }
}