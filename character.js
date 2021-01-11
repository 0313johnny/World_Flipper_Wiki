
var DataBase_equipments;
var DataBase_character;
var language= JSON.parse(localStorage.getItem("language"));
if(language== 0){
    DataBase_equipments= JSON.parse(localStorage.getItem("DataBase_equipments_JP"))
    DataBase_character= JSON.parse(localStorage.getItem("DataBase_character_JP"))
}
else{
    DataBase_equipments= JSON.parse(localStorage.getItem("DataBase_equipments_CH_TW"))
    DataBase_character= JSON.parse(localStorage.getItem("DataBase_character_CH_TW"))
}
    


$( document ).ready(function() {
  display();
  $(".rollover").click(function() {
    $(".sub_container").attr('display','none');
  });
  $("#character").click(function(){
    
  })
});
function display(){
  for(var i=0; i<DataBase_character.length; i++)
      createNewNode_character(DataBase_character[i][1].v);
}
function createNewNode_character(text){
  var newE= document.createElement("img");
  var currentNode = document.getElementById( "main_container" );
  newE.setAttribute("id", 'character');
  // newE.setAttribute("title", 'assets/character/'+text+'/ui/');
  newE.setAttribute("src", "assets/character/"+text+"/ui/square_0.png");
  console.log(newE)
  currentNode.appendChild( newE );
}




