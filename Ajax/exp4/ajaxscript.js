document.getElementById("ajaxbtn").addEventListener("click",makerequest);
let body = document.getElementById("body");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
  xhr.responseType ="json";
  xhr.onload =  () => {
      if(xhr.status=200){
        x = xhr.response;
       for(i=0;i<x.length;i++){
        console.log(xhr.response[i].userId);
        console.log(xhr.response[i].id);
        console.log(xhr.response[i].title);
        console.log(xhr.response[i].body);
       } 
      }else{
        console.log("problem Occured")
      }
    };
  xhr.send();
}