function Submit(){
//active days, newly added by Clyde
  var active_days = get_n_set_active()
  console.log(active_days)
  var data_entered = retrieveData()
  console.log(data_entered)
  var read_data = readfromLocal(data_entered)
  console.log(read_data)
  insert(read_data)
}

// retrieve from form
function retrieveData(){
  var amount = document.getElementById('amt').value
  var emergency = document.getElementById('emergency_value').value
  var savings = document.getElementById('savings_value').value
  var wants = document.getElementById('wants_value').value
  var needs = document.getElementById('needs_value').value

  arr = [amount,emergency,savings,wants,needs]
  return arr
}
// handling data in local
function readfromLocal(data_entered){
  // store data
  var a = localStorage.setItem("Amount", data_entered[0])
  var e = localStorage.setItem("Emergency", data_entered[1])
  var s = localStorage.setItem("Savings", data_entered[2])
  var w = localStorage.setItem("Wants", data_entered[3])
  var n = localStorage.setItem("Needs",data_entered[4] )

  // retrieving values
  // you should make individuals functions for each text box
  // and set value to each
  // literally the second parameter is the value to be returned
  //just edit
  var a_g = localStorage.getItem("Amount", a)
  var e_g = localStorage.getItem("Emergency",e)
  var s_g = localStorage.getItem("Savings", s)
  var w_g = localStorage.getItem("Wants", w)
  var n_g = localStorage.getItem("Needs", n)

  var def_val = [a_g, e_g, s_g, w_g, n_g]
  
  return def_val
}

// insert the data into a value
function insert(read_data){
  //not actual values do the computations first and call this function so they run sucessively
  var c_s = compute_savings(read_data)
  var c_e = compute_emergency(read_data)
  var c_n = compute_needs(read_data)
  var c_w = compute_wants(read_data)
  document.getElementById('emergency').value = c_e.toString()
  document.getElementById('savings').value = c_s.toString()
  document.getElementById('wants').value = c_w.toString()
  document.getElementById('needs').value = c_n.toString()
  //call made methods here
}



//checkboxes function

let gitact_day;
// returns how many days are toggled on as well as adding the active days on the localstorage
function get_n_set_active(){
  let days = [];
  
  document.querySelectorAll('[type="checkbox"]').forEach(item => {
    if (item.checked === true) {
      days.push(item.value);
    }
  })
  var act = days.length
  var a_day = localStorage.setItem("Active_days", act)
  gitact_day = localStorage.getItem("Active_days", a_day)
  return act
}

// computation functions 

function compute_savings(read_data){
  amt = read_data[0]
  PSavings = parseInt(read_data[2]) / 100
  Savings_week = amt * PSavings
  return Savings_week
}

function compute_needs(read_data){
  amt = read_data[0]
  PNeeds = parseInt(read_data[4]) / 100
  Needs_week = amt * PNeeds
  return Needs_week
}

function compute_wants(read_data){
  amt = read_data[0]
  PWants = parseInt(read_data[3]) / 100
  Wants_week = amt * PWants
  return Wants_week
}

function compute_emergency(read_data){
  amt = read_data[0]
  PEmergency = parseInt(read_data[1]) / 100
  Emergency_week = amt * PEmergency
  return Emergency_week
}

function compute_per_day(){
  
}
//add remaining computations etc here
