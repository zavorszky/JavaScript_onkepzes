/*
 * Az aktuális dátum megmutatása az Alert ablakben.
 */
function kiir_pontos_ido() {
  var v_pontos_ido = new Date();
  window.alert('A pontos idő: '+v_pontos_ido.toString());
}