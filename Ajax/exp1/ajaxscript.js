document.getElementById("ajaxbtn").addEventListener("click",makerequest);
let dt = document.getElementById("data");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","data.txt",true);
  xhr.onload = () => {
      if(xhr.status=200){
        console.log(xhr);
        console.log(xhr.responseText);
        dt.innerText = xhr.responseText;
      }else{
        console.log("problem Occured")
      }
    }
  xhr.send();
}