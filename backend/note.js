

showNotes()
//this is always invoked during the loading time so it shows the notes
//already previously set
const addNotebtn = document.getElementById("addNote")

//handles what will happens when you click the add 'btn'
addNotebtn.addEventListener('click',
function clicked(){
    let title = document.getElementById("title").value
    let cost = document.getElementById("cost").value
    let description = document.getElementById("description").value
    //handles the title and length. 
    // you cannot add a note with empty title or cost it will show a 
    //toast error

    if(title.length == 0 || cost.length == 0 ){
        const toastContent = document.getElementById("empty-title")
        const toast = new  bootstrap.Toast(toastContent)
        toast.show()
    }
    else{
        console.log(title)
        console.log(cost)
        console.log(description)
    
        let notes = localStorage.getItem("notes")
        if (notes == null){
            notesObj = []
        } else{
            notesObj = JSON.parse(notes)
            //parse just transforms the strings to values to be used
            // it's the opposite of JSON.stringify ig lollll
        }

        // note object
    
        note = {"title": title, "cost": cost, "description": description}
        notesObj.push(note)
    
        //setting in localStorage
        localStorage.setItem("notes", JSON.stringify(notesObj))
        showNotes()

        document.getElementById("title").value = ""
        document.getElementById("cost").value = ""
        document.getElementById("description").value = ""
    
    }

}
)
//show notes in container

function showNotes(){
    let notes = localStorage.getItem("notes")
    if (notes == null){
        notesObj  = []
    }
    else{
        notesObj = JSON.parse(notes)
    }
    
    let cardGroup= ""
    //Retrieving dat and create notes
    // you can create divs or elements in HTML DOM
    // just using the class to edit the template appearance in CSS

    notesObj.forEach(function(element, index){
        cardGroup += `
        <div class="card border-light mb-3 m-3" style="max-width: 18rem;">
             <div class="card-header"><i class="fa-solid fa-peso-sign"></i>${element.cost} &nbsp; &nbsp; &nbsp;  <b>${element.title}</b></div>
             <div class="card-body text-dark">
             <p class="card-text"> ${element.description}
             </p>
             <button class="btn  btn-outline-light del" id="${index}" onclick ="deleteNote(${this.id})"> <i class="fa-solid fa-trash-can"></i> </button>
        </div>
</div>
         `
    })

    //notescontainer is that one empty div sa dalum
    // though it's not empty because when u have values in your localStorage
    // it creates note elements ;w;

    let notesContainer = document.getElementById("notesContainer")
    if(notesObj.length != 0){
        notesContainer.innerHTML = cardGroup
    }
    else{
        notesContainer.innerHTML = ` <b>No pinned items to show!</b><i class="fa-solid fa-face-sad-cry"></i> `
    }
}


// delete note function

function deleteNote(index){
    let notes = localStorage.getItem("notes")
    if (notes == null)
    {
        notesObj = []
    } else{
        notesObj = JSON.parse(notes)
    }

    //deleting process
    notesObj.splice(index,1)
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()
}
