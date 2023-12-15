//65130500035 Nattamon Thongkhamon

import { createGuestList } from './data/guestdata.js'
import { GuestManagement } from './lib/GuestManagement.js'
//const createGuestList = require('./data/guestdata.js')

const guestList = createGuestList() // guestList is a class variable
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList // guests is a class variable (store data same as guestList)

  // 1. register event for searching and adding
  function registerEventHandling() {
    const addButtonEle = document.getElementById('add-guest-btn')
    const searchinputEle = document.getElementById('search-input')
    searchinputEle.addEventListener('keyup', (event) => {
      searchGuest(event); // call function
    })
    addButtonEle.addEventListener('click', () => {
      console.log('click')
      addGuest.call(this)
    })
  }

  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const areaEle = document.getElementById('display-area');
    const html = `<div>
        <span>${guestItem.firstname} ${guestItem.lastname}</span>
        <span class="remove-icon" id="firstname-lastname" style="cursor:pointer;color:red">[X]</span>
      <div>
    `
    areaEle.insertAdjacentHTML('beforeend', html)
    let spanEle = document.getElementById('firstname-lastname')
    spanEle.addEventListener("click", removeGuest)
  }

  /* 2. Function to display one guest in the display area
 function displayGuest(guestItem) {
  let dispArea = document.getElementById('display-area')
  let newDiv = document.createElement('div')
  let span1 = document.createElement("span")
  span1.textContent = `${guestItem.firstname} ${guestItem.lastname}`
  let span2 = document.createElement("span")
  span2.setAttribute("class", "remove-icon")
  span2.setAttribute("id", `${guestItem.firstname}-${guestItem.lastname}`)
  span2.style.cursor = "pointer"
  span2.style.color = "red"
  span2.textContent = '[X]'
  span2.addEventListener("click", removeGuest)
  newDiv.appendChild(span1)
  newDiv.appendChild(span2)
  dispArea.appendChild(newDiv)
}
*/

  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) { // guestResult is a array of guest
    // clear div (disply-area)
    const divEle = document.getElementById('display-area');
    divEle.innerHTML = ''
    // for loop guestResult
    for (let i = 0; i < guestResult.length; i++) {
      const element = guestResult[i];
      // call function display displayGuest(guestItem)
      displayGuest(element)
    }

  }

  // DONE 4. Function to search and display matching guests
  function searchGuest(event) {
    //console.log(event.target.value);
    const guest_found_arr = guests.searchGuests(event.target.value);
    displayGuests(guest_found_arr);
  }

  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById('firstname-input')
    let lastname = document.getElementById('lastname-input')
    guests.addNewGuest(firstname, lastname)
    let newGuest = guests.getAllGuests().find(guest => (guest.firstname === firstname && guest.lastname === lastname))
    displayGuest(newGuest)
    firstname.value = ''
    lastname.value = ''
  }

  // 6. Function to remove a guest
  function removeGuest(event) {
    let xMark = event.target
    let div = xMark.parentElement
    let fullname = xMark.previousSibling.textContent.split(" ")
    let toBeRemoved = guests.getAllGuests().find(guest => guest.firstname === fullname[0] && guest.lastname === fullname[1])
    div.remove()
    guests.removeGuest(toBeRemoved)
  }

  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
//module.exports = guestForm
export { guestForm }
const { registerEventHandling, displayGuests } = guestForm()
registerEventHandling()
displayGuests(guestList.getAllGuests())



//-----------------------
// 1. register event for searching and adding
  function registerEventHandling() {
    document.getElementById("search-input").addEventListener("keyup", searchGuest)
    document.getElementById("add-guest-btn").addEventListener("click", addGuest)
  }
 
  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) { 
    let dispArea = document.getElementById('display-area')
    let newDiv = document.createElement('div')
 
    let span1 = document.createElement("span")
    span1.textContent = ${guestItem.firstname} ${guestItem.lastname}
 
    let span2 = document.createElement("span")
    span2.setAttribute("class", "remove-icon")
    span2.setAttribute("id", `${guestItem.firstname}-${guestItem.lastname}`)
    span2.style.cursor = "pointer"
    span2.style.color = "red"
    span2.textContent = '[X]'
    span2.addEventListener("click", removeGuest)
 
    newDiv.appendChild(span1)
    newDiv.appendChild(span2)
 
    dispArea.appendChild(newDiv)
  }
 
  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) { 
    document.getElementById('display-area').innerHTML = ''
    guestResult.forEach(element => {
      displayGuest(element)
    });
  }
 
  // 4. Function to search and display matching guests
  function searchGuest(event) { 
    let inputText = document.getElementById('search-input').value
    displayGuests(guests.searchGuests(inputText))
  }
 
  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById("firstname-input").value
    let lastname = document.getElementById("lastname-input").value
    guests.addNewGuest(firstname, lastname)
    let newGuest = guests.getAllGuests().find(guest => (guest.firstname === firstname && guest.lastname === lastname))
    displayGuest(newGuest)
    document.getElementById("firstname-input").value = ''
    document.getElementById("lastname-input").value = ''
  }
 
  // 6. Function to remove a guest
  function removeGuest(event) { 
    let xMark = event.target
    let div = xMark.parentElement
    let fullname = xMark.previousSibling.textContent.split(" ")
    let toBeRemoved = guests.getAllGuests().find(guest => guest.firstname === fullname[0] && guest.lastname === fullname[1])
    div.remove()
    guests.removeGuest(toBeRemoved)
  }

//-----------------------------
// 65130500028 Thamonwan Simcharoen
//import { createGuestList } from './data/guestdata.js'
const createGuestList = require('./data/guestdata.js')
 
const guestList = createGuestList()
function guestForm() {
  //provide initial guests data list created from GuestManagement class
  let guests = guestList
 
  // 1. register event for searching and adding
  function registerEventHandling() {
 
    const searchInput = document.getElementById("search-input")
    searchInput.addEventListener("keyup", (event) => {
       searchGuest(event)})
 
 
    const addGuestButton = document.getElementById("add-guest-btn")
    addGuestButton.addEventListener("click", () => addGuest())
 
  }
 
  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    const newGuestDiv = document.createElement('div')
 
    const newSpan1 = document.createElement('span')
    newSpan1.textContent(`${guestItem.value[0]} ${guestItem.value[1]}`)
    newGuestDiv.appendChild(newSpan1)
 
    const newSpan2 = document.createElement('span')
    newSpan2.setAttribute("class","remove-icon")
    newSpan2.setAttribute("id",`${guestItem.value[0]}-${guestItem.value[1]}`)
    newSpan2.setAttribute("style","cursor:pointer;color:red")
    newSpan2.innerHTML = '[X]'
    newGuestDiv.appendChild(newSpan2)
 
    const span2 = document.getElementById('firstname-lastname')
    const despan2 = span2.childNodes[0]
    despan2.addEventListener(("click") ,(event) => removeGuest(event))
  }
 
  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    const displayArea = document.body.children[3]
    const displayChildArea = displayArea.children
    displayArea.removeChild(displayChildArea)
 
    
  }
 
  // 4. Function to search and display matching guests
  function searchGuest(event) {
    const searchInput = searchGuests(event)
    
    
  }
 
  // 5. Function to add a new guest
  function addGuest() {
    const firstname = document.querySelector("firstname-input").value
    const lastname = document.querySelector("lastname-input").value
 
    const addNewGuest = addNewGuest(firstname,lastname)
    displayGuest(addNewGuest)
 
    firstname = ""
    lastname = ""
  }
 
  // 6. Function to remove a guest
  function removeGuest(event) {
    const removeButton = event.target
    const removeId = removeButton.parentElement.getAttribute("id")
    removeGuest(removeId)
  }
 
  return {
    registerEventHandling,
    displayGuests,
    searchGuest,
    addGuest,
    removeGuest
  }
}
 
module.exports = guestForm
//export { guestForm }
//const { registerEventHandling, displayGuests } = guestForm()
//registerEventHandling()
//displayGuests(guestList.getAllGuests())



//------------------------------------------------------
// 1. register event for searching and adding
  function registerEventHandling() {
    document.getElementById("search-input").addEventListener("keyup", searchGuest)
    document.getElementById("add-guest-btn").addEventListener("click", addGuest)
  }
 
  // 2. Function to display one guest in the display area
  function displayGuest(guestItem) {
    let dispArea = document.getElementById('display-area')
    let newDiv = document.createElement('div')
 
    let span1 = document.createElement("span")
    span1.textContent = `${guestItem.firstname} ${guestItem.lastname}`
 
    let span2 = document.createElement("span")
    span2.setAttribute("class", "remove-icon")
    span2.setAttribute("id", `${guestItem.firstname}-${guestItem.lastname}`)
span2.style.cursor = "pointer"
span2.style.color = "red"
    span2.textContent = '[X]'
    span2.addEventListener("click", removeGuest)
 
    newDiv.appendChild(span1)
    newDiv.appendChild(span2)
 
    dispArea.appendChild(newDiv)
  }
 
  // 3. Function to display all existing guests in the display area
  function displayGuests(guestResult) {
    document.getElementById('display-area').innerHTML = ''
    guestResult.forEach(element => {
      displayGuest(element)
    });
  }
 
  // 4. Function to search and display matching guests
  function searchGuest(event) {
    let inputText = document.getElementById('search-input').value
    displayGuests(guests.searchGuests(inputText))
  }
 
  // 5. Function to add a new guest
  function addGuest() {
    let firstname = document.getElementById("firstname-input").value
    let lastname = document.getElementById("lastname-input").value
    guests.addNewGuest(firstname, lastname)
    let newGuest = guests.getAllGuests().find(guest => (guest.firstname === firstname && guest.lastname === lastname))
    displayGuest(newGuest)
    document.getElementById("firstname-input").value = ''
    document.getElementById("lastname-input").value = ''
  }
 
  // 6. Function to remove a guest
  function removeGuest(event) {
    let xMark = event.target
    let div = xMark.parentElement
    let fullname = xMark.previousSibling.textContent.split(" ")
    let toBeRemoved = guests.getAllGuests().find(guest => guest.firstname === fullname[0] && guest.lastname === fullname[1])
    div.remove()
    guests.removeGuest(toBeRemoved)
  }
