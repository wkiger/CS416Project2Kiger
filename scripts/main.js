"use strict";

var index = function() {
    document.location.href = "index.html"
}

window.onload = function() {  
    document.getElementById("index").onclick = index;
};
