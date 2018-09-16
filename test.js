function getAjax(mainURL){
   $.ajax({
    type: "GET",
    async: false,
    url: mainURL,
    dataType: "xml",
    success: parseXML
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