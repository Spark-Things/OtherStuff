document.getElementById("ajaxbtn").addEventListener("click",makerequest);

function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","data.txt",true);
  xhr.timeout = 2000;
  xhr.onload =  () => {
      if(xhr.status=200){
        console.log(xhr);
        console.log(xhr.responseText);
      }else{
        console.log("problem Occured")
      }
    };
    xhr.onprogress = (e) =>{
      console.log(e.loaded);
      console.log(e.total);
    };
    xhr.onerror = () =>{
      console.log("Network Not Avilable");
    };
    xhr.onloadstart = () =>{
      console.log("Transaction Has Started...");
    };
    xhr.onloadend =() =>{
      console.log("transaction End.")
    }
    xhr.onabort = () =>{
      console.log("abort");
    }
    xhr.ontimeout = () =>{
      console.log("Timeout");
    }

  xhr.send();
}