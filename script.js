let notes = JSON.parse(localStorage.getItem("notes")) || [];

/* Display notes here */

function displayNotes(){

    const notesContainer =
    document.getElementById("notesContainer");

    notesContainer.innerHTML = "";

    notes.forEach((note,index)=>{

        notesContainer.innerHTML += `

        <div class="note">

            <h3>${note.title}</h3>

            <p>${note.content}</p>

            <div class="reminder-text">
                Reminder: ${note.reminder || "No Reminder"}
            </div>

            <div class="actions">

                <button onclick="editNote(${index})">
                    Edit
                </button>

                <button onclick="deleteNote(${index})">
                    Delete
                </button>

            </div>

        </div>
        `;
    });
}

/* Add note section */

function addNote(){

    const title =
    document.getElementById("title").value;

    const reminder =
    document.getElementById("reminder").value;

    const content =
    document.getElementById("content").value;

    if(title === "" || content === ""){

        alert("Please fill all fields");
        return;
    }

    notes.push({
        title,
        reminder,
        content
    });

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    document.getElementById("title").value = "";
    document.getElementById("reminder").value = "";
    document.getElementById("content").value = "";

    displayNotes();
}

/* Delete note operation */

function deleteNote(index){

    notes.splice(index,1);

    localStorage.setItem(
        "notes",
        JSON.stringify(notes)
    );

    displayNotes();
}

/* Edit note operation */

function editNote(index){

    const updatedTitle =
    prompt(
        "Edit title",
        notes[index].title
    );

    const updatedContent =
    prompt(
        "Edit note",
        notes[index].content
    );

    if(updatedTitle && updatedContent){

        notes[index].title =
        updatedTitle;

        notes[index].content =
        updatedContent;

        localStorage.setItem(
            "notes",
            JSON.stringify(notes)
        );

        displayNotes();
    }
}

/* It will be displayed initilly */

displayNotes();