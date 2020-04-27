
let ToolBar = document.getElementById("myTopnav")

function myFunction() { 
    
    var x = document.getElementById("myTopnav");
   
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
      x.className = "topnav";
    }

  }
  function changeToolbars(id)
  {
    var x = document.getElementById("myTopnav");
    
      for (let i = 0; i < x.children.length; i++) {
          if(x.children[i].className === "active")
          {
              x.children[i].className="";
          }
      }
      document.getElementById(id).className="active";
  }
  
  
  window.onload = function(){
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
        for( var x = 0; x < sliderSections.length; x++ ){
          var sliders = sliderSections[x].getElementsByTagName("input");
          for( var y = 0; y < sliders.length; y++ ){
            if( sliders[y].type ==="range" ){
              sliders[y].oninput = getVals;
              // Manually trigger event first time to display values
              sliders[y].oninput();
            }
          }
        }
  }
  