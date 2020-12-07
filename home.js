var icon_str= ["占事略決", "死之鐮", "邁泰奧拉", "占星儀"];

$(function() {
    $.get('https://spreadsheets.google.com/feeds/list/2PACX-1vS8s1-q9stZWVTj7EdNj9ogWmEMI9P4_c0PNQVuNpm2V-nGvsrqk7OLS1IDY9mS4Fe-lMCGwa2vEijQ/1/public/values?alt=json', function(data) {
      console.log(data);
    });
  });
  
function start()
{   
    tags= [];
    for(var i=0; i<localStorage.length; i++){
        tags[i]= localStorage.key(i);
    }
    console.log(icon_str.length);
    for(var i=0; i<icon_str.length; i++){
        var object= {
            icon: icon_str[i]+".png"
        };
        localStorage.setItem("item_"+ icon_str[i], JSON.stringify(object));
    }
}
// function display(){

// }
function createNewNode(text ){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "main" );
    newE.setAttribute("src", text+".png");
    newE.setAttribute("class", "item");
    currentNode.appendChild( newE );
}


window.addEventListener("load", start, false);