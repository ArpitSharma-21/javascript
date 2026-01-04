// ///methods
// const rootnode = document.getRootNode();
// // console.log(rootnode);
// // console.log(rootnode.childNodes);

// const htmlnode=rootnode.childNodes[0];
// // console.log(htmlnode);
// const headnode=htmlnode.childNodes[0];
// const textnode = htmlnode.childNodes[1];
// const bodynode=htmlnode.childNodes[2];
// // console.log(headnode);
// // console.log(textnode);
// // console.log(bodynode);

// // console.log(headnode.nextSibling);  //sibling
// // console.log(headnode.nextSibling.nextSibling);

const  h1 = document.querySelector("h1");
const h1p = h1.parentNode;
h1p.style.color = "#333";
h1p.style.backgroundColor="grey";
console.log(h1p);

//childnode vs children
//children give actuall child not textnode but cm give all
