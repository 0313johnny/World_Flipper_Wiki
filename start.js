function doclick(n){
    localStorage.setItem("language", n);
    if(JSON.parse(localStorage.getItem("is_loaded"))=="1")
    {
        window.location.href="equipments.html";
    }
    else{
        alert("The Page hasn't been loaded!")
    }
}
$('#btnn').click(function(){
    console.log("?")
    $('#info').css('display', 'block')
})

function show_info(){
    if($('#info').css('display')=='block'){
        $('#info').css('display','none')
        $('table').css('top','55%')
    }
    else{
        $('#info').css('display','block')
        $('table').css('top','68.5%')
    }
        

}