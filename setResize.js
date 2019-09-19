//--------------------------------------------------------------------------------------------------------------------
//                                                     setResize Function
//--------------------------------------------------------------------------------------------------------------------
function setResize(recent) {
    var recentsMenus = document.getElementById("recentsMenus");
    var interface = document.getElementById("interface_0");
    var frame = document.getElementById("frame");
    var search = document.getElementById("search");
    if (recent) {
        recentsMenus.style.display = "inline";
        document.getElementById("recent").innerHTML = "<i id='recent_icon' class='fa fa-angle-double-left'></i>";
        if (window.innerWidth < 500) {
            frame.style.display = "none";
        }
        else {
            frame.style.display = "inline";
            frame.width = window.innerWidth-320;
        }
    } 
    else {
        recentsMenus.style.display = "none";
        document.getElementById("recent").innerHTML = "<i id='recent_icon' class='fa fa-angle-double-right'></i>";
        frame.style.display = "inline";
        frame.width = window.innerWidth-15;
    }
    if (window.innerWidth < 1000) {
        interface.style.display = "block";
        frame.height = window.innerHeight-125;
        search.size = window.innerWidth/20;
    }
    else if (window.innerWidth < 1500) {
        interface.style.display = "inline";
        frame.height = window.innerHeight-85;
        search.size = window.innerWidth/60;
    }
    else {
        interface.style.display = "inline";
        frame.height = window.innerHeight-85;
        search.size = window.innerWidth/20;
    }
}