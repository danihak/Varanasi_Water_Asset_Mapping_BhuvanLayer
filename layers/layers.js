var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleEarth_1 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var lyr_UP_VA_agriculture_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/nuis/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "UP_VA_agriculture",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "UP_VA_agriculture",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UP_VA_agriculture_2, 0]);
var lyr_UP_VA_builtup_urban_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/nuis/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "UP_VA_builtup_urban",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "UP_VA_builtup_urban",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UP_VA_builtup_urban_3, 0]);
var lyr_UP_VA_city_town_boundary_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/nuis/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "UP_VA_city_town_boundary",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "UP_VA_city_town_boundary",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UP_VA_city_town_boundary_4, 0]);
var lyr_UP_VA_drainage_line_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/nuis/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "UP_VA_drainage_line",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "UP_VA_drainage_line",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UP_VA_drainage_line_5, 0]);
var lyr_UP_VA_surface_waterbodies_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://bhuvan-vec1.nrsc.gov.in/bhuvan/nuis/ows",
    attributions: ' ',
                              params: {
                                "LAYERS": "UP_VA_surface_waterbodies",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "UP_VA_surface_waterbodies",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UP_VA_surface_waterbodies_6, 0]);
var format_TubeWells1_7 = new ol.format.GeoJSON();
var features_TubeWells1_7 = format_TubeWells1_7.readFeatures(json_TubeWells1_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TubeWells1_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TubeWells1_7.addFeatures(features_TubeWells1_7);
var lyr_TubeWells1_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TubeWells1_7, 
                style: style_TubeWells1_7,
                interactive: true,
                title: '<img src="styles/legend/TubeWells1_7.png" /> Tube Wells(1)'
            });
var format_OverheadTank_8 = new ol.format.GeoJSON();
var features_OverheadTank_8 = format_OverheadTank_8.readFeatures(json_OverheadTank_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OverheadTank_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OverheadTank_8.addFeatures(features_OverheadTank_8);
var lyr_OverheadTank_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OverheadTank_8, 
                style: style_OverheadTank_8,
                interactive: true,
                title: '<img src="styles/legend/OverheadTank_8.png" /> Overhead Tank'
            });
var format_STP_9 = new ol.format.GeoJSON();
var features_STP_9 = format_STP_9.readFeatures(json_STP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STP_9.addFeatures(features_STP_9);
var lyr_STP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STP_9, 
                style: style_STP_9,
                interactive: true,
                title: '<img src="styles/legend/STP_9.png" /> STP'
            });
var format_WTP_10 = new ol.format.GeoJSON();
var features_WTP_10 = format_WTP_10.readFeatures(json_WTP_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WTP_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WTP_10.addFeatures(features_WTP_10);
var lyr_WTP_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WTP_10, 
                style: style_WTP_10,
                interactive: true,
                title: '<img src="styles/legend/WTP_10.png" /> WTP'
            });
var format_PumpingStation_11 = new ol.format.GeoJSON();
var features_PumpingStation_11 = format_PumpingStation_11.readFeatures(json_PumpingStation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PumpingStation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PumpingStation_11.addFeatures(features_PumpingStation_11);
var lyr_PumpingStation_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PumpingStation_11, 
                style: style_PumpingStation_11,
                interactive: true,
                title: '<img src="styles/legend/PumpingStation_11.png" /> Pumping Station'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleEarth_1.setVisible(true);lyr_UP_VA_agriculture_2.setVisible(true);lyr_UP_VA_builtup_urban_3.setVisible(true);lyr_UP_VA_city_town_boundary_4.setVisible(true);lyr_UP_VA_drainage_line_5.setVisible(true);lyr_UP_VA_surface_waterbodies_6.setVisible(true);lyr_TubeWells1_7.setVisible(true);lyr_OverheadTank_8.setVisible(true);lyr_STP_9.setVisible(true);lyr_WTP_10.setVisible(true);lyr_PumpingStation_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleEarth_1,lyr_UP_VA_agriculture_2,lyr_UP_VA_builtup_urban_3,lyr_UP_VA_city_town_boundary_4,lyr_UP_VA_drainage_line_5,lyr_UP_VA_surface_waterbodies_6,lyr_TubeWells1_7,lyr_OverheadTank_8,lyr_STP_9,lyr_WTP_10,lyr_PumpingStation_11];
lyr_TubeWells1_7.set('fieldAliases', {'Type': 'Type', 'Name / Location': 'Name / Location', 'No. of water tapping points': 'No. of water tapping points', 'Quantity of water tapped in MLD': 'Quantity of water tapped in MLD', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_OverheadTank_8.set('fieldAliases', {'Type': 'Type', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_STP_9.set('fieldAliases', {'Type': 'Type', 'Name': 'Name', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_WTP_10.set('fieldAliases', {'Location of WTP': 'Location of WTP', 'Designed capacity in MLD': 'Designed capacity in MLD', 'Operational capacity in MLD': 'Operational capacity in MLD', 'Water supply source': 'Water supply source', 'Technology used for automatic monitoring': 'Technology used for automatic monitoring', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_PumpingStation_11.set('fieldAliases', {'Type': 'Type', 'Name': 'Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_TubeWells1_7.set('fieldImages', {'Type': 'TextEdit', 'Name / Location': 'TextEdit', 'No. of water tapping points': 'CheckBox', 'Quantity of water tapped in MLD': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_OverheadTank_8.set('fieldImages', {'Type': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_STP_9.set('fieldImages', {'Type': 'TextEdit', 'Name': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_WTP_10.set('fieldImages', {'Location of WTP': 'TextEdit', 'Designed capacity in MLD': 'Range', 'Operational capacity in MLD': 'Range', 'Water supply source': 'TextEdit', 'Technology used for automatic monitoring': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_PumpingStation_11.set('fieldImages', {'Type': 'TextEdit', 'Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_TubeWells1_7.set('fieldLabels', {'Type': 'no label', 'Name / Location': 'no label', 'No. of water tapping points': 'no label', 'Quantity of water tapped in MLD': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_OverheadTank_8.set('fieldLabels', {'Type': 'no label', 'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_STP_9.set('fieldLabels', {'Type': 'no label', 'Name': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_WTP_10.set('fieldLabels', {'Location of WTP': 'no label', 'Designed capacity in MLD': 'no label', 'Operational capacity in MLD': 'no label', 'Water supply source': 'no label', 'Technology used for automatic monitoring': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PumpingStation_11.set('fieldLabels', {'Type': 'no label', 'Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_PumpingStation_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});