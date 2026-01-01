// change text and text content vs inner text
const txt = document.getElementById("main-heading");
console.log(txt.textContent);  // text content give all what is written whether visible in page or not
console.log(txt.innerText); // gives only what is visible in the page

txt.textContent="this is changed ";
console.log(txt.textContent);

