function afficherTemps(id){
    const passageArret = document.querySelector("#listePassage")
    passageArret.innerHTML = ""
    fetch("https://api.tisseo.fr/v1/stops_schedules.json?key=a3732a1074e2403ce364ad6e71eb998cb&stopPointId="+id)
    .then(response => response.json())
    .then(data => {
        for(temps of data.departures.departure){
            passageArret.innerHTML += "<li>" + temps.dateTime + "</li>"
        }
    })
    .catch(err => console.error(err))  
}

function afficherArret(id){
    const recupLigne = document.querySelector("#listeArret")
    recupLigne.innerHTML = ""  
    fetch("https://api.tisseo.fr/v1/stop_points.json?key=a3732a1074e2403ce364ad6e71eb998cb&lineId="+id)
    .then(response => response.json())
    .then(data => {
        console.log(data.physicalStops.physicalStop)
        for(arret of data.physicalStops.physicalStop){
            recupLigne.innerHTML += "<li onclick = \"afficherTemps(" + arret.id + ")\" id=\""+ arret.id +"\">" + arret.name + "</li>"
        }
    })
    .catch(err => console.error(err))  
}

const recupLigne = document.querySelector("#recupLigne")
recupLigne.addEventListener('click', 
    () => {
        const pLigne = document.querySelector("#listeLigne");
        fetch("https://api.tisseo.fr/v1/lines.json?key=a3732a1074e2403ce364ad6e71eb998cb")
        .then(response => response.json())
        .then(data => {
            const lignes = data.lines.line;
            console.log(lignes)
            for(ligne of lignes){
                pLigne.innerHTML += "<li onclick = \"afficherArret(" + ligne.id + ")\" id=\""+ ligne.id +"\">" + ligne.name + "</li>"
            }
        })
        .catch(err => console.error(err))
    });

