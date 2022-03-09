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

![ERD Image](./erd.png)

## Dependencies 

Express - RESTful API

Morgan  - Request details

Knex    - 

Docker  - Server

Dotenv - Security (need this info:
what ENV variables do they need to have set so that your DB connection in the knexfile.js works as it is written?
)

## Installation

1- Clone the repo to your local server
2- Navigate to the root directory for the project 
3- Install the required dependencies
4- Start the server


## EndPoints

### CREATE

`POST /characters` with raw JSON object in request body to create new character row
Must contain: name *type string*
Optional: race_id *type int*, weapon_id *type int*
Example: `POST http://localhost:8080/characters` Response Body: {name: "Rhadaghast", race_id: 4, weapon_id: null}

`POST /races` with raw JSON object (such as {race: "Ent"}) to create new race row
Must contain: name *type string*
Optional: N/A
Example: `POST http://localhost:8080/races` Response Body: {name: "Ents"}

`POST /weapons` with raw JSON object to create new weapon row
Must contain: name *type string*
Optional: weapon_type *type string*, character_id *type int*, created_by *type string*
Example: `POST http://localhost:8080/weapons` Response Body: {weapon: "Grond", weapon_type: "Mace", character_id: null, created_by: "Morgoth"}


### READ

`GET /characters/{id}` to show a specific character at a desired ID
Example: `GET http://localhost:8080/characters/1`

`GET /races/id` to show a specific race at a desired ID
Example: `GET http://localhost:8080/races/2`

`GET /weapons/id` to show a specific weapon at a desired ID
Example: `GET http://localhost:8080/weapons/6`


### UPDATE

`PATCH /characters/id` with query parameters to update a specific character
Possible Parameters: name *type string*, race_id *type int*, weapon_id *type int*
Example: `PATCH http://localhost:8080/characters/1?name=Aragorn`

`PATCH /races/id` with query parameters to update a specific race
Possible Parameters: name *type string*
Example: `PATCH http://localhost:8080/races/6?race=Ent`

`PATCH /weapons/id` with query parameters to update a specific weapon
Possible Parameters: name *type string*, weapon_type *type string*, character_id *type int*
Example: `PATCH http://localhost:8080/weapons/11?weapon=Grond`


### DELETE

`DELETE /characters/{id}` to remove a specific character row at a desired ID
Example: `DELETE http://localhost:8080/characters/3`

`DELETE /races/{id}` to remove a specific race row at a desired ID
Example: `DELETE http://localhost:8080/races/2`

`DELETE /weapons/{id}` to remove a specific weapon row at a desired ID
Example: `DELETE http://localhost:8080/weapons/8`


### LIST

`GET /characters` to show all characters
Example: `GET http://localhost:8080/characters`

`GET /races` to show all races
Example: `GET http://localhost:8080/races`

`GET /weapons` to show all weapons
Example: `GET http://localhost:8080/weapons`




