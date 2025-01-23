var wms_layers = [];

var format_Frekuensi_dan_Jumlah_Penumpang_0 = new ol.format.GeoJSON();
var features_Frekuensi_dan_Jumlah_Penumpang_0 = format_Frekuensi_dan_Jumlah_Penumpang_0.readFeatures(json_Frekuensi_dan_Jumlah_Penumpang_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frekuensi_dan_Jumlah_Penumpang_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frekuensi_dan_Jumlah_Penumpang_0.addFeatures(features_Frekuensi_dan_Jumlah_Penumpang_0);
var lyr_Frekuensi_dan_Jumlah_Penumpang_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frekuensi_dan_Jumlah_Penumpang_0, 
                style: style_Frekuensi_dan_Jumlah_Penumpang_0,
                popuplayertitle: "Frekuensi_dan_Jumlah_Penumpang",
                interactive: true,
    title: 'Frekuensi_dan_Jumlah_Penumpang<br />\
    <img src="styles/legend/Frekuensi_dan_Jumlah_Penumpang_0_0.png" /> 0 - 1<br />\
    <img src="styles/legend/Frekuensi_dan_Jumlah_Penumpang_0_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Frekuensi_dan_Jumlah_Penumpang_0_2.png" /> 2 - 3<br />\
    <img src="styles/legend/Frekuensi_dan_Jumlah_Penumpang_0_3.png" /> 3 - 19,6<br />\
    <img src="styles/legend/Frekuensi_dan_Jumlah_Penumpang_0_4.png" /> 19,6 - 7325<br />'
        });

lyr_Frekuensi_dan_Jumlah_Penumpang_0.setVisible(true);
var layersList = [lyr_Frekuensi_dan_Jumlah_Penumpang_0];
lyr_Frekuensi_dan_Jumlah_Penumpang_0.set('fieldAliases', {'borough': 'borough', 'location_i': 'location_i', 'objectid': 'objectid', 'shape_area': 'shape_area', 'shape_leng': 'shape_leng', 'zone': 'zone', 'PULocationID': 'PULocationID', 'DOLocationID': 'DOLocationID', 'Frekuensi_Perjalanan': 'Frekuensi_Perjalanan', 'Jumlah_Penumpang': 'Jumlah_Penumpang', });
lyr_Frekuensi_dan_Jumlah_Penumpang_0.set('fieldImages', {'borough': 'TextEdit', 'location_i': 'TextEdit', 'objectid': 'TextEdit', 'shape_area': 'TextEdit', 'shape_leng': 'TextEdit', 'zone': 'TextEdit', 'PULocationID': 'Range', 'DOLocationID': 'Range', 'Frekuensi_Perjalanan': 'Range', 'Jumlah_Penumpang': 'TextEdit', });
lyr_Frekuensi_dan_Jumlah_Penumpang_0.set('fieldLabels', {'borough': 'no label', 'location_i': 'no label', 'objectid': 'no label', 'shape_area': 'no label', 'shape_leng': 'no label', 'zone': 'inline label - always visible', 'PULocationID': 'no label', 'DOLocationID': 'no label', 'Frekuensi_Perjalanan': 'no label', 'Jumlah_Penumpang': 'inline label - always visible', });
lyr_Frekuensi_dan_Jumlah_Penumpang_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});