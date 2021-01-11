
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
    

window.addEventListener("load", start, false);
function start(){
    display();
    // document.addEventListener("mousedown", show_imformation, false);
    // document.addEventListener("mouseover", show_little_block, false);
    drag_drop('equipments', 'equipments')
    drag_drop('character', 'main')
    drag_drop('character', 'unison')
    drag_drop('equipments', 'ability-soul')
    
    function drag_drop(text_id, text_class){
        let dragzones = document.querySelectorAll('#'+text_id);
        console.log(dragzones)
        dragzones.forEach((dragzone) => {
            console.log(dragzone)
            dragzone.addEventListener('dragstart', (ev) => {
                localStorage.setItem("dragtitle",ev.target.title)
                localStorage.setItem("dragid",ev.target.id)
                console.log("dragstart", ev.target.id)
                ev.target.style.opacity = ".8";
            });
            dragzone.addEventListener("dragend", (ev) => {
                ev.target.style.opacity = "";
            });
        });
        let dropzones = document.querySelectorAll('.'+text_class);
        console.log(dropzones)
        dropzones.forEach((dropzone) => {
            
            dropzone.addEventListener('dragenter', (ev) => {
                ev.preventDefault();
                return false;
            });
            
            dropzone.addEventListener('dragover', (ev) => {
                ev.preventDefault();
                dragid=localStorage.getItem('dragid')
                if(dragid== 'character'){
                    console.log(localStorage.getItem("dragid"), text_class)
                    if('main'== text_class || 'unison'== text_class){
                        ev.target.style.transform= "scale(1.1)";
                    }
                }
                else if(dragid== 'equipments'){
                    if('equipments'== text_class || 'ability-soul'== text_class){    
                        ev.target.style.transform= "scale(1.1)";
                    }
                }
                return false;
            });

            dropzone.addEventListener('dragleave', (ev) => {
                ev.preventDefault();
                ev.target.style.transform= "scale(1)";

                return false;
            });

            dropzone.addEventListener('drop', (ev) => {
                ev.preventDefault()
                ev.target.style.transform= "scale(1)";
                dragid=localStorage.getItem('dragid')
                if(dragid== 'character'){
                    console.log(ev.target.className, text_class)
                    if('main'== text_class){
                        const source = localStorage.getItem('dragtitle')
                        var node= document.createElement('img')
                        node.setAttribute("src",source+'thumb_party_main_0.png')
                        ev.target.appendChild(node)
                    }
                    else if('unison'== text_class){                 
                        const source = localStorage.getItem('dragtitle')
                        var node= document.createElement('img')
                        node.setAttribute("src",source+'thumb_party_unison_1.png')
                        ev.target.appendChild(node)
                    }
                }
                else if(dragid== 'equipments'){
                    if('equipments'== text_class){
                        const source = localStorage.getItem('dragtitle')
                        var node= document.createElement('img')
                        node.setAttribute("src",source+'.png')
                        ev.target.appendChild(node)
                    }
                    else if('ability-soul'== text_class){                 
                        const source = localStorage.getItem('dragtitle')
                        var node= document.createElement('img')
                        node.setAttribute("src",source+'_soul.png')
                        ev.target.appendChild(node)
                    }
                }
            })
            dropzone.addEventListener('click', (ev) => {
                console.log(ev.target.nodeName) 
                if(ev.target.nodeName=="IMG")
                    ev.target.style.display= "none"
            })
        });
    }
}
function display(){
    for(var i=0; i<DataBase_equipments.length; i++)
        createNewNode_equipments(DataBase_equipments[i][1].v);
    for(var i=0; i<DataBase_character.length; i++)
        createNewNode_character(DataBase_character[i][1].v);
}
function createNewNode_equipments(text){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "equipments-list" );
    newE.setAttribute("id", 'equipments');
    newE.setAttribute("draggable","true")
    newE.setAttribute("title", "assets/equipments/"+text);
    newE.setAttribute("src", "assets/equipments/"+text+".png");
    currentNode.appendChild( newE );
}
function createNewNode_character(text){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "character-list" );
    newE.setAttribute("id", 'character');
    newE.setAttribute("title", 'assets/character/'+text+'/ui/');
    newE.setAttribute("draggable","true")
    newE.setAttribute("src", "assets/character/"+text+"/ui/square_0.png");
    console.log(newE)
    currentNode.appendChild( newE );
}

//顯示小匡 還沒更改

// function show_little_block(e){
//     var block = document.getElementsByClassName("float_info_block");
//     // var block = $("#float_info_block").hide();
//     // block.hide()
//     block[0].style.display = "none";
//     if ( e.target.id.substr(0, 5).toLowerCase() == "item_"){
//         var clicked_block= document.getElementById(e.target.id);
//         for(var i=0; i<DataBase.length; i++){
//             if(DataBase[i][1].v == clicked_block.id.substr(5))
//             {
//                 // 顯示「小」介紹框，以及更改內容
//                 // console.log(block[0].style)
//                 block[0].style.left = event.clientX + 20 + "px";
//                 block[0].style.top = event.clientY +10 + "px";
//                 block[0].style.display = "block";
//                 document.getElementById("B_name").innerHTML= "名稱："+DataBase[i][2].v;
//                 document.getElementById("B_contri").innerHTML= "介紹："+DataBase[i][3].v;
//                 break;
//             }
//         }
//     }
// }
            