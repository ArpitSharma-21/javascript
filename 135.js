
//funstion returning promise

function ricepromise(){
    const bucket =['coffee','chips','vegetable','salt','rice'];

    return new Promise((resolve,reject)=>{
    if(bucket.includes("vegetable")&& bucket.includes("salt")&& bucket.includes("rice")){
        resolve("fried rice");
    }else{
        reject("couldnot make it");
    }
})
}

ricepromise().then(
     (myfriedrice)=>{
    console.log("let's make",myfriedrice);
}
).catch(
    (error)=>{
        console.log(error);
    }
)