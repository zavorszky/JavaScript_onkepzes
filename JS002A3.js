/*
 * D = A(onLoad)
 * B = D(onClicl-Start)
 * C = B(onClick-Tick)
 * D = B(onClick-Stop)
 * B = C(onClick-Tick)
 * D = C(onClick-Stop)
 */
function villogo_ini() {
  v_allapot="A";
  v_timer_ref=undefined;
} /* villogo_ini */

function villogo_valt(p_esemeny) {
//window.alert("p_esemeny="+p_esemeny);
  var v_allapot_uj=v_allapot;
  
  /* A "v_allapot" és a "p_esemeny" alapján a "v_allapz_uj" meghatározása. */
  if (v_allapot === "A" && p_esemeny === "onLoad") {
    v_allapot_uj="D";
  }
  else if (v_allapot === "D" && p_esemeny === "OCStartStop") {
    v_allapot_uj="B";
  }
  else if (v_allapot === "B" && p_esemeny === "OCTime") {
    v_allapot_uj="C";
  }
  else if (v_allapot === "C" && p_esemeny === "OCTime") {
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
  
  /* A új állapotnak megfelelő Böngésző állapot beállítása. */
  if (v_allapot === "A" && v_allapot_uj === "D") {
    document.getElementById("id_gomb_startstop").innerHTML="Start";
  }
  else if (v_allapot === "D" && v_allapot_uj === "B") {
    document.getElementById("id_gomb_startstop").innerHTML="Stop";
  }
  else if ((v_allapot === "B" || v_allapot === "C") && (v_allapot_uj === "D")) {
    document.getElementById("id_gomb_startstop").innerHTML="Start";
  }
  
  if (v_allapot_uj === "B") {
    document.getElementById("id_bal_feny").style.backgroundColor = "green";
    document.getElementById("id_jobb_feny").style.backgroundColor = "red";
    v_timer_ref = window.setTimeout("villogo_valt('OCTime')",1000);
  }
  else if (v_allapot_uj === "C") {
    document.getElementById("id_bal_feny").style.backgroundColor = "red";
    document.getElementById("id_jobb_feny").style.backgroundColor = "green";
    v_timer_ref = window.setTimeout("villogo_valt('OCTime')",1000);
  }
  else {
    document.getElementById("id_bal_feny").style.backgroundColor = "yellow";
    document.getElementById("id_jobb_feny").style.backgroundColor = "yellow";
    if (v_timer_ref) window.clearTimeout(v_timer_ref);
  }
  
  v_allapot=v_allapot_uj;

} /*villogo_valt*/

villogo_ini();

