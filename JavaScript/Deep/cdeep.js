
function Calculation(e){
 
      var unit = document.getElementById("Unit").value;
      var f = document.getElementById("f").value;
      var i = document.getElementById("i").value;
      
      let Feet = feet;
      let Inch = inch;
      if (unit == f) {
        return Feet();
      } else if ( unit == i) {
        return Inch();
      }
      else{
        return "choose your Unit"
      }               
   }  


      function feet(){                
         var l =document.getElementById("Length").value;
         var w =document.getElementById("Width").value;
         var u =document.getElementById("Unit").value;

              console.log(l);
              console.log(w);
             let wh = + w + 1.25;
              var whh = wh/3.25;
             console.log(wh);
             var lh = whh*(l/1.67);
               var lhh = lh;
              document.getElementById("Display").innerHTML = lhh;
            } 
            
      function inch(){
        var l =document.getElementById("Length").value;
        var w =document.getElementById("Width").value;
        var u =document.getElementById("Unit").value;
         
         let wh = + w + 15;
         var whh = wh/39
        var lh = whh*(l/20);
        var  lhh = lh
        document.getElementById("Display").innerHTML = lhh;  
      }      