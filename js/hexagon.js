$(document).ready(function() {
  // document is loaded and DOM is ready
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("more_info");
    // tabcontent[1].style.display = "none";
  
  tablinks = document.getElementsByClassName("tablinks");
    // tablinks[1].className = tablinks[i].className.replace(" active", "");
  
  document.getElementById('cosmetic_dentistry').style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById("serviceName").innerHTML =  'COSMETIC DENTISTRY';
});

function showInfo(evt, service,serviceName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("more_info");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " active";
  document.getElementById("serviceName").innerHTML =  serviceName;
}
  
