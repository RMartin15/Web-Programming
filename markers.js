function load() {
if (GBrowserIsCompatible()) {

var map = new GMap(document.getElementById("map"));
map.addControl(new GLargeMapControl());
map.addControl(new GMapTypeControl());


//Sets center for the map when the page loads
map.setCenter(new GLatLng(41.258531,-96.012599), 2);

GDownloadUrl("data.xml", function(data) { //Downloads data from the XML document data.xml located in my js directory

var xml = GXml.parse(data); //Parses the data from data.xml
var markers = xml.documentElement.getElementsByTagName("marker"); //Defines markers by the element name in markers.js
for (var i = 0; i < markers.length; i++) { //The for loop that places markers on the map until there are no more marker objects

//Parses the latidude and longitude from the marker objects in markers.js
var point = new GLatLng(parseFloat(markers[i].getAttribute("lat")),
parseFloat(markers[i].getAttribute("lng")));
map.addOverlay(new GMarker(point)); //Places the markers over the points, which are defined in variable point for lat and long

}
});
}
}
