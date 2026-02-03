//promise
console.log("script start");
const bucket =['coffee','chips','vegetable','salt','rice'];



const friedricepromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("fried rice");
    }else{
        reject("couldnot make it");
    }
})

friedricepromise.then(
    (myfriedrice)=>{
    console.log("let's make",myfriedrice);
}
).catch(
    (error)=>{
        console.log(error);
    }
)


for(let i=0;i<=100;i++){
    console.log(Math.random(),i);
}

console.log("script end");


//promise javascript ka kam nhi h browser ka kam h
//asyn javascript