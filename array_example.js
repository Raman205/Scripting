var boys = new Array("Ram","shyam","Hari");

console.log(boys);

console.log(boys.length);
 
for(let i=0; i<boys.length;i++){
    console.log("Name of boy is "+boys[i])
}

// foreach loop 
// 1. for in 
// 2.for of 

for(let key in boys){
    console.log(boys[key]);
}

for(let name in boys){
    console.log(name);
}

let dataTable = document.getElementById('data');
let t= "<table border=1><tr><th> Roll No. </th><th> Name </th></tr>";
let girls =["Rita","Sita","Gita"];

girls.map((name, counter) => {
    let c = counter+1;
    t +="<tr><td>"+c+"</td>";
    t +="<td>"+name+"</td>";
    t +="</tr>";
    // console.log (name, counter+1);
});

t +="</table>";

dataTable.innerHTML = t;

// girls.map((name) =>{
//     console.log(name);
//   });