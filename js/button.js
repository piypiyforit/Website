var count = 0;
document.getElementById("myButton").onclick = function(){
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "Ничего нет";

    }
    else{
        var img = document.createElement("img")
        document.getElementById("demo").innerHTML = "";
        img.src = "file:///home/kart/pt_web/Website/image/img4.jpeg"
        document.getElementById("demo").appendChild(img)
    }
}
