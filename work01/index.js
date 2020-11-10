var addButton = document.getElementById('button');
var input = document.getElementById('input');
var todoList = document.getElementById('list');

addButton.addEventListener('click',clickButton);

let cnt = 0;


function remove(id) { // id = 1
    var li = document.getElementById('li'+id); 
    todoList.removeChild(li); }


function clickButton() {
    var todoItem = document.createElement('li');
    console.log(todoItem);
    
    todoItem.setAttribute("id", "li"+cnt);
    // <li class="list-group-item" id="li0"></li>

    todoItem.innerHTML = input.value;   
    // <li class="list-group-item" id="li0">asdfasdf</li>

    todoItem.innerHTML += "<button style= 'float: right;' class= 'btn btn-dark' type=' button' onclick='remove("+cnt+") '>삭제</button> ";
    // <li class="list-group-item" id="li0">
    //      asdfasdf
    //      <button style= 'float: right;' class= 'btn btn-dark' type=' button' onclick='remove(0)'>삭제</button> 
    // </li>

    todoList.appendChild(todoItem);
    cnt += 1; }   