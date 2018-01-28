/*
 * Állomány név: JS002A4.js
 * Készült: 2018.01.28
 * Készítő: zavorszky@yahoo.com
 *
 * Állapot átmenetek
 * D = A(onLoad)
 * B = D(onClicl-StartStop)
 * C = B(onTimeOut)
 * D = B(onClick-StartStop)
 * B = C(onTimeOut)
 * D = C(onClick-StartStop)
 */
function villogo_ini() {
  v_allapot="A";
  v_timer_ref=undefined;
  v_ido_start=undefined;
} // villogo_ini

function villogo_valt(p_esemeny) {
//window.alert("p_esemeny="+p_esemeny);
  var v_allapot_uj=v_allapot;
  var v_ido_most;
  
  //A "v_allapot" és a "p_esemeny" alapján a "v_allapz_uj" meghatározása.
  if (v_allapot === "A" && p_esemeny === "onLoad") {
    v_allapot_uj="D";
  }
  else if (v_allapot === "D" && p_esemeny === "OCStartStop") {
    v_allapot_uj="B";
  }
  else if (v_allapot === "B" && p_esemeny === "onTimeOut") {
    v_allapot_uj="C";
  }
  else if (v_allapot === "C" && p_esemeny === "onTimeOut") {
    v_allapot_uj="B";
  }
  else if (v_allapot === "B" && p_esemeny === "OCStartStop") {
    v_allapot_uj="D";
  }
  else if (v_allapot === "C" && p_esemeny === "OCStartStop") {
    v_allapot_uj="D";
  }
//window.alert("v_allapot_uj="+v_allapot_uj);
  if (v_allapot_uj === v_allapot) {
    return;
  }
  
  // A új állapotnak megfelelő Böngésző állapot beállítása.
  if (v_allapot === "A" && v_allapot_uj === "D") {
    document.getElementById("id_gomb_startstop").innerHTML="Start";
    document.getElementById("id_bal_feny").style.backgroundColor = "yellow";
    document.getElementById("id_jobb_feny").style.backgroundColor = "yellow";
  }
  else if (v_allapot === "D" && v_allapot_uj === "B") {
    document.getElementById("id_bal_feny").style.backgroundColor = "green";
    document.getElementById("id_jobb_feny").style.backgroundColor = "red";
    document.getElementById("id_gomb_startstop").innerHTML="Stop";
    document.getElementById("id_kijelzo").innerHTML="0 mp";
    v_ido_start=new Date();
    v_timer_ref = window.setTimeout(villogo_valt,1000,"onTimeOut");
  }
  else if ((v_allapot === "B" || v_allapot === "C") && (v_allapot_uj === "D")) {
    if (v_timer_ref) window.clearTimeout(v_timer_ref);
    document.getElementById("id_bal_feny").style.backgroundColor = "yellow";
    document.getElementById("id_jobb_feny").style.backgroundColor = "yellow";
    document.getElementById("id_gomb_startstop").innerHTML="Start";
    v_ido_most=new Date();
    v_ido_kulonbseg=Math.ceil((v_ido_most.getTime() - v_ido_start.getTime())/1000);
    document.getElementById("id_kijelzo").innerHTML=v_ido_kulonbseg+" mp";
  }
  else if (v_allapot === "B" && v_allapot_uj === "C") {
    document.getElementById("id_bal_feny").style.backgroundColor = "red";
    document.getElementById("id_jobb_feny").style.backgroundColor = "green";
    v_ido_most=new Date();
    v_ido_kulonbseg=Math.ceil((v_ido_most.getTime() - v_ido_start.getTime())/1000);
    document.getElementById("id_kijelzo").innerHTML=v_ido_kulonbseg+" mp";
    v_timer_ref = window.setTimeout(villogo_valt,1000,"onTimeOut");
  }
  else if (v_allapot === "C" && v_allapot_uj === "B") {
    document.getElementById("id_bal_feny").style.backgroundColor = "green";
    document.getElementById("id_jobb_feny").style.backgroundColor = "red";
    v_ido_most=new Date();
    v_ido_kulonbseg=Math.ceil((v_ido_most.getTime() - v_ido_start.getTime())/1000);
    document.getElementById("id_kijelzo").innerHTML=v_ido_kulonbseg+" mp";
    v_timer_ref = window.setTimeout(villogo_valt,1000,"onTimeOut");
  }
  
  v_allapot=v_allapot_uj;

} //villogo_valt

villogo_ini();

