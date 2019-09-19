//--------------------------------------------------------------------------------------------------------------------
//                                                    Keys Functions
//--------------------------------------------------------------------------------------------------------------------
addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
	e.preventDefault()
        load();
        document.getElementById("search").focus();
    }
});
addEventListener("keyup", function(e) {
    if (e.keyCode == 177) {
	e.preventDefault()
        setEpisode(-1);
        document.getElementById("episode").focus();
    }
    if (e.keyCode == 176) {
	e.preventDefault()
        setEpisode(+1);
        document.getElementById("episode").focus();
    }
});
//--------------------------------------------------------------------------------------------------------------------
//                                                  Interface Functions
//--------------------------------------------------------------------------------------------------------------------
function recent () {
    setResize(document.getElementById("recentsMenus").style.display === "none");
}
function loadRecent(i) {
    setSearch(RecentsStorage.getItem(i));
    load();
}
//--------------------------------------------------------------------------------------------------------------------
function setEpisode(i) {
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;
    var server = document.getElementById("server").value;
    if (search !== "" && season !== "" && episode!== "" && server !== "") {
        if (server == "series9" || server == "serieslatino" || server == "piratebay") {
            document.getElementById("episode").value = Number(document.getElementById("episode").value)+i;
            load();
        }
    }
}
//--------------------------------------------------------------------------------------------------------------------
function load() {
    if (document.getElementById("search").value !== "") {
        addRecent();
        loadRecentList();
    }
    setLink();
    isLoaded(false);
    location.assign(IndexAddress+getRute());
    document.getElementById("frame").src = document.getElementById("link").href;
}
function isLoaded(loaded) {
    if (loaded) {
        document.getElementById("load").innerHTML = "<i id='load_icon' class='fa fa-refresh'></i>";
    }
    else {
        document.getElementById("load").innerHTML = "<i id='load_icon' class='fa fa-refresh'></i>";
        document.getElementById("load_icon").classList.add("fa-spin");
    }
}
//--------------------------------------------------------------------------------------------------------------------
function reset() {
    document.getElementById("search").value = "";
    document.getElementById("season").value = "";
    document.getElementById("episode").value = "";
}
//--------------------------------------------------------------------------------------------------------------------
function save() {
    if (confirm("Do you want to save what's in the search box as favorites?\nThis will make easier to type it later")) {
        addFavorite();
        loadFavoritesList();
    }
}
//--------------------------------------------------------------------------------------------------------------------
function server() {
    reset();
    load();
}
//--------------------------------------------------------------------------------------------------------------------
function frameSandBox () {
    var url = document.getElementById("frame").src;
    if (sandBox) {
        document.getElementById("sandBox").innerHTML = "<i class='fa fa-unlock'></i>"
        document.getElementById("frameSandBox").innerHTML =
        "<iframe id='frame' src='"+url+"' allowfullscreen onload=isLoaded(true)"+
        "sandbox='allow-scripts allow-same-origin allow-top-navigation'></iframe>";
        sandBox = false;
        setResize(document.getElementById("recentsMenus").style.display === "inline")
    }
    else {
        document.getElementById("sandBox").innerHTML = "<i class='fa fa-lock'></i>"
        document.getElementById("frameSandBox").innerHTML =
        "<iframe id='frame' src='"+url+"' onload=isLoaded(true) allowfullscreen"+
        "sandbox='allow-scripts allow-same-origin'></iframe>";
        sandBox = true;
        setResize(document.getElementById("recentsMenus").style.display === "inline")
    }
}