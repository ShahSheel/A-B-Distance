document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('Submit').addEventListener('click', url);      
});

function url(){
    if (document.getElementById('location') != null) {
    var location = document.getElementById("location").value;
  }

    if (document.getElementById('destination') != null) {
    var destination = document.getElementById("destination").value;
  }

    var beginURL = "http://maps.google.com/maps?saddr=";
    var endURL = "&daddr=";
    url = beginURL.concat(location,endURL,destination);
    openInNewTab(url);
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}