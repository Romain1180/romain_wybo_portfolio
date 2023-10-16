function afficherHeure() {
    let date = new Date();
    let heures = date.getHours();
    let minutes = date.getMinutes();
    let secondes = date.getSeconds();
    let heureCourante = heures + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (secondes < 10 ? "0" : "") + secondes;
    let divHeure = document.querySelector(".hour");
  
    divHeure.textContent = heureCourante;
  }
  afficherHeure();
  
  setInterval(afficherHeure, 1000);