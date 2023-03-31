function dark_mode(){
    var element = document.body;
    element.classList.toggle("dark_mode");
    var element1 = document.getElementsByTagName("card");
    element1.classList.toggle("card_dark_mode");
}