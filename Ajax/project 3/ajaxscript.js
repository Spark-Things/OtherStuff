document.getElementById("ajaxbtn").addEventListener("click",makerequest);

function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","data.txt",true);
  xhr.onload =  () => {
      if(xhr.status=200){
        console.log(xhr);
        console.log(xhr.responseText);
        console.log(xhr.statusText);
        console.log(xhr.response);
        console.log(xhr.responseURL);
        console.log(xhr.withCredentials);
        console.log(xhr.getResponseHeader("LAST-Modified"));
        console.log(xhr.getAllResponseHeaders);
      }else{
        console.log("problem Occured")
      }
    };

  xhr.send();
}