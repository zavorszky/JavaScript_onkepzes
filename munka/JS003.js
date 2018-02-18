/* Példa-1 */
var g_szamlaloA_pl1;
var g_szamlaloB_pl1;
var g_szamlaloC_pl1;
g_szamlaloA_pl1=1958;
g_szamlaloB_pl1=11;
function kiirA_pl1() {
    var g_szamlaloB_pl1=27;
    var l_txt="kiirA_pl1()<br>g_szamlaloA_pl1="+g_szamlaloA_pl1+"<br>g_szamlaloB_pl1="+g_szamlaloB_pl1+"<br>g_szamlaloC_pl1="+g_szamlaloC_pl1;
    document.getElementById("idA_pl1").innerHTML = l_txt;
}
function kiirB_pl1() {
    var l_txt="kiirB_pl1()<br>g_szamlaloB_pl1="+g_szamlaloB_pl1;
    document.getElementById("idB_pl1").innerHTML = l_txt;
}
/* Példa-2 */
function tipus_pl2() {
    var l_valtozo;
    var l_txt;
    l_valtozo=2;
    l_txt="1. 2+l_valtozo="+(2+l_valtozo);
    l_valtozo="z9";
    l_txt=l_txt+"<br>2. 2+l_valtozo="+(2+l_valtozo);
    document.getElementById("id_pl2").innerHTML = l_txt;
}
/* Példa-3 */
function tombbol_sztring_pl3() {
    var l_nevek_str="";
    var l_nevek_arr=["Isti", "Edit", "ZIsti"];
    for (i=0; i<l_nevek_arr.length; i++) {
        l_nevek_str+=((i===0)?"":";")+l_nevek_arr[i];
    }
    document.getElementById("id_pl3").innerHTML = l_nevek_str;
}
function sztringbol_tomb_pl3() {
    var l_txt="";
    var l_nevek_str="Isti,Edit,ZIsti";
    var l_nevek_arr=l_nevek_str.split(",");
    for (i=0; i<l_nevek_arr.length; i++) {
        l_txt+=((i===0)?"":"<br>")+"l_nevek_arr["+i+"]="+l_nevek_arr[i];
    }
    document.getElementById("id_pl3").innerHTML = l_txt;
}

