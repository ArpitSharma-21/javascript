//keypress
//mouseover

const body = document.body;

// body.addEventListener("keypress",(e)=>{
//     console.log(e.key);
// })

const mainbutton = document.querySelector(".btn-headline");
console.log(mainbutton);

mainbutton.addEventListener("mouseover" ,()=>{
    console.log("mouseover event occured");
})

mainbutton.addEventListener("mouseleave",()=>{
    console.log("mouseleave event occured");
})
