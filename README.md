# Paris-Airbnb-minimal-API
A minimal API that returns a selection of the best betting accommodations offered by Airbnb.

### Built With

* [Node.js](https://nodejs.org/en/)/[express](https://expressjs.com/fr/)/[cheerio.js](https://cheerio.js.org/)/[puppeteer](https://pptr.dev/)

<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jimblu/Paris-Airbnb-minimal-API.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

## Try it
----
  
  Use it
   ```sh
   npm run start
   ```

* **URL**

  http://localhost:5000/paris

* **Method:**

  `GET`
  
* **Success Response:**

  * **Code:** 200 <br />
    **sample content e:** 
    
                             
                      [
                            {
                                "title": "Chambre privée à Montmartre",
                              "subtitle": "Grande chambre à deux pas du Sacré-Coeur",
                              "info": "1 voyageur · 1 chambre · 1 lit · 1 salle de bain privée",
                              "addInfo": "Cuisine · Chauffage",
                              "stars": 4,
                              "comments": 46,
                              "image": "https://a0.muscache.com/im/pictures/7610861c-a70d-4589-b8cb-3839c16681ba.jpg?im_w=720"
                            },
                      
                            {
                                "title": "Chambre privée à Montmartre",
                              "subtitle": "Grande chambre à deux pas du Sacré-Coeur",
                              "info": "1 voyageur · 1 chambre · 1 lit · 1 salle de bain privée",
                              "addInfo": "Cuisine · Chauffage",
                              "stars": 4,
                              "comments": 46,
                              "image": "https://a0.muscache.com/im/pictures/7610861c-a70d-4589-b8cb-3839c16681ba.jpg?im_w=720"
                            },
    
                               ... (20 objects)
                      ] 
                   
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : `🔍 - Not Found - your request` }`
