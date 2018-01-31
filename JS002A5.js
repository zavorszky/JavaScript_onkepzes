/*
 * Állomány név: JS002A5.js
 * Készült: 2018.01.31
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
function ido_kulonbseg_formazas(p_d1, p_d2) {
  var v_osztok=[];
  v_osztok[0]=['ms',1,0];
  v_osztok[1]=['sec',1000,0];
  v_osztok[2]=['min',60,0];
  v_osztok[3]=['h',60,0];
  v_osztok[4]=['d',24,0];
  
  var v_osztando, v_hanyados, v_maradek, i;
  v_osztando=Math.ceil(Math.abs(p_d2.getTime() - p_d1.getTime())/1000);
  i=0;
  while ((v_osztando > 0) && (i < 4)) {
    i++;
    v_hanyados=Math.ceil(v_osztando / v_osztok[i][1]);
    v_maradek=v_osztando - (v_hanyados * v_osztok[i][1]);
    v_osztok[(i-1)][2]=v_maradek;
    v_osztando=v_hanyados;
  }
  
  //Formázás
  i=4;
  while ((v_osztok[i][2] === 0) && (i > 1))
    i--;
  
  var v_txt="";
  while (i > 1) {
    v_txt=v_txt + " " + v_osztok[i][2] + " " + v_osztok[i][0];
    i--;
  }
  
  v_txt=v_txt + " " + v_osztok[i][2] + " " + v_osztok[i][0];
  
  return v_txt.substring(1,100);
  
} //idokulonbseg_formazas

function villogo_ini() {
  v_allapot="A";
  v_timer_ref=undefined;
  v_ido_start=undefined;
} // villogo_ini

function villogo_valt(p_esemeny) {
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
    v_ido_start=new Date();
    document.getElementById("id_kijelzo").innerHTML=ido_kulonbseg_formazas(v_ido_start, v_ido_start);
    v_timer_ref = window.setTimeout(villogo_valt,1000,"onTimeOut");
  }
  else if ((v_allapot === "B" || v_allapot === "C") && (v_allapot_uj === "D")) {
    if (v_timer_ref) window.clearTimeout(v_timer_ref);
    document.getElementById("id_bal_feny").style.backgroundColor = "yellow";
    document.getElementById("id_jobb_feny").style.backgroundColor = "yellow";
    document.getElementById("id_gomb_startstop").innerHTML="Start";
    v_ido_most=new Date();
    document.getElementById("id_kijelzo").innerHTML=ido_kulonbseg_formazas(v_ido_most, v_ido_start);
  }
  else if (v_allapot === "B" && v_allapot_uj === "C") {
    document.getElementById("id_bal_feny").style.backgroundColor = "red";
    document.getElementById("id_jobb_feny").style.backgroundColor = "green";
    v_ido_most=new Date();
    document.getElementById("id_kijelzo").innerHTML=ido_kulonbseg_formazas(v_ido_most, v_ido_start);
    v_timer_ref = window.setTimeout(villogo_valt,1000,"onTimeOut");
  }
  else if (v_allapot === "C" && v_allapot_uj === "B") {
    document.getElementById("id_bal_feny").style.backgroundColor = "green";
    document.getElementById("id_jobb_feny").style.backgroundColor = "red";
    v_ido_most=new Date();
    document.getElementById("id_kijelzo").innerHTML=ido_kulonbseg_formazas(v_ido_most, v_ido_start);
    v_timer_ref = window.setTimeout(villogo_valt,1000,"onTimeOut");
  }
  
  v_allapot=v_allapot_uj;

} //villogo_valt

villogo_ini();

