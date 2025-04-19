function changePage(pageNumber) {
    let pages = document.querySelectorAll('.lessonMiddle');
    let buttons = document.querySelectorAll('.lessonPageButton'); 

    pages.forEach(page => {
        page.style.display = 'none';
    });

    buttons.forEach(button => {
        button.classList.remove('active-button');
    });

    let getPage = document.querySelector(`.lessonpage${pageNumber}`);
    if (getPage) {
        getPage.style.display = 'block';
    }

    let activeButton = document.querySelector(`.lessonPageButton${pageNumber}`);
    if (activeButton) {
        activeButton.classList.add('active-button');
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