function myFunction() {
    let x = document.getElementById("school");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction1() {
    let x = document.getElementById("IT");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

$(document).on("keydown", function(e){
    e = e || window.event;
    var keyCode = event.keyCode;   // code of the key pressed

    if(e.ctrlKey){             // if control key is pressed
        if(keyCode == 13){     // if current key is "enter" key
            $("input[type='file']").trigger("click");  // trigger click event
        }
    }
});
