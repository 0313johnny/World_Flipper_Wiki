//World Flipper用的表 https://docs.google.com/spreadsheets/d/1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA/edit#gid=0
//代號為 1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA
var DataBase_equipments_JP= []
var DataBase_equipments_CH_TW= []
var DataBase_character_JP= []
var DataBase_character_CH_TW= []

$(document).ready(function () {
    var sheetID = "1YihcIS-7iApI1GI4pN6XYwyfndb5CbNwAVUEvEl9jyA"; // 試算表代號
    // var gid = "0"; // 工作表代號
    // 0：武器（日文），1:武器（中文）

    //encodeURI: 把不合法的字元轉為URL可用字元
    // SQL 語法，目前是設定F欄的值>300才會撈出來
    //var sql = encodeURI("select * where A > 300"); 

    // var callback = "Save0"; // 回呼函數名稱
    // var callback = "Save1";
    // var callback = "Save2";
    var url0 = "https://spreadsheets.google.com/tq?tqx=responseHandler:Save0" + "&key=" + sheetID + "&gid=0";
    var url1 = "https://spreadsheets.google.com/tq?tqx=responseHandler:Save1" + "&key=" + sheetID + "&gid=1168845885";
    var url2 = "https://spreadsheets.google.com/tq?tqx=responseHandler:Save2" + "&key=" + sheetID + "&gid=1281392656";
    var url3 = "https://spreadsheets.google.com/tq?tqx=responseHandler:Save3" + "&key=" + sheetID + "&gid=1802293810";

    console.log(url0);
    $.getScript(url0); //取回Google Spreadsheet API回傳之JS code並執行
    $.getScript(url1)
    $.getScript(url2)
    $.getScript(url3)
});

//回呼函數，這部分只做將引入的data放進database
function Save0(resultJson) {

    console.log(resultJson.table.rows); //印出回傳結果，可仔細觀察一下Google試算表回傳之JSON內容
    var rowArray = resultJson.table.rows;
    var rowLength = rowArray.length;
    // <img src= "assets/equipments/main_chapter_orb_1.png">
    for (var i = 0; i < rowLength; i++) {
        var dataGroup = rowArray[i].c;
        // 建立成一個很多dictionary的list;
        DataBase_equipments_JP.push(dataGroup)
    }
    localStorage.setItem("DataBase_equipments_JP", JSON.stringify(DataBase_equipments_JP));
    localStorage.setItem("is_loaded", JSON.stringify("1"));    
};

function Save1(resultJson) {

    console.log(resultJson.table.rows); //印出回傳結果，可仔細觀察一下Google試算表回傳之JSON內容
    var rowArray = resultJson.table.rows;
    var rowLength = rowArray.length;
    // <img src= "assets/equipments/main_chapter_orb_1.png">
    for (var i = 0; i < rowLength; i++) {
        var dataGroup = rowArray[i].c;
        // 建立成一個很多dictionary的list;
        DataBase_equipments_CH_TW.push(dataGroup)
    }
    localStorage.setItem("DataBase_equipments_CH_TW", JSON.stringify(DataBase_equipments_CH_TW));
    localStorage.setItem("is_loaded", JSON.stringify("1"));    
};
function Save2(resultJson) {

    console.log(resultJson.table.rows); //印出回傳結果，可仔細觀察一下Google試算表回傳之JSON內容
    var rowArray = resultJson.table.rows;
    var rowLength = rowArray.length;
    // <img src= "assets/equipments/main_chapter_orb_1.png">
    for (var i = 0; i < rowLength; i++) {
        var dataGroup = rowArray[i].c;
        // 建立成一個很多dictionary的list;
        DataBase_character_JP.push(dataGroup)
    }
    localStorage.setItem("DataBase_character_JP", JSON.stringify(DataBase_character_JP));
    localStorage.setItem("is_loaded", JSON.stringify("1"));    
};
function Save3(resultJson) {

    console.log(resultJson.table.rows); //印出回傳結果，可仔細觀察一下Google試算表回傳之JSON內容
    var rowArray = resultJson.table.rows;
    var rowLength = rowArray.length;
    // <img src= "assets/equipments/main_chapter_orb_1.png">
    for (var i = 0; i < rowLength; i++) {
        var dataGroup = rowArray[i].c;
        // 建立成一個很多dictionary的list;
        DataBase_character_CH_TW.push(dataGroup)
    }
    localStorage.setItem("DataBase_character_CH_TW", JSON.stringify(DataBase_character_CH_TW));
    localStorage.setItem("is_loaded", JSON.stringify("1"));    
};