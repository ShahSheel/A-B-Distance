document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('Submit').addEventListener('click',init);      
});
var mainURL;
function init(){
  mainURL = url();
  callAjax();
}
function url(){
    if (document.getElementById('location') != null) {
    var location = document.getElementById("location").value;
  }

    if (document.getElementById('destination') != null) {
    var destination = document.getElementById("destination").value;
  }
    if (document.getElementById('destination') != null) {
    var destination = document.getElementById("destination").value;
  }

    var selection = document.querySelector('input[name="selection"]:checked').id;

    /** Create the URL **/ 
    var beginURL = "https://www.mapquestapi.com/directions/v2/route?key=9vyfTMs7Q4JVtr4u5ItN8Fd0YHuw1dqn&from=";
    url = beginURL.concat(location);
    var addDestnation = "&to="
    var addDest = addDestnation.concat(destination);
    url2 = url.concat(addDest);
    var returnXMLFormat = "&outFormat=XML&ambiguities=ignore&"
    url3 = url2.concat(returnXMLFormat);
    var routeType = "routeType=";
    var combineRoute = routeType.concat(selection);
    url4 = url3.concat(combineRoute);
    var endURL = "&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false"
    finalURL = url4.concat(endURL);
    return "https://www.mapquestapi.com/directions/v2/route?key=9vyfTMs7Q4JVtr4u5ItN8Fd0YHuw1dqn&from=Cr44ef&to=horsham&outFormat=XML&ambiguities=ignore&routeType=shortest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false";
}
/** currently this doens't work. 
returns Object object when having a function, else works without it..but it would be called first rather than from init() 
**/
function callAjax(){
   $.ajax({
    type: "GET",
    url: mainURL,
    dataType: "XML",
    success: parseXML,
  });
}

function parseXML(xml) {
  $('#xmlSource').val( xmlToString(xml) );
  var ballList = $('distance', xml).get();
  $.each(ballList, function( index, value ) {
    console.log( index + ": " + value.textContent );
    $('#r_distance').append(value.textContent);
    return false;
  });
  
}
  
function xmlToString(xmlData) { 
  var xmlString;
  if (window.ActiveXObject){
    xmlString = xmlData.xml;
  } else{
    xmlString = (new XMLSerializer()).serializeToString(xmlData);
  }
  return xmlString;
}  



