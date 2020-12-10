//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
//代號為 1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA
$(document).ready(function () {
    var sheetID = "1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA"; // 試算表代號
    var gid = "0"; // 工作表代號

    //encodeURI: 把不合法的字元轉為URL可用字元
    // SQL 語法，目前是設定F欄的值>300才會撈出來
    //var sql = encodeURI("select * where A > 300"); 
    
    var callback = "display"; // 回呼函數名稱
    var url = "https://spreadsheets.google.com/tq?tqx=responseHandler:" + callback + "&key=" + sheetID + "&gid=" + gid;
    console.log(url);

    $.getScript(url); //取回Google Spreadsheet API回傳之JS code並執行
});

//回呼函數
function display(resultJson) {

    console.log(resultJson); //印出回傳結果，可仔細觀察一下Google試算表回傳之JSON內容
    var rowArray = resultJson.table.rows;
    var rowLength = rowArray.length;

    // <img src= "assets/equipments/main_chapter_orb_1.png">
    var htmlContent = "";

    for (var i = 0; i < rowLength; i++) {

        var dataGroup = rowArray[i].c;
        var dataLength = dataGroup.length;
        console.log(dataGroup);
        
        htmlContent += '<img src= "assets/equipments/';
        htmlContent += dataGroup[1].v + '.png">';
    }
    document.getElementById("test").innerHTML = htmlContent;
};