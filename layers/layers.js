var wms_layers = [];

var format_capaciteetquantitedinjectiondebiomethane_0 = new ol.format.GeoJSON();
var features_capaciteetquantitedinjectiondebiomethane_0 = format_capaciteetquantitedinjectiondebiomethane_0.readFeatures(json_capaciteetquantitedinjectiondebiomethane_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_capaciteetquantitedinjectiondebiomethane_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_capaciteetquantitedinjectiondebiomethane_0.addFeatures(features_capaciteetquantitedinjectiondebiomethane_0);
var lyr_capaciteetquantitedinjectiondebiomethane_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_capaciteetquantitedinjectiondebiomethane_0, 
                style: style_capaciteetquantitedinjectiondebiomethane_0,
                interactive: true,
                title: '<img src="styles/legend/capaciteetquantitedinjectiondebiomethane_0.png" /> capacite-et-quantite-dinjection-de-biomethane'
            });
var format_REGION_1 = new ol.format.GeoJSON();
var features_REGION_1 = format_REGION_1.readFeatures(json_REGION_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_REGION_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_REGION_1.addFeatures(features_REGION_1);
var lyr_REGION_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_REGION_1, 
                style: style_REGION_1,
                interactive: true,
                title: '<img src="styles/legend/REGION_1.png" /> REGION'
            });

lyr_capaciteetquantitedinjectiondebiomethane_0.setVisible(true);lyr_REGION_1.setVisible(true);
var layersList = [lyr_capaciteetquantitedinjectiondebiomethane_0,lyr_REGION_1];
lyr_capaciteetquantitedinjectiondebiomethane_0.set('fieldAliases', {'annee': 'annee', 'nom_region': 'nom_region', 'code_insee_': 'code_insee_', 'nom_departe': 'nom_departe', 'code_insee__1': 'code_insee__1', 'nom_epci': 'nom_epci', 'code_insee__2': 'code_insee__2', 'nom_commune': 'nom_commune', 'code_insee__3': 'code_insee__3', 'iris_de_rac': 'iris_de_rac', 'code_insee__4': 'code_insee__4', 'nom_de_l_in': 'nom_de_l_in', 'typologie': 'typologie', 'date_de_pre': 'date_de_pre', 'capacite_d_': 'capacite_d_', 'quantite_an': 'quantite_an', });
lyr_REGION_1.set('fieldAliases', {'ID': 'ID', 'NOM_REG': 'NOM_REG', 'INSEE_REG': 'INSEE_REG', });
lyr_capaciteetquantitedinjectiondebiomethane_0.set('fieldImages', {'annee': '', 'nom_region': '', 'code_insee_': '', 'nom_departe': '', 'code_insee__1': '', 'nom_epci': '', 'code_insee__2': '', 'nom_commune': '', 'code_insee__3': '', 'iris_de_rac': '', 'code_insee__4': '', 'nom_de_l_in': '', 'typologie': '', 'date_de_pre': '', 'capacite_d_': '', 'quantite_an': '', });
lyr_REGION_1.set('fieldImages', {'ID': '', 'NOM_REG': '', 'INSEE_REG': '', });
lyr_capaciteetquantitedinjectiondebiomethane_0.set('fieldLabels', {'annee': 'no label', 'nom_region': 'no label', 'code_insee_': 'no label', 'nom_departe': 'no label', 'code_insee__1': 'no label', 'nom_epci': 'no label', 'code_insee__2': 'no label', 'nom_commune': 'no label', 'code_insee__3': 'no label', 'iris_de_rac': 'no label', 'code_insee__4': 'no label', 'nom_de_l_in': 'no label', 'typologie': 'no label', 'date_de_pre': 'no label', 'capacite_d_': 'no label', 'quantite_an': 'no label', });
lyr_REGION_1.set('fieldLabels', {'ID': 'no label', 'NOM_REG': 'inline label', 'INSEE_REG': 'no label', });
lyr_REGION_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});