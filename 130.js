// SETTIMEOUT

// console.log("script start");

// setTimeout(()=>{
//     console.log("insidesettimeout");
// },1000);


// console.log("script end");


//CLEARTIMEOUT

console.log("script start");

const id=setTimeout(()=>{
    console.log("insidesettimeout");
},1000);

for(let i=0;i<100;i++){
    console.log("....");
}


//
console.log("settimeout id ",id);
clearTimeout(id);
console.log("script end");
