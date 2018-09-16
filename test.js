
$.ajax({
  type: "GET",
  url: "https://www.mapquestapi.com/directions/v2/route?key=9vyfTMs7Q4JVtr4u5ItN8Fd0YHuw1dqn&from=Cr44ef&to=horsham&outFormat=XML&ambiguities=ignore&routeType=shortest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false",
  dataType: "xml",
  success: parseXML
});



function parseXML(xml) {
  alert("Got here");
  $('#xmlSource').val( xmlToString(xml) );
  
  var ballList = $('distance', xml).get();
  var ballCount=0;
  $.each(ballList, function( index, value ) {
    console.log( index + ": " + value.textContent );
    $('#results').append(value.textContent);
    if (ballCount < ballList.length-1) {
      $('#results').append(",");
    }
    ballCount++;
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
