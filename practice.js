function loadPage(url, callback) {
    var x = new XMLHttpRequest();

    x.open("GET", url, true);
    x.setRequestHeader('Access-Control-Allow-Origin', '*');
    x.withCredentials = false;

    x.onreadystatechange = function() {
        if(x.readyState ==4 && x.status == 200) {
            callback(x.response);
        }
    };
    x.send();
}