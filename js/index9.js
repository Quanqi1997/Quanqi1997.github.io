//part one
var map = new BMap.Map("myMap"); 
map.centerAndZoom(new BMap.Point(120.141,30.257), 11);
var local = new BMap.LocalSearch(map, {
    renderOptions: {
    map: map,
    autoViewport: true
  }
});
local.searchNearby("宾馆", "西湖");

//part two
var map = new BMap.Map("shbusMap");
map.centerAndZoom(new BMap.Point(120.015,30.295), 15); 
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "result",
    autoViewport: true
  }
});
transit.search("杭州师范大学仓前校区", "宾馆");

//part three
$(init) 
function init() {
  $("#shuyuan1").hide();
  $("#shuyuan2").hide();
var map = new BMap.Map("schoolMap");
map.centerAndZoom(new BMap.Point(120.01748,30.296409), 17);
var point = new BMap.Point(120.020013,30.29484); 
var marker = new BMap.Marker(point);   
map.addOverlay(marker);
var opts=document.getElementById('shuyuan1');
var infoWindow = new BMap.InfoWindow(opts);    
marker.addEventListener("click", function(){ 
	$("#shuyuan1").show();
    map.openInfoWindow(infoWindow, point); 
});
var point1 = new BMap.Point(120.020426,30.295713);
var marker1 = new BMap.Marker(point1);   
map.addOverlay(marker1);
var opts1=document.getElementById('shuyuan2');
var infoWindow1 = new BMap.InfoWindow(opts1);    
marker1.addEventListener("click", function(){ 
	$("#shuyuan2").show();
    map.openInfoWindow(infoWindow1, point1); 
});
var point2 = new BMap.Point(120.018994,30.294294);
var marker2 = new BMap.Marker(point2);   
map.addOverlay(marker2);
var opts2=document.getElementById('shuyuan3');
var infoWindow2 = new BMap.InfoWindow(opts2);    
marker2.addEventListener("click", function(){ 
	$("#shuyuan3").show();
    map.openInfoWindow(infoWindow2, point2); 
});
var point3 = new BMap.Point(120.017498,30.294002);
var marker3 = new BMap.Marker(point3);   
map.addOverlay(marker3);
var opts3=document.getElementById('shuyuan5');
var infoWindow3 = new BMap.InfoWindow(opts3);    
marker3.addEventListener("click", function(){ 
	$("#shuyuan5").show();
    map.openInfoWindow(infoWindow3, point3); 
});
var point4 = new BMap.Point(120.016752,30.293725);
var marker4 = new BMap.Marker(point4);   
map.addOverlay(marker4);
var opts4=document.getElementById('shuyuan6');
var infoWindow4 = new BMap.InfoWindow(opts4);    
marker4.addEventListener("click", function(){ 
	$("#shuyuan6").show();
    map.openInfoWindow(infoWindow4, point4); 
});
var point5 = new BMap.Point(120.019007,30.295259);
var marker5 = new BMap.Marker(point5);   
map.addOverlay(marker5);
var opts5=document.getElementById('shuyuan7');
var infoWindow5 = new BMap.InfoWindow(opts5);    
marker5.addEventListener("click", function(){ 
	$("#shuyuan7").show();
    map.openInfoWindow(infoWindow5, point5); 
});
var point6 = new BMap.Point(120.018189,30.29543);
var marker6 = new BMap.Marker(point6);   
map.addOverlay(marker6);
var opts6=document.getElementById('shuyuan8');
var infoWindow6 = new BMap.InfoWindow(opts6);    
marker6.addEventListener("click", function(){ 
	$("#shuyuan8").show();
    map.openInfoWindow(infoWindow6, point6); 
});
var point7 = new BMap.Point(120.019142,30.296413);
var marker7 = new BMap.Marker(point7);   
map.addOverlay(marker7);
var opts7=document.getElementById('shuyuan13');
var infoWindow7 = new BMap.InfoWindow(opts7);    
marker7.addEventListener("click", function(){ 
	$("#shuyuan13").show();
    map.openInfoWindow(infoWindow7, point7); 
});
var point8 = new BMap.Point(120.017731,30.296678);
var marker8 = new BMap.Marker(point8);   
map.addOverlay(marker8);
var opts8=document.getElementById('shuyuan19');
var infoWindow8 = new BMap.InfoWindow(opts8);    
marker8.addEventListener("click", function(){ 
	$("#shuyuan19").show();
    map.openInfoWindow(infoWindow8, point8); 
});
var point9 = new BMap.Point(120.019815,30.296795);
var marker9 = new BMap.Marker(point9);   
map.addOverlay(marker9);
var opts9=document.getElementById('shuyuan12');
var infoWindow9 = new BMap.InfoWindow(opts9);    
marker9.addEventListener("click", function(){ 
	$("#shuyuan12").show();
    map.openInfoWindow(infoWindow9, point9); 
});
var point10 = new BMap.Point(120.020588,30.297395);
var marker10 = new BMap.Marker(point10);   
map.addOverlay(marker10);
var opts10=document.getElementById('shuyuan16');
var infoWindow10 = new BMap.InfoWindow(opts10);    
marker10.addEventListener("click", function(){ 
	$("#shuyuan16").show();
    map.openInfoWindow(infoWindow10, point10); 
});
var point11 = new BMap.Point(120.020354,30.297933);
var marker11 = new BMap.Marker(point11);   
map.addOverlay(marker11);
var opts11=document.getElementById('shuyuan27');
var infoWindow11 = new BMap.InfoWindow(opts11);    
marker11.addEventListener("click", function(){ 
	$("#shuyuan27").show();
    map.openInfoWindow(infoWindow11, point11); 
});
var point12 = new BMap.Point(120.018387,30.297948);
var marker12 = new BMap.Marker(point12);   
map.addOverlay(marker12);
var opts12=document.getElementById('shuyuan30');
var infoWindow12 = new BMap.InfoWindow(opts12);    
marker12.addEventListener("click", function(){ 
	$("#shuyuan30").show();
    map.openInfoWindow(infoWindow12, point12); 
});
var point13 = new BMap.Point(120.01836,30.297426);
var marker13 = new BMap.Marker(point13);   
map.addOverlay(marker13);
var opts13=document.getElementById('shuyuan23');
var infoWindow13 = new BMap.InfoWindow(opts13);    
marker13.addEventListener("click", function(){ 
	$("#shuyuan23").show();
    map.openInfoWindow(infoWindow13, point13); 
});
var libpoint = new BMap.Point(120.022205,30.29872);
var libmarker = new BMap.Marker(libpoint);   
map.addOverlay(libmarker);
var libopts=document.getElementById('shuyuan');
var libinfoWindow = new BMap.InfoWindow(libopts);    
libmarker.addEventListener("click", function(){ 
	$("#shuyuan").show();
    map.openInfoWindow(libinfoWindow, libpoint); 
});
var dpoint = new BMap.Point(120.016222,30.294776);
var dmarker = new BMap.Marker(dpoint);   
map.addOverlay(dmarker);
var dopts=document.getElementById('bowenyuan3');
var dinfoWindow = new BMap.InfoWindow(dopts);    
dmarker.addEventListener("click", function(){ 
	$("#bowenyuan3").show();
    map.openInfoWindow(dinfoWindow, dpoint); 
});
var dpoint1 = new BMap.Point(120.015757,30.295138);
var dmarker1 = new BMap.Marker(dpoint1);   
map.addOverlay(dmarker1);
var dopts1=document.getElementById('bowenyuan4');
var dinfoWindow1 = new BMap.InfoWindow(dopts1);    
dmarker1.addEventListener("click", function(){ 
	$("#bowenyuan4").show();
    map.openInfoWindow(dinfoWindow1, dpoint1); 
});
var dpoint2 = new BMap.Point(120.016995,30.29536);
var dmarker2 = new BMap.Marker(dpoint2);   
map.addOverlay(dmarker2);
var dopts2=document.getElementById('bowenyuan2');
var dinfoWindow2 = new BMap.InfoWindow(dopts2);    
dmarker2.addEventListener("click", function(){ 
	$("#bowenyuan2").show();
    map.openInfoWindow(dinfoWindow2, dpoint2); 
});
var dpoint3 = new BMap.Point(120.016465,30.295711);
var dmarker3 = new BMap.Marker(dpoint3);   
map.addOverlay(dmarker3);
var dopts3=document.getElementById('bowenyuan5');
var dinfoWindow3 = new BMap.InfoWindow(dopts3);    
dmarker3.addEventListener("click", function(){ 
	$("#bowenyuan5").show();
    map.openInfoWindow(dinfoWindow3, dpoint3); 
});
var dpoint4 = new BMap.Point(120.016788,30.296249);
var dmarker4 = new BMap.Marker(dpoint4);   
map.addOverlay(dmarker4);
var dopts4=document.getElementById('bowenyuan6');
var dinfoWindow4 = new BMap.InfoWindow(dopts4);    
dmarker4.addEventListener("click", function(){ 
	$("#bowenyuan6").show();
    map.openInfoWindow(dinfoWindow4, dpoint4); 
});
var dpoint5 = new BMap.Point(120.015027,30.296077);
var dmarker5 = new BMap.Marker(dpoint5);   
map.addOverlay(dmarker5);
var dopts5=document.getElementById('bowenyuan7');
var dinfoWindow5 = new BMap.InfoWindow(dopts5);    
dmarker5.addEventListener("click", function(){ 
	$("#bowenyuan7").show();
    map.openInfoWindow(dinfoWindow5, dpoint5); 
});
var dpoint6 = new BMap.Point(120.015773,30.29653);
var dmarker6 = new BMap.Marker(dpoint6);   
map.addOverlay(dmarker6);
var dopts6=document.getElementById('bowenyuan9');
var dinfoWindow6 = new BMap.InfoWindow(dopts6);    
dmarker6.addEventListener("click", function(){ 
	$("#bowenyuan9").show();
    map.openInfoWindow(dinfoWindow6, dpoint6); 
});
var spoint = new BMap.Point(120.01545,30.295711);
var smarker = new BMap.Marker(spoint);   
map.addOverlay(smarker);
var sopts=document.getElementById('soccercort');
var sinfoWindow = new BMap.InfoWindow(sopts);    
smarker.addEventListener("click", function(){ 
	$("#soccercort").show();
    map.openInfoWindow(sinfoWindow, spoint); 
});
var ppoint = new BMap.Point(120.0143,30.29513);
var pmarker = new BMap.Marker(ppoint);   
map.addOverlay(pmarker);
var popts=document.getElementById('playground');
var pinfoWindow = new BMap.InfoWindow(popts);    
pmarker.addEventListener("click", function(){ 
	$("#playground").show();
    map.openInfoWindow(pinfoWindow, ppoint); 
});
var bpoint = new BMap.Point(120.012306,30.296276);
var bmarker = new BMap.Marker(bpoint);   
map.addOverlay(bmarker);
var bopts=document.getElementById('basketball');
var binfoWindow = new BMap.InfoWindow(bopts);    
bmarker.addEventListener("click", function(){ 
	$("#basketball").show();
    map.openInfoWindow(binfoWindow, bpoint); 
});
var doorpoint = new BMap.Point(120.019977,30.294164);
var doormarker = new BMap.Marker(doorpoint);   
map.addOverlay(doormarker);
var dooropts=document.getElementById('door');
var doorinfoWindow = new BMap.InfoWindow(dooropts);    
doormarker.addEventListener("click", function(){ 
	$("#door").show();
    map.openInfoWindow(doorinfoWindow, doorpoint); 
});
var doorpoint1 = new BMap.Point(120.011803,30.29584);
var doormarker1 = new BMap.Marker(doorpoint1);   
map.addOverlay(doormarker1);
var dooropts1=document.getElementById('door1');
var doorinfoWindow1 = new BMap.InfoWindow(dooropts1);    
doormarker1.addEventListener("click", function(){ 
	$("#door1").show();
    map.openInfoWindow(doorinfoWindow1, doorpoint1); 
});
var bwpoint1 = new BMap.Point(120.016761,30.293563);
var bwmarker1 = new BMap.Marker(bwpoint1);   
map.addOverlay(bwmarker1);
var bwopts1=document.getElementById('bowen');
var bwinfoWindow1 = new BMap.InfoWindow(bwopts1);    
bwmarker1.addEventListener("click", function(){ 
	$("#bowen").show();
    map.openInfoWindow(bwinfoWindow1, bwpoint1); 
});
}