function doclick(n){
    localStorage.setItem("language", n);
    if(JSON.parse(localStorage.getItem("is_loaded"))=="1")
    {
        window.location.href="equipment.html";
    }
    else{
        alert("The Page hasn't been loaded!")
    }
}