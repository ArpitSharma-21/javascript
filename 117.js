// some old methods to support poor IE
// appendChild;
// insertBefore;
// replaceChild;
// removeChild
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
const referencenode = document.querySelector(".first-todo");

li.textContent="newtodo";
ul.insertBefore(li,referencenode);
