/*
 * Állomány név: JS002A6.js
 * Készült: 2018.02.05
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

function ido_kulonbseg_formazas(p_d2, p_d1) {
  var v_maradekok=[0,0,0,0,0];
  
  var v_osztando, v_hanyados, v_maradek, i;
  v_osztando=Math.abs(p_d2.getTime() - p_d1.getTime());
  i=0;
  while ((v_osztando > 0) && (i < 4)) {
    i++;
    v_hanyados=Math.floor(v_osztando / v_osztok[i][1]);
    v_maradek=v_osztando - (v_hanyados * v_osztok[i][1]);
    v_maradekok[i-1]=v_maradek;
    v_osztando=v_hanyados;
  }
  
  //Formázás
  i=4;
  while ((v_maradekok[i] === 0) && (i > 1))
    i--;
  
  var v_txt="";
  while (i > 1) {
    v_txt += " " + v_maradekok[i] + " " + v_osztok[i][0];
    i--;
  }
  
  v_txt += " " + v_maradekok[i] + " " + v_osztok[i][0];
  
  return v_txt.substring(1,1000);
  
} //idokulonbseg_formazas

function tik(p_esemeny) {
  var v_allapot_uj=this.v_allapot;
  var v_ido_most;
  
  //A "v_allapot" és a "p_esemeny" alapján a "v_allapz_uj" meghatározása.
  if (this.v_allapot === "A" && p_esemeny === "onLoad") {
    v_allapot_uj="D";
  }
  else if (this.v_allapot === "D" && p_esemeny === "OCStartStop") {
    v_allapot_uj="B";
  }
  else if (this.v_allapot === "B" && p_esemeny === "onTimeOut") {
    v_allapot_uj="C";
  }
  else if (this.v_allapot === "C" && p_esemeny === "onTimeOut") {
    v_allapot_uj="B";
  }
  else if (this.v_allapot === "B" && p_esemeny === "OCStartStop") {
    v_allapot_uj="D";
  }
  else if (this.v_allapot === "C" && p_esemeny === "OCStartStop") {
    v_allapot_uj="D";
  }

  if (v_allapot_uj === this.v_allapot) {
    return;
  }
  
  // A új állapotnak megfelelő Böngésző állapot beállítása.
  if (this.v_allapot === "A" && v_allapot_uj === "D") {
    document.getElementById(this.id_gomb).innerHTML="Start";
    document.getElementById(this.id_bal_feny).style.backgroundColor = "yellow";
    document.getElementById(this.id_jobb_feny).style.backgroundColor = "yellow";
  }
  else if (this.v_allapot === "D" && v_allapot_uj === "B") {
    document.getElementById(this.id_bal_feny).style.backgroundColor = "green";
    document.getElementById(this.id_jobb_feny).style.backgroundColor = "red";
    document.getElementById(this.id_gomb).innerHTML="Stop";
    v_ido_start=new Date();
    document.getElementById(this.p_id_kijelzo).innerHTML=ido_kulonbseg_formazas(v_ido_start, v_ido_start);
    this.v_timer_ref = window.setTimeout(this.tik,1000,"onTimeOut");
  }
  else if ((this.v_allapot === "B" || this.v_allapot === "C") && (v_allapot_uj === "D")) {
    if (this.v_timer_ref) window.clearTimeout(this.v_timer_ref);
    document.getElementById(this.id_bal_feny).style.backgroundColor = "yellow";
    document.getElementById(this.id_jobb_feny).style.backgroundColor = "yellow";
    document.getElementById(this.id_gomb).innerHTML="Start";
    v_ido_most=new Date();
    document.getElementById(this.p_id_kijelzo).innerHTML=ido_kulonbseg_formazas(v_ido_most, this.v_ido_start);
  }
  else if (this.v_allapot === "B" && v_allapot_uj === "C") {
    document.getElementById(this.id_bal_feny).style.backgroundColor = "red";
    document.getElementById(this.id_jobb_feny).style.backgroundColor = "green";
    v_ido_most=new Date();
    document.getElementById(this.p_id_kijelzo).innerHTML=ido_kulonbseg_formazas(v_ido_most, this.v_ido_start);
    this.v_timer_ref = window.setTimeout(this.tik,1000,"onTimeOut");
  }
  else if (this.v_allapot === "C" && v_allapot_uj === "B") {
    document.getElementById(this.id_bal_feny).style.backgroundColor = "green";
    document.getElementById(this.id_jobb_feny).style.backgroundColor = "red";
    v_ido_most=new Date();
    document.getElementById(this.p_id_kijelzo).innerHTML=ido_kulonbseg_formazas(v_ido_most, this.v_ido_start);
    this.v_timer_ref = window.setTimeout(this.tik,1000,"onTimeOut");
  }
  
  this.v_allapot=v_allapot_uj;

} //tik

function ini() {
    this.v_allapot="A";
    this.tik("onLoad");
}

function start() {
  this.tik("OCStartStop");
}

function Stopper(p_id_bal_feny, p_id_jobb_feny, p_id_kijelzo, p_id_gomb) {
  this.v_osztok=[];
  this.v_osztok[0]=['ms',1];
  this.v_osztok[1]=['s',1000];
  this.v_osztok[2]=['m',60];
  this.v_osztok[3]=['h',60];
  this.v_osztok[4]=['d',24];
  this.id_bal_feny=p_id_bal_feny;
  this.id_jobb_feny=p_id_jobb_feny;
  this.id_kijelzo=p_if_kijelzo;
  this.id_gomb=p_id_gomb;
  this.v_allapot=undefined;
  this.v_timer_ref=undefined;
  this.v_ido_start=undefined;
  this.tik=tik;
  this.ini=ini;
  this.start=start;
} // Stopper


