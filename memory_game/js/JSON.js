var grungeAlbums = {
    "albums":[
      {
          "name": "Bleach",
          "artist": "Nirvana",
          "unitsSold": 1700000
      },
      {
          "name": "Nevermind",
          "artist": "Nirvana",
          "unitsSold": 30000000
      },
      {
          "name": "In Utero",
          "artist": "Nirvana",
          "unitsSold": 15000000
      },
      {
          "name": "Ten",
          "artist": "Pearl Jam",
          "unitsSold": 10000000
      },
      {
          "name": "Vs",
          "artist": "Pearl Jam",
          "unitsSold": 6100000
      },
      {
          "name": "Vitalogy",
          "artist": "Pearl Jam",
          "unitsSold": 4770000
      }
    ]
  };
  
  grungeAlbumsJSON = JSON.stringify(grungeAlbums);
  console.log(grungeAlbumsJSON); 
  
  grungeAlbumsObject = JSON.parse(grungeAlbumsJSON);
  console.log(grungeAlbumsObject); 
  
  