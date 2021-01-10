//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
var DataBase;
var language= JSON.parse(localStorage.getItem("language"));
if(language== 0)
    DataBase= JSON.parse(localStorage.getItem("DataBase_equipments_JP"));
else 
    DataBase= JSON.parse(localStorage.getItem("DataBase_equipments_CH_TW"));
function start(){
    display();
    document.addEventListener("mousedown", show_imformation, false);
    document.addEventListener("mouseover", show_little_block, false);
}

// 利用DataBase顯示所有icon
function display(){
    for(var i=0; i<DataBase.length; i++){
        createNewNode(DataBase[i][1].v);
    }
}
function show_little_block(e){
    var block = document.getElementsByClassName("float_info_block");
    // var block = $("#float_info_block").hide();
    // block.hide()
    block[0].style.display = "none";
    if ( e.target.id.substr(0, 5).toLowerCase() == "item_"){
        var clicked_block= document.getElementById(e.target.id);
        for(var i=0; i<DataBase.length; i++){
            if(DataBase[i][1].v == clicked_block.id.substr(5))
            {
                // 顯示「小」介紹框，以及更改內容
                // console.log(block[0].style)
                block[0].style.left = event.clientX + 20 + "px";
                block[0].style.top = event.clientY +10 + "px";
                block[0].style.display = "block";
                document.getElementById("B_name").innerHTML= "名稱："+DataBase[i][2].v;
                document.getElementById("B_contri").innerHTML= "介紹："+DataBase[i][3].v;
                break;
            }
        }
    }
}
function createNewNode(text){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "item_list" );
    newE.setAttribute("id", "item_"+text);
    newE.setAttribute("src", "assets/equipments/"+text+".png");
    currentNode.appendChild( newE );
}

// 滑鼠點下會跳到這個function
function show_imformation(e){

    // 若是沒有點到圖片，則隱藏介紹框。
    document.getElementById("info_block_set_id").style.display="none";
    if(e.buttons== 1){
        var clicked_block= document.getElementById(e.target.id)
        for(var i=0; i<DataBase.length; i++){
            if(DataBase[i][1].v == clicked_block.id.substr(5))
            {
                // 顯示介紹框，以及更改內容
                console.log(DataBase[i][1])
                document.getElementById("info_block_set_id").style.display="block";
                document.getElementById("I_name").innerHTML= "名稱："+DataBase[i][2].v;
                document.getElementById("I_contri").innerHTML= "介紹："+DataBase[i][3].v;
                break;
            }
            
        }
    }

}


window.addEventListener("load", start, false);



