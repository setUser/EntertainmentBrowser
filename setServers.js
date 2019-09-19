//--------------------------------------------------------------------------------------------------------------------
//                                                  Servers Functions
//--------------------------------------------------------------------------------------------------------------------
function setLink() {
    if (document.getElementById("server").value == "series9") {
        series9();
    }
    if (document.getElementById("server").value == "serieslatino") {
        serieslatino();
    }
    if (document.getElementById("server").value == "pelisplanet") {
        pelisplanet();
    }
    if (document.getElementById("server").value == "pelisplus") {
        pelisplus();
    }
    if (document.getElementById("server").value == "kisscartoon") {
        kisscartoon();
    }
    if (document.getElementById("server").value == "animeflv") {
        animeflv();
    }
    if (document.getElementById("server").value == "piratebay") {
        piratebay();
    }
    if (document.getElementById("server").value == "subdivx") {
        subdivx();
    }
}
//--------------------------------------------------------------------------------------------------------------------
function series9() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = false;
    document.getElementById("episode").disabled = false;
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;
    for (var i=0; i<search.length; i++) {
        search = search.replace(" ", "-");
    }

    if (search == "") {
        document.getElementById("link").href = "https://series9.co/";
    }
    if (search !== "") {
        document.getElementById("link").href = "https://series9.co/movie/search/"+search;
    }
    if (search !== "" && season !== "") {
        document.getElementById("link").href = "https://series9.co/movie/search/"+search+"-season-"+season;
    }
    if (search !== "" && season !== "" && episode!== "") {
        document.getElementById("link").href = "https://series9.co/film/"+search+"-season-"+season+"/watching.html?ep="+episode+"#";
    }
}
//--------------------------------------------------------------------------------------------------------------------
function serieslatino() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = false;
    document.getElementById("episode").disabled = false;
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;
    for (var i=0; i<search.length; i++) {
        search = search.replace(" ", "+");
    }

    if (search == "") {
        document.getElementById("link").href = "http://www.serieslatino.tv";
    }
    if (search !== "") {
        document.getElementById("link").href = "http://www.serieslatino.tv/resultados/?q="+search;
    }
    if (search !== "" && season !== "") {
        for (var i=0; i<search.length; i++) {
            search = search.replace("+", "-");
        }
        document.getElementById("link").href = "http://www.serieslatino.tv/"+search+"-temporada-"+season+"-1";
    }
    if (search !== "" && season !== "" && episode!== "") {
        for (var i=0; i<search.length; i++) {
            search = search.replace("+", "-");
        }
        document.getElementById("link").href = "http://www.serieslatino.tv/"+search+"-temporada-"+season+"-"+episode;
    }
}
//--------------------------------------------------------------------------------------------------------------------
function pelisplanet() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = true;
    document.getElementById("episode").disabled = true;
    var search = document.getElementById("search").value;

    if (search == "") {
        document.getElementById("link").href = "https://www.pelisplanet.com";
    }
    if (search !== "") {
        for (var i=0; i<search.length; i++) {
            search = search.replace(" ", "+");
        }
        document.getElementById("link").href = "https://www.pelisplanet.com/?s="+search;
    }
}
//--------------------------------------------------------------------------------------------------------------------
function pelisplus() {
    document.getElementById("search").disabled = true;
    document.getElementById("season").disabled = true;
    document.getElementById("episode").disabled = true;
    
    document.getElementById("link").href = "http://pelisplus.co/";
}
//--------------------------------------------------------------------------------------------------------------------
function kisscartoon() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = false;
    document.getElementById("episode").disabled = true;
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    
    if (search == "") {
        document.getElementById("link").href = "https://kisscartoon.is/kisscartoon.html";
    }
    if (search !== "") {
        document.getElementById("link").href = "https://kisscartoon.ac/Search/?s="+search;
    }
    if (search !== "" && season !== "") {
        document.getElementById("link").href = "https://kisscartoon.ac/Search/?s="+search+" season "+season;
    }
}
//--------------------------------------------------------------------------------------------------------------------
function animeflv() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = false;
    document.getElementById("episode").disabled = true;
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;

    if (search == "") {
        document.getElementById("link").href = "https://animeflv.net";
    }
    if (search !== "") {
        document.getElementById("link").href = "https://animeflv.net/browse?q="+search;
    }
    if (search !== "" && season !== "") {
        document.getElementById("link").href = "https://animeflv.net/browse?q="+search+" season "+season;
    }
}
//--------------------------------------------------------------------------------------------------------------------
function piratebay() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = false;
    document.getElementById("episode").disabled = false;
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;
    for (var i=0; i<search.length; i++) {
        search = search.replace(" ", ".");
    }

    if (search == "") {
        document.getElementById("link").href = "https://thepiratebay.org";
    }
    if (search !== "") {
        document.getElementById("link").href = "https://thepiratebay.org/search/"+search;
    }
    if (search !== "" && season !== "") {
        document.getElementById("link").href = "https://thepiratebay.org/search/"+search+" season "+season;
    }
    if (search !== "" && season !== "" && episode!== "") {
        if (season<10) {
            season = "0"+season;
        }
        if (episode<10) {
            episode = "0"+episode;
        }
        document.getElementById("link").href = "https://thepiratebay.org/search/"+search+".s"+season+"e"+episode;
    }
}
//--------------------------------------------------------------------------------------------------------------------
function subdivx() {
    document.getElementById("search").disabled = false;
    document.getElementById("season").disabled = false;
    document.getElementById("episode").disabled = false;
    var search = document.getElementById("search").value;
    var season = document.getElementById("season").value;
    var episode = document.getElementById("episode").value;
    for (var i=0; i<search.length; i++) {
        search = search.replace(" ", "+");
    }
    if (season<10 && season!== "") {
        season = "0"+season;
    }
    if (episode<10 && episode!== "") {
        episode = "0"+episode;
    }

    if (search == "") {
        document.getElementById("link").href = "https://www.subdivx.com/index.php";
    }
    if (search !== "") {
        document.getElementById("link").href = "https://www.subdivx.com/index.php?buscar="+search+"&accion=5&masdesc=&subtitulos=1&realiza_b=1";
    }
    if (search !== "" && season !== "") {
        document.getElementById("link").href = "https://www.subdivx.com/index.php?buscar="+search+"+s"+season+"&accion=5&masdesc=&subtitulos=1&realiza_b=1";
    }
    if (search !== "" && season !== "" && episode!== "") {
        document.getElementById("link").href = "https://www.subdivx.com/index.php?buscar="+search+"+s"+season+"e"+episode+"&accion=5&masdesc=&subtitulos=1&realiza_b=1";
    }
}