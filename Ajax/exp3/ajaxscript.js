document.getElementById("ajaxbtn").addEventListener("click",makerequest);
let body = document.getElementById("body");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);
  xhr.responseType ="json";
  xhr.onload =  () => {
      if(xhr.status=200){
        console.log(xhr);
        console.log(xhr.response);
        console.log(xhr.response.title);
        console.log(xhr.response.id);
        body.innerText = xhr.response.title;
      }else{
        console.log("problem Occured")
      }
    };
  xhr.send();
}