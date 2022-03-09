# Lord of The Rings RESTful API

A good README.md that explains
what ENV variables a developer would need to create (i.e. via dotenv, etc.) for your app to work on their local machine.
In other words, what ENV variables do they need to have set so that your DB connection in the knexfile.js works as it is written?
what endpoints are available on your API
an image of ERD for your DB Schema

## Table of Contents

[1. Overview](#overview)

[2. Dependencies](#dependencies)

[3. Installation](#installation)

[4. Endpoints](#endpoints)


## Overview

The Lord of the Rings RESTful API consists of three tables, which include character names, their weapons, and their respective races. These tables share information with one another, such as which character wields what weapon. We have built our functionality with a CRUDL mindset, so that our client could effectivly create, read, update, delete, and list our tables with ease.   

![ERD Image](./erd_image.png)

## Dependencies 

Express - RESTful API

Morgan  - Request details

Knex    - SQL query builder for PostgreSQL

Docker  - PostgreSQL Server

Dotenv - Handles .ENV variables for security 
* CONNECTION_STRING - server address for knexfile.js to connect to PostgreSQL Docker server
* CONNECTION_STRING format: "postgres://USER_NAME:PASSWORD@localhost/DB_NAME" 

## Installation

1. Clone the repo to your local server 
2. Navigate to the root directory for the project
3. Install the required dependencies 
`npm i express morgan knex dotenv`
4. Configure .ENV and knexfile.js
5. Run latest migration 
`npx knex migrate:latest`
6. Seed the database with initial data
`npx knex seed:run`
7. Start the server 
`node index.js`


## EndPoints

### CREATE

`POST /characters` with raw JSON object in request body to create new character row <br>
Must contain: name *type string* <br>
Optional: race_id *type int*, weapon_id *type int* <br>
Example: `POST http://localhost:8080/characters` Response Body: {name: "Rhadaghast", race_id: 4, weapon_id: null} <br>

`POST /races` with raw JSON object (such as {race: "Ent"}) to create new race row <br>
Must contain: name *type string* <br>
Optional: N/A <br>
Example: `POST http://localhost:8080/races` Response Body: {name: "Ents"} <br>

`POST /weapons` with raw JSON object to create new weapon row <br>
Must contain: name *type string* <br>
Optional: weapon_type *type string*, character_id *type int*, created_by *type string* <br>
Example: `POST http://localhost:8080/weapons` Response Body: {weapon: "Grond", weapon_type: "Mace", character_id: null, created_by: "Morgoth"} <br>


### READ

`GET /characters/{id}` to show a specific character at a desired ID <br>
Example: `GET http://localhost:8080/characters/1` <br>

`GET /races/id` to show a specific race at a desired ID <br>
Example: `GET http://localhost:8080/races/2` <br>

`GET /weapons/id` to show a specific weapon at a desired ID <br>
Example: `GET http://localhost:8080/weapons/6` <br>


### UPDATE

`PATCH /characters/id` with query parameters to update a specific  <br>
Possible Parameters: name *type string*, race_id *type int*, weapon_id *type int* <br>
Example: `PATCH http://localhost:8080/characters/1?name=Aragorn` <br>

`PATCH /races/id` with query parameters to update a specific race <br>
Possible Parameters: name *type string* <br>
Example: `PATCH http://localhost:8080/races/6?race=Ent` <br>

`PATCH /weapons/id` with query parameters to update a specific weapon <br>
Possible Parameters: name *type string*, weapon_type *type string*, character_id *type int* <br>
Example: `PATCH http://localhost:8080/weapons/11?weapon=Grond` <br>


### DELETE

`DELETE /characters/{id}` to remove a specific character row at a desired ID <br>
Example: `DELETE http://localhost:8080/characters/3` <br>

`DELETE /races/{id}` to remove a specific race row at a desired ID <br>
Example: `DELETE http://localhost:8080/races/2` <br>

`DELETE /weapons/{id}` to remove a specific weapon row at a desired ID <br>
Example: `DELETE http://localhost:8080/weapons/8` <br>


### LIST

`GET /characters` to show all characters <br>
Example: `GET http://localhost:8080/characters` <br>

`GET /races` to show all races <br>
Example: `GET http://localhost:8080/races` <br>

`GET /weapons` to show all weapons <br>
Example: `GET http://localhost:8080/weapons` <br>




