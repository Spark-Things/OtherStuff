document.getElementById("ajaxbtn").addEventListener("click",makerequest);
var uname = document.getElementById("data");
var roll = document.getElementById("roll-id");
 console.log(r);
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET","data.json",true);
  //xhr.responseType = "json";
 xhr.onload = () => {
   if(xhr.status===200){
        let obj = JSON.parse(xhr.response)
        console.log(xhr.response);
        console.log(xhr.response.name);
        console.log(xhr.response.roll);
       uname.innerText = obj.name;
       roll.innerText = obj.roll;
      }else{
        console.log("problem Occured")
      }
    }
  
  xhr.send();
}