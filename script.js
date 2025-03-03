let editingTask = null;
let deletedTask = null;

// Function to set user name
function setUserName() {
    let userName = localStorage.getItem("userName");

    if (!userName) {
        document.getElementById("namePopup").style.display = "block";
    } else {
        document.getElementById("headerText").innerHTML = `Welcome, ${userName}! Your To-Do List`;
    }
}