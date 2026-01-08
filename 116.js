//clone nodes 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="newtodo";
const li2=li.cloneNode(true);          //CLONE

ul.append(li);
ul.prepend(li2);