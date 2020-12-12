
//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
function start(){
    document.getElementById("item_list").addEventListener("mousedown", show_imformation, false);
}
function createNewNode(text ){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "item_list" );
    newE.setAttribute("id", "item");
    newE.setAttribute("src", "assets/equipments/"+text+".png");
    currentNode.appendChild( newE );
}

// 滑鼠點下會跳到這個function，用途為判斷滑鼠在哪
function show_imformation(e){
    console.log(e);
    if ( e.target.id.toLowerCase() == "item"){

        // 確認按下的鍵是滑鼠左鍵（button==1）
        if(e.buttons== 1){

            // imfor_block裡面裝著資訊欄的所有東東
            imfor_block= document.getElementById("imformation_id");
            imfor_block.innerHTML= "yes!"
        }
    }
}
window.addEventListener("load", start, false);



