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

function checkAnswer(answer, correctAnswer, lessonId) { //click buttons to check answer. change p content 
    const response = document.querySelector(`#${lessonId} .answer`); //get answer p in the lessonpage(id)
    if (response) {
        if (answer === correctAnswer) {
            response.innerHTML = "Correct!";
            response.classList.remove("wrongAnswer");
            response.classList.add("rightAnswer");
        } else {
            response.innerHTML = "Try Again!";
            response.classList.remove("rightAnswer");
            response.classList.add("wrongAnswer");
        }
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

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle("active");
        var collapsibleContent = this.nextElementSibling;
        if (collapsibleContent.style.display === "block") {
            collapsibleContent.style.display = 'none';
        } else {
            collapsibleContent.style.display = 'block';
        }
    });
}