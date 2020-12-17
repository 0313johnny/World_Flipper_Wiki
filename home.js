//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
function start(){
    display();
    document.addEventListener("mousedown", show_imformation, false);
    document.addEventListener("mouseover", show_little_block, false);
}

// 利用DataBase顯示所有icon
function display(){
    for(var i=0; i<DataBase.length; i++){
        createNewNode(DataBase[i][1].v)
    }
}
function show_little_block(e){
    var block = document.getElementsByClassName("float_infor_block");
    block[0].style.display = "none";
    if ( e.target.id.substr(0, 5).toLowerCase() == "item_"){
        var clicked_block= document.getElementById(e.target.id.toLowerCase())
        for(var i=0; i<DataBase.length; i++){
            if(DataBase[i][1].v == clicked_block.id.substr(5))
            {
                // 顯示「小」介紹框，以及更改內容
                block[0].style.left = e.clientX+document.body.scrollLeft + 20 + "px";
                block[0].style.top = e.clientY+document.body.scrollTop +10 + "px";
                block[0].style.display = "block";
                document.getElementById("B_name").innerHTML= "名稱："+DataBase[i][3].v;
                document.getElementById("B_contri").innerHTML= "介紹："+DataBase[i][4].v;
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

    console.log(e.target)
    // 若是沒有點到圖片，則隱藏介紹框。
    document.getElementById("infor_block_set_id").style.display="none";
    
    if ( e.target.id.substr(0, 5).toLowerCase() == "item_"){
        // 確認按下的鍵是滑鼠左鍵（button==1）
        if(e.buttons== 1){
            var clicked_block= document.getElementById(e.target.id.toLowerCase())
            for(var i=0; i<DataBase.length; i++){
                if(DataBase[i][1].v == clicked_block.id.substr(5))
                {
                    // 顯示介紹框，以及更改內容
                    console.log(DataBase[i][1])
                    document.getElementById("infor_block_set_id").style.display="block";
                    document.getElementById("I_name").innerHTML= "名稱："+DataBase[i][3].v;
                    document.getElementById("I_contri").innerHTML= "介紹："+DataBase[i][4].v;
                    break;
                }
                
            }
        }
        if(e.target.onmouseover== 1){
            console.log("yesss")
        }
    }
}


window.addEventListener("load", start, false);



