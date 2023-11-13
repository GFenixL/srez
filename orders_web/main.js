let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let addOrEdit = false;
let selectedTask = {};

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation(e);
});

async function get() {
    var requestOptions = {
       
        method: 'GET'
    };
    await fetch("http://localhost:3000/todos", requestOptions)
    .then(async response => await response)
    .then(async result => {
        data = await result.text();
        data = JSON.parse(data);
        console.log(data);
        createTasks();
    });

}
get()

let formValidation = (e)=>{
    if(textInput.value === "" || dateInput.value === ""){
        msg.innerHTML = "Запись/дата не может быть пустой!";
        console.log("failure");
    } 
    else {
        console.log("success");
        msg.innerHTML = "";
        if(addOrEdit){
            acceptData();
        }
        else{
            deleteOk(e);
        }
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        (() => {
            add.setAttribute("data-bs-dismiss", "");
        })(); 
    }
}

let data = [];
let acceptData = () => {
    let data1 = {
        todo: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    };
    console.log(JSON.stringify(data1));
    fetch('http://localhost:3000/todos', {
            method: "POST",
            body: JSON.stringify(data1),
            headers: {
                 "Content-Type": "application/json"
            },
    })
    .then(response => response.json())
    .then(json => get())

    createTasks();
}

let createTasks = () => {
    tasks.innerHTML = "";
    data.map((x,y) => {
        return (tasks.innerHTML += `
        <div id=${x.todo_id}>
        <span class = "fw-bold">${x.todo}</span>
        <span class="smail text-secondary">${(new Date(x.todo_date)).toLocaleDateString()}</span>
        <p>${x.todo_description}</p>
        <span class="options">
            <i class="fas fa-edit" onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#form"></i>
            <i class="fas fa-trash-alt" onclick="deleteTask(this)"></i>
        </span>
        </div>
        `);
    });
    resetForm();
}

let resetForm = () => {
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
}

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    let r = data.splice(e.parentElement.parentElement.id, 1);
    console.log(r);
    fetch('http://localhost:3000/todos/' + e.parentElement.parentElement.id, {
            method: "DELETE",
    })

    console.log(data);
}

let editTask = (e) => {
    addOrEdit = false;
    selectedTask = e.parentElement.parentElement;
    let [day,month,year] = selectedTask.children[1].innerHTML.toString().split('.')
    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = (year+'-'+month+'-'+day);
    textarea.value = selectedTask.children[2].innerHTML;
}
const formatDate = (date) => {
    let d = new Date(date);
    let month = (d.getMonth() + 1).toString().padStart(2, '0');
    let day = d.getDate().toString().padStart(2, '0');
    let year = d.getFullYear();
    return [year, month, day].join('-');
  }
(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    console.log(data);
    createTasks();
})();

let deleteOk = (e) => {
    console.log(selectedTask.id);
    let data1 = {
        todo: textInput.value,
        date: dateInput.value,
        description: textarea.value,
    };
    fetch('http://localhost:3000/todos/' + selectedTask.id, {
            method: "PUT",
            body: JSON.stringify(data1),
            headers: {
                 "Content-Type": "application/json"
            },
    })
    .then(response => response.json())
    .then(json => get())
}

function AddBut(){
    addOrEdit = true;
}