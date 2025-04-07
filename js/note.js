const notesContainer = document.querySelector(".notes__preview");
const createButton = document.querySelector(".notes__add");


//load saved notes
function showNotes(){
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(note => {
        createNoteWithContent(note.id, note.content, note.noteTitle);
    });
}
showNotes();

//create a new note with a unique id and content
function createNoteWithContent(noteId, content = "", noteTitle=""){
    let inputBox = document.createElement("div");
    let trashIcon = document.createElement('i');
    let inputText = document.createElement('textarea');
    let inputTitle = document.createElement('textarea');

    inputBox.className = "input-box";
    inputText.className = "content";
    inputTitle.className = "noteTitle";
    trashIcon.className = "fa-solid fa-trash trash-icon";
    
    inputText.placeholder = "Type something here...";
    inputTitle.placeholder = "Add a title..."

    inputText.value = content;
    inputTitle.value = noteTitle;

    // Set unique ID as a data attribute
    inputBox.dataset.noteId = noteId;

    inputBox.appendChild(inputTitle);
    inputBox.appendChild(inputText);
    inputBox.appendChild(trashIcon);
    
    notesContainer.appendChild(inputBox);
}

//update the notes content in local storage
function updatesStorage(){
    const notes = document.querySelectorAll(".input-box");
    const notesArray = Array.from(notes).map(note => {
        return{
            id: note.dataset.noteId, 
            content: note.querySelector(".content").value,
            noteTitle: note.querySelector(".noteTitle").value

        };
    });
    localStorage.setItem("notes", JSON.stringify(notesArray));
}

//remove note by clicking trash-icon + update storage
notesContainer.addEventListener("click", function(e){
    if(e.target.classList.contains("trash-icon")){
        e.target.closest(".input-box").remove();
        updatesStorage();
    }
});

//add a new note after clicking add button + update Storage
createButton.addEventListener("click", () => {
    const noteId = "note-" + new Date().getTime();
    createNoteWithContent(noteId);
    updatesStorage();
});

//update storage if anything add in the box
notesContainer.addEventListener("input", function (e) {
    if (e.target.classList.contains("content") || e.target.classList.contains("noteTitle")) {
        updatesStorage();
    }
});

//tap return = go to next line
document.addEventListener("keydown", event =>{
    if(event.key ==="Return"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

//make it cannot delete trash-icon
notesContainer.addEventListener("keydown", function(e) {
    if (e.target.classList.contains("trash-icon")) {
        // Prevent delete/backspace key from removing the trash icon
        if (e.key === "Delete") {
            e.preventDefault();
        }
    }
});