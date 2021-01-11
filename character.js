
var DataBase_character;
var language= JSON.parse(localStorage.getItem("language"));
if(language== 0){
    DataBase_character= JSON.parse(localStorage.getItem("DataBase_character_JP"))
}
else{
    DataBase_character= JSON.parse(localStorage.getItem("DataBase_character_CH_TW"))
}
    


$( document ).ready(function() {
  display();
  $(".rollover").click(function() {
    $(".sub_container").css('left','2000px');
  });
  $(".character").click(function(){
    change_info($(this)[0].id)
    $(".sub_container").css("left", "0px")
  });
  $(".to-index").mouseenter(function(){
    $(".rollover").attr('src',"assets/ui/to-index_on.png")
  });
  $(".to-index").mouseout(function(){
    $(".rollover").attr('src',"assets/ui/to-index_off.png")
  });
});
function display(){
  for(var i=0; i<DataBase_character.length; i++){
    console.log(DataBase_character[i])
    createNewNode_character(DataBase_character[i][1].v);
  }
}
function createNewNode_character(text){
  var newE= document.createElement("img");
  var currentNode = document.getElementById( "main_container" );
  newE.setAttribute("id", text);
  newE.setAttribute("class", 'character');
  // newE.setAttribute("title", 'assets/character/'+text+'/ui/');
  newE.setAttribute("src", "assets/character/"+text+"/ui/square_0.png");
  console.log(newE)
  currentNode.appendChild( newE );
}
function change_info(clicked_id){
  var ATTR= ['火','水','雷','風','光','暗']
  var attr_class= ['red', 'blie', 'yellow', 'green', 'white','black']
  for(var i=0; i<DataBase_character.length; i++){
    if(DataBase_character[i][1].v == clicked_id){
      var info= DataBase_character[i]
      $('#sex').html(info[8].v)
      $('#pf').html(info[7].v)
      $('#rarity').html(info[4].v)
      $('#race').html(info[6].v)
      $('#attr2').html(ATTR[parseInt(info[5].v)])
      $('#attr2').attr('class', attr_class[parseInt(info[5].v)])
      $('#attr1').attr('class', attr_class[parseInt(info[5].v)])
      $('.cv').html('CV:'+info[20].v)
      $('.name').html(info[2].v)
      $('.action-dd').html(info[18].v)
      $('.skill_detail').html(info[19].v)
      $('.intro').html(info[19].v)
      $('.left-content').html('<img src="assets/character/'+clicked_id+'/ui/full_shot_1440_1920_0.png">')
      break;
    }
  }

}




