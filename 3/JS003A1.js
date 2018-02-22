/*
 * Állomány:  JS003A1.js
 * Feladat:   JS003A1
 * Létrejött: 2018.02.18
 * Létrehozó: zavorszky@yahoo.com
 */
var v_pontszam_max = 10;

function ellenorzes() {
  var v_pontszam_osszeg;
  var v_element = document.getElementById("KI_CSTT_pont_1");
  v_element.style.color="black";
  v_pontszam_osszeg = Number(document.KI_CSTT.KI_CSTT_pont_1_1.value) + Number(document.KI_CSTT.KI_CSTT_pont_1_2.value);
  v_element = document.getElementById("KI_CSTT_pont_1");
  v_element.innerHTML = "[" + v_pontszam_osszeg + "/" + v_pontszam_max + "]";
  if (v_pontszam_osszeg == v_pontszam_max)
    v_element.style.color="green";
  else
    v_element.style.color="red";
}

