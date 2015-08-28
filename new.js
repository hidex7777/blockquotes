function openTab(){
  document.getElementById("selected").value = opener.document.getElementById("selected").value;
}
window.onload = openTab();