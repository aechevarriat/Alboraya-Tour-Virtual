var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrada",
      "name": "ENTRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.2725885431351962,
        "pitch": 0.10738017226985441,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -0.09811456592615464,
          "pitch": 0.2721285049476254,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-salon",
      "name": "SALON",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.0103156337083687,
          "pitch": 0.16873644268876475,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -2.7002492735810577,
          "pitch": 0.14633853923125528,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 2.014845367816873,
          "pitch": 0.18914856988285678,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
      "name": "COCINA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.4150733372567572,
        "pitch": 0.14972834246167643,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.3886017153896262,
          "pitch": 0.1365097219326934,
          "rotation": 0,
          "target": "3-galeria"
        },
        {
          "yaw": -1.2587129273016764,
          "pitch": 0.18757849853417774,
          "rotation": 0,
          "target": "4-cocina"
        },
        {
          "yaw": -2.2409191369393664,
          "pitch": 0.2261254991984245,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-galeria",
      "name": "GALERIA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.03617595691951081,
        "pitch": 0.050777437878313236,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -1.7138985028815625,
          "pitch": 0.43443662444263076,
          "rotation": 5.497787143782138,
          "target": "2-cocina"
        },
        {
          "yaw": -1.428826506410811,
          "pitch": 0.3008816990015344,
          "rotation": 0,
          "target": "4-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cocina",
      "name": "COCINA.",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.17135959928671696,
        "pitch": 0.02602331063132368,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": 0.0752732187209979,
          "pitch": 0.14446564712071108,
          "rotation": 0,
          "target": "3-galeria"
        },
        {
          "yaw": 1.9254906078540852,
          "pitch": 0.2533629268966262,
          "rotation": 0,
          "target": "1-salon"
        },
        {
          "yaw": 0.8448372367940937,
          "pitch": 0.1988004342726697,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Tour Alboraya  360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
