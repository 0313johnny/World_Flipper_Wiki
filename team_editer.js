
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

    let dragzones = document.querySelectorAll('#equipments_id');
    console.log(dragzones)
    dragzones.forEach((dragzone) => {
        console.log(dragzone)
        dragzone.addEventListener('dragstart', (ev) => {
            ev.dataTransfer.setData('text/plain', ev.target.title);
            console.log("dragstart")
            // ev.target.style.opacity = ".5";
        });

        dragzone.addEventListener("dragend", (ev) => {
            // ev.target.style.opacity = "";
        });
    });
    let dropzones = document.querySelectorAll('.equipments');
    console.log(dropzones)
    dropzones.forEach((dropzone) => {
        dropzone.addEventListener('dragenter', (ev) => {
            ev.preventDefault();
            console.log("enter")
            // dropzone.style.borderStyle = 'dashed';
            return false;
        });
        
        dropzone.addEventListener('dragover', (ev) => {
            ev.preventDefault();
            console.log("over")
            ev.target.style.transform= "scale(1.1)";
            return false;
        });

        dropzone.addEventListener('dragleave', (ev) => {
            ev.preventDefault();
            console.log("over")
            ev.target.style.transform= "scale(1)";
            return false;
        });

        dropzone.addEventListener('drop', (ev) => {
            ev.preventDefault()
            const source = ev.dataTransfer.getData('text/plain')
            var node= document.createElement('img')
            node.setAttribute("src",source)
            ev.target.appendChild(node)
        })
        // dropzone.addEventListener('click', (ev) => {
        //     console.log(ev.target) 
        //     ev.target.style.display= "none"
        // })
    });
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
    newE.setAttribute("id", 'equipments_id');
    newE.setAttribute("draggable","true")
    newE.setAttribute("title", "assets/equipments/"+text+".png");
    newE.setAttribute("src", "assets/equipments/"+text+".png");
    console.log(newE)
    currentNode.appendChild( newE );
}
function createNewNode_character(text){
    var newE= document.createElement("img");
    var currentNode = document.getElementById( "character-list" );
    newE.setAttribute("id", 'character_id');
    newE.setAttribute("title", 'assets/character/"+text+"/ui/square_0.png');
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
            