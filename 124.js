

console.log("script start !!");
const allbuttons = document.querySelectorAll(".my-buttons button")

allbuttons.forEach((button)=>{
    button.addEventListener("click" ,(e)=>{
            let num=0;
            for(let i=0;i<100000;i++){
                num +=i;
            }
            console.log(e.currentTarget.textContent,num);
    })
})

let outerval =0;
for(let i=0;i<1000000000;i++){
    outerval +=i;
}
console.log("value of outer variable is ", outerval);
console.log("script ended");
