// GOOGLE MAPS AND HIGHCHART STARTS HERE
/* global google, navigator, $ */
(function(window) {
    var my_zoom;
    
    var deviceIsMobile = function () {
        var usrAgent    = navigator.userAgent || navigator.vendor || window.opera,
            regex1      = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            regex2      = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
        
        if (regex1.test(usrAgent) || regex2.test(usrAgent.substr(0, 4))) {
            return true; //smartphones
        } else {
            return false; //desktops & tablets
        }
    };
        
    
    if (!deviceIsMobile()) {
        my_zoom=6;
    }else{
        my_zoom=5;
    }
    
    
    
    var map;
        
  	map = new google.maps.Map(
  	    document.getElementById('canvas'), 
  	    {
            zoom: my_zoom,
            center: new google.maps.LatLng( -0.4949117,115.4565353),
            mapTypeId: google.maps.MapTypeId.roadmap,
            scrollwheel: false,
            draggable: true,
            mapTypeControl: false,
            styles: [
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#a7a7a7"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#737373"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#efefef"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#696969"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#b3b3b3"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#d6d6d6"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "weight": 1.8
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#d7d7d7"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#808080"
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#c5d8e7"
                                }
                            ]
                        }
                    ]
        }
    );

    var open_window, selectOption, z;
    
    
    var infoWindow = new google.maps.InfoWindow();
    var locations, locations_cadangan;
    locations_cadangan = [
        ['Amurang', 1.1395738, 124.5895659, 1512, 'Portugis'],
    	['Kastela', 0.7718885, 127.3348404, 1522, 'Portugis'],
    	['Oranje', 0.8388549, 122.8442545, 1526, 'Portugis'],
        ['Santa Lucia', 0.7932296, 127.385287, 1540, 'Portugis'],
        ['Hollandia', 0.8215575, 127.3530879, 1540, 'Portugis'],
    	['Barneveld', -0.6328569, 127.4777708, 1558, 'Portugis'],
    	['Torre', 0.6375133, 127.4055851, 1578, 'Portugis'],
    	['Nieuw Victoria', -3.69402, 128.1976109, 1580, 'Portugis'],
    	['Nassau', -4.5123294, 129.9051507, 1607, 'Belanda'],
    	['Malayo/Oranje', 0.7719314, 127.3348403, 1607, 'Portugis'],
    	['Kota Moti/Nassau', 0.4568159, 127.3932344, 1609, 'Belanda'],
    	['Mareku', 0.7093997, 127.3589731, 1610, 'Spanyol'],
    	['Tahula', 0.660006, 127.4198663, 1610, 'Spanyol'],
    	['Belgica', -4.52616, 129.897004, 1611, 'Belanda'],
    	['Henricus', -8.4574211, 123.0615935, 1618, 'Belanda'],
    	['Saint Lucas de el Rume', 0.7093997, 127.3589731, 1618, 'Spanyol'],
    	['Citywall of Batavia', -6.1145129, 106.7796359, 1619, 'Belanda'],
    	['Nieuw Zelandia', -3.5728837, 128.452674, 1626, 'Belanda'],
    	['Amsterdam', -3.6422857, 128.0672567, 1637, 'Belanda'],
    	['Wantrouw', -3.3152481, 127.8511526, 1644, 'Belanda'],
    	['Concordia', -10.1749491, 123.5796989, 1653, 'Belanda'],
    	['Baverwijk', -3.6671308, 128.7674419, 1654, 'Belanda'],
    	['Van Der Capelen', -3.5824788, 128.006393, 1655, 'Belanda'],
    	['Onrust', -5.9776195, 106.7046437, 1656, 'Belanda'],
    	['Rotterdam', -5.1326838, 119.3641514, 1673, 'Belanda'],
    	['Speelwijk', -6.0424738, 106.1458149, 1682, 'Belanda'],
    	['De Verwatching', -2.0980896, 125.917518, 1689, 'Belanda'],
    	['Duurstede', -3.5755948, 128.5478174, 1691, 'Belanda'],
    	['Benteng Portugis', -6.4498698, 110.8712821, 1706, 'Belanda'],
    	['Tegal', -6.8618096, 109.0946074, 1708, 'Belanda'],
    	['Marlborough', -3.7906595, 102.2517691, 1714, 'Belanda'],
    	['Willem II', -7.1262544, 110.4007487, 1746, 'Belanda'],
    	['Bangkalan', -7.0233882, 112.7069995, 1747, 'Belanda'],
    	['De Beschermer', -6.8719837, 109.6672799, 1753, 'Belanda'],
    	['Vastenburg', -7.5799494, 110.8234737, 1756, 'Belanda'],
    	['Vredeburg', -7.8020895, 110.3630395, 1760, 'Belanda'],
    	['Kayeli', -3.3810484, 126.7743245, 1778, 'Belanda'],
    	['Kalimook', -7.0499822, 113.8843514, 1785, 'Belanda'],
    	['Utrecht', -8.2256755, 114.3280841, 1790, 'Belanda'],
    	['Panarukan', -7.6930675, 113.932822, 1805, 'Belanda'],
    	['Lodewijk', -7.0220322, 112.5396554, 1808, 'Belanda'],
    	['Van Der Wijk', -7.6082297, 109.5013499, 1818, 'Belanda'],
    	['Toboali', -3.0069644, 106.4599604, 1820, 'Belanda'],
    	['Prins Hendrik', 0.917062, 104.4670878, 1820, 'Belanda'],
    	['Van Der Capellen', -0.4568515, 100.5503698, 1821, 'Belanda'],
    	['Kota Batu', 0.3461084, 108.969671, 1822, 'Belanda'],
    	['Fort De Kock', -0.3047255, 100.3581467, 1825, 'Belanda'],
    	['Van Den Bosch', -7.4191036, 111.4084305, 1825, 'Belanda'],
    	['Fort Du Bus', -1.0522559, 131.1126062, 1828, 'Belanda'],
    	['Willem I', -7.2578752, 110.3765529, 1833, 'Belanda'],
    	['Martello di Pulau Bidadari', -5.9973719, 106.7348669, 1850, 'Belanda'],
    	['Martello di Pulau Kelor', -5.9973719, 106.7348669, 1850, 'Belanda'],
    	['Barus', 2.0293085, 98.3946179, 1857, 'Belanda'],
    	['Pendem', -7.7302468, 108.8534355, 1861, 'Belanda'],
    	['Balangnipa', -5.1146518, 120.2269299, 1864, 'Belanda'],
    	['Kuta Raja', 5.571409, 95.3032797, 1874, 'Belanda'],
    	['Gunung Gadung', -6.8984078, 107.8811605, 1882, 'Belanda'],
    	['Gunung Palasari', -6.9646669, 108.3122074, 1882, 'Belanda'],
    	['Dutch Defence System', -6.1291941, 106.8228805, 1914, 'Belanda'],
    	['Gunung Putri', -6.8092392, 107.6230604, 1914, 'Belanda'],
    	['Pasir Lipis', -6.8092392, 107.6230604, 1914, 'Belanda'],
    	['Gunung Kunci', -6.8092392, 107.6230604, 1914, 'Belanda'],
        
    ]; 
    
    var years = [1512, 1522, 1526, 1540, 1558, 1578, 1580, 1607, 1609, 1610, 1611, 1618, 1619, 1626, 1637, 1644, 1653, 1654, 1655,  1656, 1673, 1682, 1689, 1692, 1706, 1708, 1714, 1746, 1747, 1753, 1756, 1760, 1778, 1785, 1790, 1805, 1808, 1818, 1820, 1821, 1822, 1825, 1828, 1833, 1850, 1857, 1861, 1864, 1882, 1914]
    
    $('#google-map-timeline').on('change input', function() {
    
    
        var year = $('#google-map-timeline').val();
        $('.tahun .data_tahun').text(year);
        
        locations = [
    	    locations_cadangan[0]
        ];
        
        
        function checking(){
            if(year>=1512){
                locations = [
            	    locations_cadangan[0]
                ];
            }
            if(year>=1522){
            	locations = [
            	    locations_cadangan[1]
            	];
            }if(year>=1526){
            	locations = [
            	    locations_cadangan[2]
            	];
            }if(year>=1540){
            	locations = [
            	    locations_cadangan[3],
            	    locations_cadangan[4]
            	];
            }if(year>=1558){
            	locations = [
            	    locations_cadangan[5]
            	];
            }if(year>=1578){
            	locations = [
            	    locations_cadangan[6]
            	];
            }if(year>=1580){
            	locations = [
            	    locations_cadangan[7]
            	];
            }if(year>=1607){
            	locations = [
            	    locations_cadangan[8],
            	    locations_cadangan[9]
            	];
            }if(year>=1609){
            	locations = [
            	    locations_cadangan[10]
            	];
            }if(year>=1610){
            	locations = [
            	    locations_cadangan[11],
            	    locations_cadangan[12]
            	];
            }if(year>=1611){
            	locations = [
            	    locations_cadangan[13]
            	];
            }if(year>=1618){
            	locations = [
            	    locations_cadangan[14],
            	    locations_cadangan[15]
            	];
            }if(year>=1619){
            	locations = [
            	    locations_cadangan[16]
            	];
            }if(year>=1626){
            	locations = [
            	    locations_cadangan[17]
            	];
            }if(year>=1637){
            	locations = [
            	    locations_cadangan[18]
            	];
            }if(year>=1644){
            	locations = [
            	    locations_cadangan[19]
            	];
            }if(year>=1653){
            	locations = [
            	    locations_cadangan[20]
            	];
            }if(year>=1654){
            	locations = [
            	    locations_cadangan[21]
            	];
            }if(year>=1655){
            	locations = [
            	    locations_cadangan[22]
            	];
            }if(year>=1656){
            	locations = [
            	    locations_cadangan[23]
            	];
            }if(year>=1673){
            	locations = [
            	    locations_cadangan[24]
            	];
            }if(year>=1682){
            	locations = [
            	    locations_cadangan[25]
            	];
            }if(year>=1689){
            	locations = [
            	    locations_cadangan[26]
            	];
            }if(year>=1691){
            	locations = [
            	    locations_cadangan[27]
            	];
            }if(year>=1706){
            	locations = [
            	    locations_cadangan[28]
            	];
            }if(year>=1708){
            	locations = [
            	    locations_cadangan[29]
            	];
            }if(year>=1714){
            	locations = [
            	    locations_cadangan[30]
            	];
            }if(year>=1746){
            	locations = [
            	    locations_cadangan[31]
            	];
            }if(year>=1747){
            	locations = [
            	    locations_cadangan[32]
            	];
            }if(year>=1753){
            	locations = [
            	    locations_cadangan[33]
            	];
            }if(year>=1756){
            	locations = [
            	    locations_cadangan[34]
            	];
            }if(year>=1760){
            	locations = [
            	    locations_cadangan[35]
            	];
            }if(year>=1778){
            	locations = [
            	    locations_cadangan[36]
            	];
            }if(year>=1785){
            	locations = [
            	    locations_cadangan[37]
            	];
            }if(year>=1790){
            	locations = [
            	    locations_cadangan[38]
            	];
            }if(year>=1805){
            	locations = [
            	    locations_cadangan[39]
            	];
            }if(year>=1808){
            	locations = [
            	    locations_cadangan[40]
            	];
            }if(year>=1818){
            	locations = [
            	    locations_cadangan[41]
            	];
            }if(year>=1820){
            	locations = [
            	    locations_cadangan[42],
            	    locations_cadangan[43]
            	];
            }if(year>=1821){
            	locations = [
            	    locations_cadangan[44]
            	];
            }if(year>=1822){
            	locations = [
            	    locations_cadangan[45]
            	];
            }if(year>=1825){
            	locations = [
            	    locations_cadangan[46],
            	    locations_cadangan[47]
            	];
            }if(year>=1828){
            	locations = [
            	    locations_cadangan[48]
            	];
            }if(year>=1833){
            	locations = [
            	    locations_cadangan[49]
            	];
            }if(year>=1850){
            	locations = [
            	    locations_cadangan[50],
            	    locations_cadangan[51]
            	];
            }if(year>=1857){
            	locations = [
            	    locations_cadangan[52]
            	];
            }if(year>=1861){
            	locations = [
            	    locations_cadangan[53]
            	];
            }if(year>=1864){
            	locations = [
            	    locations_cadangan[54]
            	];
            }if(year>=1874){
            	locations = [
            	    locations_cadangan[55]
            	];
            }if(year>=1882){
            	locations = [
            	    locations_cadangan[56],
            	    locations_cadangan[57]
            	];
            }if(year>=1914){
            	locations = [
            	    locations_cadangan[58],
            	    locations_cadangan[59],
            	    locations_cadangan[60],
            	    locations_cadangan[61]
            	];
            }
        }
        
        checking();
        
        
        locations.forEach(function ( element, index ) {
            
            var marker = new google.maps.Marker({
                position : {
                  lat: element[1], 
                  lng: element[2]
                },
                map: map,
                icon: 'tower.png'
            });
            
            
            google.maps.event.addListener(marker, 'click', function( ) {
                infoWindow.setContent('<b style="margin-bottom: 5px; display: block;">'+element[0]+'</b> tahun: '+element[3]+'<br> oleh: '+element[4]);
                infoWindow.open(map, marker);     
            });
        });
    
    });
    
        
    
}(window));

// GOOGLE MAPS AND HIGHCHART END HERE