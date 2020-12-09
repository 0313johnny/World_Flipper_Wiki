var icon_str= ["acce_0001_total", "acce_0002", "acce_0003", "acce_0003", "acce_0004", "acce_0005_PCollab", "acce_0006_storyevent",  "acce_0007_total" , "acce_0008_ZCollab", "acce_0009_ZCollab"]

$(function() {
    $.get('https://spreadsheets.google.com/feeds/list/2PACX-1vS8s1-q9stZWVTj7EdNj9ogWmEMI9P4_c0PNQVuNpm2V-nGvsrqk7OLS1IDY9mS4Fe-lMCGwa2vEijQ/1/public/values?alt=json', function(data) {
      console.log(data);
    });
  });
  
function start()
{   
    for(var i=0; i<icon_str.length; i++){
        createNewNode(icon_str[i]);
    }
}
// function display(){

// }
function createNewNode(text ){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "item_id" );
    newE.setAttribute("src", "assets/equipments/"+text+".png");
    currentNode.appendChild( newE );
}


window.addEventListener("load", start, false);