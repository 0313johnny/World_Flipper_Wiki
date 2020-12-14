//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
function start(){
    display();
    document.addEventListener("mousedown", show_imformation, false);
}

// 利用DataBase顯示所有icon
function display(){
    for(var i=0; i<DataBase.length; i++){
        createNewNode(DataBase[i][1].v)
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
    document.getElementById("imfor_block_set_id").style.display="none";

    if ( e.target.id.toLowerCase().substr(0, 5) == "item_"){
        // 確認按下的鍵是滑鼠左鍵（button==1）
        if(e.buttons== 1){
            var clicked_block= document.getElementById(e.target.id.toLowerCase())
            for(var i=0; i<DataBase.length; i++){
                if(DataBase[i][1].v == clicked_block.id.substr(5))
                {
                    // 顯示介紹框，以及更改內容
                    document.getElementById("imfor_block_set_id").style.display="block";
                    document.getElementById("imfor_name").innerHTML= "名稱："+DataBase[i][3].v;
                    document.getElementById("imfor_contribute").innerHTML= "介紹："+DataBase[i][4].v;
                    break;
                }
                
            }
        }
    }
    console.log("pass")
}


window.addEventListener("load", start, false);



