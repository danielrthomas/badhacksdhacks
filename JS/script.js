//asdfadf

function output() {
    for (var i=0; i<10; i++) {
        var button = document.getElementById("button-" + i);
        if(button != null) {
            button.onclick = function(e) {
            disp = disp + e.target.id.substring(7);
            display.innerHTML = disp;
            }
        }
    }
};