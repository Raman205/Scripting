var sen= "welcome to hdc";
var pattern =/HDC/i;
if(sen.search(pattern) >=0){
    console.log("word exists")
}else{
    console.log("Word doesn't exists");
}
// var result = sen.search(pattern);
// result ;

let text ="visit HDC!";
let result = text.replace("HDC", "Himalaya Darshan College");
console.log(result);