function sum(...theArgs) {
  return theArgs.reduce((previous, current) => {
    console.log("previous"+previous+"current"+current);
    return previous + current;
  });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
// expected output: 10
let getJson = function(url){
  const promise = new Promise(function(){

  });
}
getJson("./first.json").then(function(post){
  return getJson(post.comment);
}).then(function(comment){
  console.log("first");
}).catch(function(err){
  console.log("second");
});
let formdata = new FormData();
let file = new document.querySelector("input[type = 'file']");
formdata.append('username','aaaa');
formdata.append('file',file.file[0]);
fetch("lalallala",{
  method:'PUT',
  body:file
})