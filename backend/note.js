

showNotes()
const addNotebtn = document.getElementById("addNote")

addNotebtn.addEventListener('click',
function clicked(){
    let title = document.getElementById("title").value
    let cost = document.getElementById("cost").value
    let description = document.getElementById("description").value
    if(title.length == 0 || cost.length == 0 ){
        
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
        }}
    }

    // note object

    note = {"title": title, "cost": cost, "description": description}
    notesObj.push(note)

    //setting in localStorage
    localStorage.setItem("notes", JSON.stringify(notesObj))
    showNotes()

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

    notesObj.forEach(function(element, index){
        cardGroup += `
        <div class="card border-light mb-3 m-3" style="max-width: 18rem;">
             <div class="card-header"><i class="fa-solid fa-peso-sign"></i>${element.cost}  <b>${element.title}</b></div>
             <div class="card-body text-dark">
             <p class="card-text"> ${element.description}
             </p>
             <button class="btn  btn-outline-light del" id="${index}" onclick ="deleteNote(${this.id})"> <i class="fa-solid fa-trash-can"></i> </button>
        </div>
</div>
         `
    })

    let notesContainer = document.getElementById("notesContainer")
    if(notesObj.length != 0){
        notesContainer.innerHTML = cardGroup
    }
    else{
        notesContainer.innerHTML = ` <b>No notes to show!</b><i class="fa-solid fa-face-sad-cry"></i> `
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
