// Setting up variables for our HTML elements using DOM selection
const form = document.getElementById("taskform");
const tasklist = document.getElementById("tasklist");

//Add EvenListener for the whole form
form.addEventListener("submit", function (event) {
    event.preventDefault(); //// 阻止点击链接时的默认行为

    console.log(form.elements.taskType.value)

    addTask(
        form.elements.taskName.value,
        form.elements.taskType.value,
        form.elements.taskRate.value,
        form.elements.taskTime.value,
        form.elements.taskClient.value,
    )
    console.log(taskList)
})

function displayTask(task) {
    let item = document.createElement("li");
    // 属性名称为 "data-id", 属性值是 task.id
    item.setAttribute("data-id", task.id);
    item.innerHTML = `<p><strong>${task.name}</strong><br>${task.type}</p>`;

    // 这里的tasklist是DOM元素（ul）
    // item也是DOM元素（li）
    tasklist.appendChild(item);

    // Clear the value of the input once the task has been added to the page
    form.reset();

    // Setup delete button DOM elements
    let delButton = document.createElement("button");
    let delButtonText = document.createTextNode("Delete");
    delButton.appendChild(delButtonText);
    item.appendChild(delButton); // Adds a delete button to every task

    // Listen for when the delete button is clicked
    delButton.addEventListener("click", function (event) {

        // taskList是Array，
        // here is delete current data from taskList
        taskList.forEach(function (taskArrayElement, taskArrayIndex) {
            if (taskArrayElement.id == item.getAttribute('data-id')) {
                taskList.splice(taskArrayIndex, 1) // 将该元素从数组中删除。
            }
        })

        // Make sure the deletion worked by logging out the whole array
        console.log(taskList)

        // Here to see on the html and fronted pages
        item.remove(); // Remove the task item from the page when button clicked
        // Because we used 'let' to define the item, this will always delete the right element

    })


}




// Create an object called 'task'
// Populate the properties based on the provided data model

// Commented out now the object creation is included in the function

// var task = {
//   name: "Initial Sketches",
//   type: "Concept Ideation",
//   id: Date.now(),
//   date: new Date().toISOString(),
//   rate: 50,
//   time: 5,
//   client: "Google"
// }

// console.log(task);


// Create an array called 'taskList'
var taskList = [];

// Create a function called 'addTask'
// Give the function input parameters for: name, type, rate, time, client
// Paste your object definition from above in the function
// Replace the property values with the input paramaters
// Add the object to the taskList array

function addTask(name, type, rate, time, client) {

    // Creating the object with the usual property:value syntax
    // Create task object 
    // let task = {
    //   name: name,
    //   type: type,
    //   id: Date.now(),
    //   date: new Date().toISOString(),
    //   rate: rate,
    //   time: time,
    //   client: client
    // }

    // Creating the object, directly passing in the input parameters
    let task = {
        name,
        type,
        id: Date.now(),
        date: new Date().toISOString(),
        rate,
        time,
        client
    }
    
    // 这里的taskList是array
    taskList.push(task);
    displayTask(task);

}

// Call the function with test values for the input paramaters
addTask("Initial Sketches", "Concept Ideation", 50, 5, "Google");

// Log the array to the console.
console.log(taskList);

// taskList here should for record data in the terminal
// the li showed in the fronted page are related to item(in displayTask())