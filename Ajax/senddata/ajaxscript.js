document.getElementById("ajaxbtn").addEventListener("click",makerequest);
let body = document.getElementById("body");
function makerequest() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST","	http://dummy.restapiexample.com/api/v1/create",true);
  xhr.responseType ="json";
  xhr.onload =  () => {
      if(xhr.status=200){
       console.log(xhr.response);
       body.innerText = xhr.response.data.name;
      }else{
        console.log("problem Occured")
      }
    };
     mydata = '{"name":"spark","salary":"123","age":"23"}';
  xhr.send(mydata);
}