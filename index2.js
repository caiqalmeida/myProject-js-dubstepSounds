var qtButtons = document.querySelectorAll("button").length;

for (var i = 0; i < qtButtons; i ++) {
document.querySelectorAll("button")[i].addEventListener ("click", function (key){
    var name = this.innerHTML;
    var nameOfAudio = new Audio("sounds/" + name + ".wav");
    nameOfAudio.play();
    function style () {document.querySelector("."+name).classList.add("pressed")};
    style(name);
    setTimeout(function(){
        document.querySelector("."+name).classList.remove("pressed")
    }, 100);
})}

for (var i = 0; i < qtButtons; i ++) {
document.querySelectorAll("button")[i].addEventListener("keydown", function (event){
    var name = event.key;
    console.log(name);
    // var nameOfAudio = new Audio("sounds/" + name + ".wav");
    // console.log(nameOfAudio);
    // function style () {document.querySelector("."+name).classList.add("pressed")};
    // style(name);
    // setTimeout(function(){
    //     document.querySelector("."+name).classList.remove("pressed")
    // }, 100);
})}






