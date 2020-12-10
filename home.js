var icon_str= ["占事略決", "死之鐮", "邁泰奧拉", "占星儀"];

//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
var sheetID = "1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA"; // 試算表代號
var gid = "0"; // 工作表代號

    $.getScript('https://spreadsheets.google.com/tq?tqx=responseHandler:display&key=' + sheetID +  "&gid=" + gid, function(data) {
      console.log(data);
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

