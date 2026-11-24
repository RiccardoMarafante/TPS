var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};

xhttp.open("GET", "dati.json", true);
xhttp.send();

function myFunction(xml) {
    var dati = JSON.parse(xml.responseText);
    var tabella = document.getElementById("tabella");
    var intestazione = "<tr>";
    
    for (var chiave in dati[0]) {
        intestazione += "<th>" + chiave + "</th>";
    }
    intestazione += "</tr>";
    
    var righe = intestazione;
    
    for (var i = 0; i < dati.length; i++) {
        righe += "<tr>";
        for (var chiave in dati[i]) {
            righe += "<td>" + dati[i][chiave] + "</td>";
        }
        righe += "</tr>";
    }
    
    tabella.innerHTML = righe;
}
