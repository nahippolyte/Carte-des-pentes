ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32735").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Pente1_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pente1<br />\
    <img src="styles/legend/Pente1_1_0.png" /> <= 2-Faible<br />\
    <img src="styles/legend/Pente1_1_1.png" /> 2 - 5-Moyenne<br />\
    <img src="styles/legend/Pente1_1_2.png" /> > 5-Forte<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pente1_1.png",
            attributions: ' ',
            projection: 'EPSG:32735',
            alwaysInRange: true,
            imageExtent: [745740.000000, 9614470.000000, 771830.000000, 9640060.000000]
        })
    });

lyr_OSMStandard_0.setVisible(true);lyr_Pente1_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Pente1_1];
