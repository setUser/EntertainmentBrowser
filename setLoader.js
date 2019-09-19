//--------------------------------------------------------------------------------------------------------------------
//                                                        Load Options
//--------------------------------------------------------------------------------------------------------------------
var FavoritesStorage = new StorageArray(localStorage, "FavoritesStorage");
var RecentsStorage = new StorageArray(localStorage, "RecentsStorage");
var IndexAddress = location.href;
var sandBox = true;
addEventListener("load", function() {
    loadFavoritesList();
    fillSeasonEpisodes();
    fillServers();
    loadRecentList();
    if (IndexAddress.includes("#")) {
        setSearch(IndexAddress);
        IndexAddress = IndexAddress.substr(0, IndexAddress.indexOf("#"));
        load();
    }
    else {
        loadRecent(0);
    }
});
function loadFavoritesList () {
    document.getElementById("favorite").innerHTML = "";
    for (i = 0; i < FavoritesStorage.getSize(); i++) {
        var node = document.createElement("option");
        node.value = FavoritesStorage.getItem(i);
        document.getElementById("favorite").appendChild(node);
    }
}
function loadRecentList() {
    document.getElementById("recentsMenus").innerHTML = "</br><h2 style='color: white;'>Recent Searches :</h2></br>";
    for (i = 0; i < RecentsStorage.getSize(); i++) {
        var recent = RecentsStorage.getItem(i);
        document.getElementById("recentsMenus").innerHTML += 
        "<li onclick=loadRecent("+i+")>"+
        recent.substr(recent.indexOf("#")+1, recent.indexOf("/")-1)+"</br>"+
        recent.substr(recent.indexOf("/")+1)+
        "</li></br>";
    }
}
function fillSeasonEpisodes () { 
    var node = document.createElement("option");
    node.innerHTML = "Season...";
    node.value = "";
    document.getElementById("season").appendChild(node);
    var node = document.createElement("option");
    node.innerHTML = "Episode...";
    node.value = "";
    document.getElementById("episode").appendChild(node);
    for (i = 1; i < 51; i++) {
        var node = document.createElement("option");
        node.innerHTML = i;
        node.value = i;
        document.getElementById("season").appendChild(node);
        var node = document.createElement("option");
        node.innerHTML = i;
        node.value = i;
        document.getElementById("episode").appendChild(node);
    }
 }
 function fillServers () {
    document.getElementById("server").innerHTML = 
        "<option value='series9'>series9</option>"+
        "<option value='serieslatino'>serieslatino</option>"+
        "<option value='pelisplanet'>pelisplanet</option>"+
        "<option value='pelisplus'>pelisplus</option>"+
        "<option value='kisscartoon'>kisscartoon</option>"+
        "<option value='animeflv'>animeflv</option>"+
        "<option value='piratebay'>piratebay</option>"+
        "<option value='subdivx'>subdivx</option>";
 }
//--------------------------------------------------------------------------------------------------------------------
//                                                     Address Functions
//--------------------------------------------------------------------------------------------------------------------
function getRute() {
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;
    var server = document.getElementById("server").value;
    return "#"+search+"/"+season+"x"+episode+"/"+server;
}
function setSearch(rute) {
    var address = rute.substr(rute.indexOf("#")+1);
    var search = address.substr(0, address.indexOf("/"));
    for (var i=0; i<search.length; i++) {
        search = search.replace("%20", " ");
    }
    document.getElementById("search").value = search;

    address = address.substr(address.indexOf("/")+1);
    var season = address.substr(0, address.indexOf("x"));
    document.getElementById("season").value = season;

    address = address.substr(address.indexOf("x")+1);
    var episode = address.substr(0, address.indexOf("/"));
    document.getElementById("episode").value = episode;

    var server = address.substr(address.indexOf("/")+1);
    document.getElementById("server").value = server;
}
//--------------------------------------------------------------------------------------------------------------------
//                                                  Storage Function
//--------------------------------------------------------------------------------------------------------------------
function addFavorite() {
    FavoritesStorage.addItem(0, document.getElementById("search").value);
    FavoritesStorage.setSort(false, false);
}
function addRecent() {
    var search = document.getElementById("search").value;
    var isNew = true;
    for (i = 0; i < RecentsStorage.getSize(); i++) {
        var address = RecentsStorage.getItem(i);
        var recent = address.substr(address.indexOf("#")+1, address.indexOf("/")-1);
        if (search == recent) {
            RecentsStorage.removeItem(i);
            RecentsStorage.addItem(0, getRute());
            isNew = false;
        }
    }
    if (isNew) {
        RecentsStorage.addItem(0, getRute());
    }
}