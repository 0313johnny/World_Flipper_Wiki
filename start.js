function doclick(n){
    localStorage.setItem("language", n);
    if(localStorage.getItem(DataBase)!= "")
    {
        window.location.href="home.html";
    }
}
