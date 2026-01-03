//get multiple elements using getElements by class name
// get multiple elements items using queryselectorall

// let navitems = document.getElementsByTagName("a"); //htmlcollection
// // console.log(navitems);

// simple loop
// for of loop
// for eachloop  cantuse

// for(let navitem of navitems){
//     navitem.style.color="#fff"
//     navitem.style.backgroundColor="red";
// }


//convert it to array
// navitems=Array.from(navitems);
// console.log(Array.isArray(navitems));

// now can use foreach loop for html collection

// array like object --------->>> can use indexing and length

//NODE LIST
let navitems = document.querySelectorAll("a");
console.log(navitems);
// can use 
// simple loop
// foreachloop
// for of loop\

// simmple loop
for(let i=0;i<navitems.length;i++){
    const navitem = navitems[i];
    navitem.style.color = "red";
    navitem.style.backgroundColor="#fff";
}
