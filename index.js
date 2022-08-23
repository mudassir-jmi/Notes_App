let notes = [];
document.querySelector('form').onsubmit = (e) => {
    e.preventDefault();
    const title = document.getElementById("title");
    const description = document.getElementById("description");
    const date  = document.getElementById("date");
    console.log(title.value , description.value, date.value);

    if(!title && title.trim() === "" && 
    !description && description.trim() === "" && 
    !date && date.trim() === "") {
       return console.log("Invalid Inputs");
    }
    createNote(title.value , description.value, date.value);
}

function createNote(title, description, date) {
    const newNote = { title, description, date, id: Date.now() };
    notes.push(newNote);
    // Store Data Into LocalStorage
    localStorage.setItem("notes", JSON.stringify(notes));
    console.log(notes);
    displayNotes(); // call the function
}

function displayNotes() {
    if(localStorage.getItem('notes')) {
        notes = JSON.parse(localStorage.getItem("notes"));
    console.log(notes);
    const ul = document.querySelector("ul");
    // remove Previous Output 👇
    document.querySelectorAll('li').forEach((child)=>child.remove());
    notes.forEach((note) => {
        const li = document.createElement("li");
        const div = document.createElement("div");
        const h6 = document.createElement("h6");
        const p = document.createElement("p");
        const caption = document.createElement("caption");
        h6.innerText = note.title;
        p.innerText = note.description;
        caption.innerText = note.date;
        div.appendChild(h6);
        div.appendChild(p);
        div.appendChild(caption);
        li.appendChild(div);
        ul.appendChild(li);
    });
    }
   
}

window.onload = () => {
    displayNotes();
}

const del = document.getElementById("del");
displayNotes("");
