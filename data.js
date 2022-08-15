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
        "yaw": -0.011423973285783262,
        "pitch": 0.007811913519740088,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -0.0973710975387796,
          "pitch": 0.3215044392791988,
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
          "yaw": -2.6923837723353543,
          "pitch": 0.16573758596591048,
          "rotation": 0,
          "target": "0-entrada"
        },
        {
          "yaw": 3.0109431278577734,
          "pitch": 0.19005022819079898,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 2.0316387865536285,
          "pitch": 0.16309108992310328,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-cocina",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06957394488416924,
          "pitch": 0.15756365881417445,
          "rotation": 0,
          "target": "4-galeria"
        },
        {
          "yaw": 0.9006881326720197,
          "pitch": 0.17366866514266555,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": 1.90015071883718,
          "pitch": 0.23644670793956024,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.3613127206750555,
          "pitch": 0.13324207085126005,
          "rotation": 0,
          "target": "4-galeria"
        },
        {
          "yaw": -1.2570171728547095,
          "pitch": 0.13521985893185473,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -2.2473628030445063,
          "pitch": 0.3278068048130134,
          "rotation": 0,
          "target": "1-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-galeria",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4131647887121854,
          "pitch": 0.22082141254834298,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": -1.7010811772700656,
          "pitch": 0.38734420676935954,
          "rotation": 5.497787143782138,
          "target": "3-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ALBORAYA TOUR VIRTUAL",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
