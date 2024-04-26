function clicked(){
    let days = [];
  
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
  // Iterates through all checkbox elements
    if (item.checked === true) {
      days.push(item.value);
     
    }
    
  })
  console.log(days)
  active_days = days.length
  console.log(`the lenght is ${active_days}`)

  //return active days and input in the localStorage
  //then proceed with operation
  console.log(active_days)
 var readactday = store_retrieve(active_days)
 var calculations = calc(readactday)

 console.log(calculations)

}

function store_retrieve(days){
    var act_day = localStorage.setItem("Active_days", days)
    var gact_day = localStorage.getItem("Active_days", act_day)

    return gact_day

}
// not an actual functionality

function calc(act_day){
    return 2 * act_day


}


