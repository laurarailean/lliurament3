var indexDiapos = 1;

    function passaDiapos(n) {
        mostraDiapos(indexDiapos += n);
    }

    function mostraDiapos(n) {

        let diapositives = document.getElementsByClassName("fotoProj");
        let descripcio = document.getElementsByClassName("nomProj");

        if (n > diapositives.length) {
            indexDiapos = 1;
        }

        if (n < 1) {
            indexDiapos = diapositives.length;
        }

        for (let i = 0 ; i < diapositives.length ; i++) {
            diapositives[i].style.display = "none";
            descripcio[i].style.display = "none";
        }

        diapositives[indexDiapos - 1].style.display = "block";
        descripcio[indexDiapos - 1].style.display = "block";
    }

window.onload = function(){

  let diapositives = document.getElementsByClassName("fotoProj");
  let descripcio = document.getElementsByClassName("nomProj");

  for (let i = 1 ; i <= diapositives.length ; i++) {
    diapositives[i].style.display = "none";
    descripcio[i].style.display = "none";
  }
}