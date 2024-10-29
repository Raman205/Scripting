// // let, var, const

let boys = new Array("Ram","Shyam","Hari");
// let girls = ["Rita","Gita","Sita"];

// let a = 10;

// // console.log(typeof(boys));
// // console.log(typeof girls);

// // array
// boys.push("Raman");
// console.log(boys);

// boys.pop();
// console.log(boys);

// boys.unshift("Raman");
// console.log(boys);

// // boys.shift();
// // console.log(boys);

// // let b = boys.slice(1,3);
// // console.log(b);

// b = boys.splice(1,3);

// console.log(b);
// console.log(boys);

// var students =  boys.concat(girls);
// //  console.log(students);
// //  console.log(boys);

let mutiDimensional =[
    ["ram","shyam"],
    ["rita","gita"],
    ["a","b","c"]
];
// console.log(mutiDimensional);
// console.log(mutiDimensional[1][0]);

// mutiDimensional.map((a) => {                // map baneko loop (maap ley loop lagauxa )
//     // console.log(a);
//     a.map((b) => {
//         console.log(b);
//     });
// });

// mutiDimensional.map();

boys.map ((name) =>{
    console.log(name);
});