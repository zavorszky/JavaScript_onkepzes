/*
 * Állomány:  JS003A2.js
 * Feladat:   JS003A2
 * Létrejött: 2018.02.25
 * Létrehozó: zavorszky@yahoo.com
 */
var v_pontszam_darab = 8;
var v_pontszam_min = 0;
var v_pontszam_max = 10;
var v_szin_norm = "green";
var v_szin_hiba = "red";
var v_kerdes_csoportok = ["KI_CSTT_pont_1", "KI_CSTT_pont_2"];

function ki_ellenorzes_mind() {
  var v_element;
  var v_elem_kerdes;
  var v_hiba_uzenet;
  var v_hiba_szin;
  var v_pontszam;
  var v_pontszam_mind_jo;
  var v_pontszam_osszeg;
  var i, j, k;

  for (i = 0; i < (v_kerdes_csoportok.length); i++) {
    v_pontszam_mind_jo = true;
    v_pontszam_osszeg = 0;
    for (j = 0; j < v_pontszam_darab; j++) {
      k = (i * 8) + j;
      v_elem_kerdes = document.KI_CSTT.elements[k];
      v_pontszam = ki_ellenorzes_egy_func(v_elem_kerdes);
      if (v_pontszam >= v_pontszam_min) {
        v_pontszam_osszeg += v_pontszam;
      } else {
        v_pontszam_mind_jo = false;
      }
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
} // ki_ellenorzes_mind

function ki_ellenorzes_egy_func(p_element) {
  var v_szin;
  var v_pontszam;
  v_pontszam = Number(p_element.value);
  if ((v_pontszam < v_pontszam_min) || (v_pontszam_max < v_pontszam)) {
    v_pontszam = (v_pontszam_min - 1);
  }
  if (v_pontszam >= v_pontszam_min) {
    v_szin = v_szin_norm;
  } else {
    v_szin = v_szin_hiba;
  }
  p_element.style.color = v_szin; //v_szin_hiba;
  return v_pontszam;
} // ki_ellenorzes_egy_func

function ki_ellenorzes_egy_prc(p_element) {
  var v_pontszam;
  v_pontszam = ki_ellenorzes_egy_func(p_element);
} // ki_ellenorzes_egy_prc

function ki_ellcsomagolo(p_element) {
  return function() {
    ki_ellenorzes_egy_prc(p_element);
  };
} // ki_ellcsomagolo

function ki_ini() {
  var v_element;
  var i;
  for (i = 0; i < (v_kerdes_csoportok.length * 8); i++) {
    v_element = document.KI_CSTT.elements[i];
    v_element.onchange = ki_ellcsomagolo(v_element);
  }
} //ki_ini