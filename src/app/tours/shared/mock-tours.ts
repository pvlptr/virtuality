import {Tour} from "./tour.model";
export const TOURS: Tour[] = [
  {
    id: 1,
    name: 'Lietuvos dailės muziejaus virtualus turas',
    description: `Pasivaikčiokite po Lietuvos Dailės Muziejaus naujausias ekspozicijas ir pamatykite muziejaus eksponatus iš arčiau.
Šiame ture galite surasti ir ypač aukštos rezoliucijos ekspozicijas.
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`,
    thumbnailUrl: 'thumbnails/Kasiulis.jpg',
    panoramaUrl: null,
    panoramaConfig: {
      "default": {
        "firstScene": "circle",
        "author": "Pavel",
        "sceneFadeDuration": 1000,
      },

      "scenes": {
        "circle": {
          "autoLoad": true,
          "compass": true,
          "title": "Pasivaikšiojimas mieste",
          "hfov": 110,
          "pitch": -3,
          "yaw": 117,
          "type": "equirectangular",
          "panorama": "panoramas/town.png",
          "hotSpots": [
            {
              "pitch": -2.1,
              "yaw": 132.9,
              "type": "scene",
              "text": "Užmiestyje",
              "sceneId": "house"
            }
          ]
        },

        "house": {
          "autoLoad": true,
          "compass": true,
          "title": "Namukas už miesto",
          "hfov": 110,
          "yaw": 5,
          "type": "equirectangular",
          "panorama": "panoramas/bma-0.jpg",
          "hotSpots": [
            {
              "pitch": -0.6,
              "yaw": 37.1,
              "type": "scene",
              "text": "Miestas",
              "sceneId": "circle",
              "targetYaw": -23,
              "targetPitch": 2
            }
          ]
        }
      }
    }

  },
  {
    id: 2,
    name: 'Lorem ipsum dolor sit amet',
    description: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`,
    thumbnailUrl: 'thumbnails/Mal.png',
    panoramaUrl: 'panoramas/Rheingauer.jpg',
    panoramaConfig:null
  },
  {
    id: 3,
    name: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`,
    thumbnailUrl: 'thumbnails/Mal.png',
    panoramaUrl: 'panoramas/building.jpg',
    panoramaConfig:null
  },
  {
    id: 4,
    name: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`,
    thumbnailUrl: 'thumbnails/Mal.png',
    panoramaUrl: 'panoramas/greece.png',
    panoramaConfig:null
  },
  {
    id: 5,
    name: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`,
    thumbnailUrl: 'thumbnails/Mal.png',
    panoramaUrl: 'panoramas/town.png',
    panoramaConfig:null
  },
  {
    id: 6,
    name: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.`,
    thumbnailUrl: 'thumbnails/Mal.png',
    panoramaUrl: 'panoramas/town.png',
    panoramaConfig:null
  }

];

