/*
 * Állomány:  JS003A1.js
 * Feladat:   JS003A1
 * Létrejött: 2018.02.18
 * Létrehozó: zavorszky@yahoo.com
 */
var v_pontszam_darab = 8;
var v_pontszam_min = 0;
var v_pontszam_max = 10;
var v_szin_norm = "black";
var v_szin_hiba = "red";
var v_kerdes_csoportok = ["KI_CSTT_pont_1", "KI_CSTT_pont_2"];

function ellenorzes() {
  var v_element;
  var v_hiba_uzenet;
  var v_hiba_szin;
  var v_pontszam;
  var v_pontszam_jo;
  var v_pontszam_mind_jo;
  var v_pontszam_osszeg;

  var i, j, k;

  for (i = 0; i < (v_kerdes_csoportok.length); i++) {
    v_pontszam_mind_jo = true;
    v_pontszam_osszeg = 0;
    for (j = 0; j < v_pontszam_darab; j++) {
      k = (i * 8) + j;
      v_pontszam = Number(document.KI_CSTT.elements[k].value);
      v_pontszam_jo = ((v_pontszam_min <= v_pontszam) && (v_pontszam <= v_pontszam_max));
      if (v_pontszam_jo) {
        document.KI_CSTT.elements[k].style.color = v_szin_norm;
      } else {
        document.KI_CSTT.elements[k].style.color = v_szin_hiba;
        v_pontszam_mind_jo = false;
      }
      v_pontszam_osszeg += v_pontszam;
    } // for

    if (!v_pontszam_mind_jo) {
      v_hiba_uzenet = "[Hibás pontszám]";
      v_hiba_szin = v_szin_hiba;
    } else {

      if (v_pontszam_osszeg == v_pontszam_max) {
        v_hiba_uzenet = "";
        v_hiba_szin = v_szin_norm;
      } else {
        v_hiba_uzenet = "[" + v_pontszam_osszeg + "/" + v_pontszam_max + "]";
        v_hiba_szin = v_szin_hiba;
      }
    }
    v_element = document.getElementById(v_kerdes_csoportok[i]);
    v_element.innerHTML = v_hiba_uzenet;
    v_element.style.color = v_hiba_szin;
  } // for
} // ellenorzes