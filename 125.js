


const allbuttons = document.querySelectorAll(".my-buttons button");
allbuttons.forEach(button=>{
    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor = "pink";
        e.target.style.color= "#333";
       
    })
})
