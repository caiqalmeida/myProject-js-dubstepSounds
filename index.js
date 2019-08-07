var numbOfDub = document.querySelectorAll(".dub").length;

for (var i = 0; i < numbOfDub; i++) {
    document.querySelectorAll(".dub")[i].addEventListener("click", function () {
        var letterOfSoundClick = this.innerHTML;
        var audioClick = new Audio("sounds/"+letterOfSoundClick+".wav");
        audioClick.play();
        document.querySelector("."+letterOfSoundClick).classList.add("pressed");

        setTimeout(function() {
            document.querySelector("."+letterOfSoundClick).classList.remove("pressed");
        })
    }, 100);
}

for (var i = 0; i < numbOfDub; i++) {
    document.addEventListener("keydown", function (event) {
        var letterOfSoundKey = event.key;
        var audioKey = new Audio("sounds/"+letterOfSoundKey+".wav");
        audioKey.play();
        // console.log(document.querySelector("."+letterOfSoundKey));
    })}

