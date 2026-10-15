function bold(){
    document.getElementById("textarea1")
    .style.fontWeight = "bold"
}

function italic(){
document.getElementById("textarea1")
.style.fontStyle = "italic"
}

function alignleft(){
document.getElementById("textarea1")
.style.textAlign  = "left"
}

function aligncenter(){
document.getElementById("textarea1")
.style.textAlign  = "center"
}

function alignright(){
document.getElementById("textarea1")
.style.textAlign  = "right"
}

function upper(){
    document.getElementById("textarea1")
    .style.textTransform = "uppercase"
}

function lower(){
    document.getElementById("textarea1")
    .style.textTransform = "lowercase"
}

function capital(){
    document.getElementById("textarea1")
    .style.textTransform = "capitalize"
}

function clearfun() {
    document.getElementById("textarea1")
        .style.fontWeight = "normal";
    document.getElementById("textarea1")
        .style.textAlign = "left";
    document.getElementById("textarea1")
        .style.fontStyle = "normal";
    document.getElementById("textarea1")
        .style.textTransform = "capitalize";
    document.getElementById("textarea1")
        .value = "";
}


// function aligncenter{}