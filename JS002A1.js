/*
 * B = A(onLoad)
 * C = B(onClick)
 * B = C(onClick)
 */
var v_allapot = "A";

function feny_valtas() {
  switch (v_allapot) {
    case "A": v_allapot = "B"; break;
    case "B": v_allapot = "C"; break;
    case "C": v_allapot = "B"; break;
  }
  
  if (v_allapot === "B") {
    document.getElementById("id_bal_feny").style.backgroundColor = "blue";
    document.getElementById("id_jobb_feny").style.backgroundColor = "red";
  }
  else {
    document.getElementById("id_bal_feny").style.backgroundColor = "red";
    document.getElementById("id_jobb_feny").style.backgroundColor = "blue";
  }
}

function feny_valtas0() {
  document.getElementById("id_bal_feny").style.backgroundColor = "blue";
  document.getElementById("id_jobb_feny").style.backgroundColor = "yellow";
}