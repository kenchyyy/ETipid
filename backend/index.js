//Get element from HTML file
const sun = document.getElementById("sunday");
const mon = document.getElementById("monday");
const tues = document.getElementById("tuesday");
const wed = document.getElementById("wednesday");
const thurs = document.getElementById("thursday");
const fri = document.getElementById("friday");
const sat = document.getElementById("saturday");

const emergency = document.getElementById('emergency');
const savings = document.getElementById('savings');
const wants = document.getElementById('wants');
const needs = document.getElementById('needs');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');


// hello world
//Process input upon pressing "Update"
form.addEventListener('submit', (e) => {
    //calculations
    let total = parseInt(Number(emergency.value)) + parseInt(Number(savings.value)) + parseInt(Number(wants.value)) + parseInt(Number(needs.value))
    let active_days = 0
    let list =[sun, mon, tues, wed, thurs, fri, sat]
    
    for(i = 0; i <=6; i++){
        if(list[i].checked){
            active_days+=1
        }}

    let messages = []
    // Condition if the total of the four textbox does not add up to 100
    if (total != 100 ){
        messages.push('The four textboxes must add up to exactly 100','Your total is:', total,'No of days active is' ,active_days)
    }
    // prevent data  submission if there is any error
    if (messages.length > 0){
     e.preventDefault()
     errorElement.innerText = messages. join(', ')
    }

})