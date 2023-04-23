function updateClock() {
    const clock = document.querySelector('#clock');
    const heureactuelle = new Date();
    
    const heure = heureactuelle.getHours();
    const minute = heureactuelle.getMinutes();
    const seconde = heureactuelle.getSeconds();
    const timeString = `${heure.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconde.toString().padStart(2, '0')}`;
    clock.textContent = timeString;
  }
  
  //on appelle la fonction avant le setInterval pour eviter l'ecart d'une seconde lors de 
  //l'affichage de l'horloge lors du rafraichissement de la page
  updateClock();

  setInterval(updateClock, 1000);