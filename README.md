# Lord of The Rings RESTful API

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
<br> Format: "postgres://USER_NAME:PASSWORD@localhost/DB_NAME" 

## Installation

1. Clone the repo to your local server 
2. Navigate to the root directory for the project
3. Install the required dependencies 
<br> `npm i express morgan knex dotenv`
4. Configure .ENV and knexfile.js
5. Run latest migration 
<br> `npx knex migrate:latest`
6. Seed the database with initial data
<br> `npx knex seed:run`
7. Start the server 
<br> `node index.js`


## EndPoints

### CREATE

`POST /characters` with raw JSON object in request body to create new character row <br>
**Must contain:** name *type string* <br>
**Optional:** race_id *type int*, weapon_id *type int* <br>
**Example:** `POST http://localhost:8080/characters` Response Body: {name: "Rhadaghast", race_id: 4, weapon_id: null} <br>

`POST /races` with raw JSON object (such as {race: "Ent"}) to create new race row <br>
**Must contain:** name *type string* <br>
**Optional:** N/A <br>
**Example:** `POST http://localhost:8080/races` Response Body: {name: "Ents"} <br>

`POST /weapons` with raw JSON object to create new weapon row <br>
**Must contain:** name *type string* <br>
**Optional:** weapon_type *type string*, character_id *type int*, created_by *type string* <br>
**Example:** `POST http://localhost:8080/weapons` Response Body: {weapon: "Grond", weapon_type: "Mace", character_id: null, created_by: "Morgoth"} <br>


### READ

`GET /{table}/{id}` to show a specific item from a desired table at a desired ID <br>
**Must contain in URL:** table (characters, races, or weapons), ID
**Example:** `GET http://localhost:8080/characters/1` <br>

### UPDATE

`PATCH /{table}/{id}` with query parameters to update a specific ID on a specific table  <br>
**Must contain in URL:** table (characters, races, or weapons), ID
**Possible Parameters:** name *type string*, race_id *type int*, weapon_id *type int* <br>
**Example:** `PATCH http://localhost:8080/characters/1?name=Aragorn` <br>

### DELETE

`DELETE /characters/{table}` to remove a specific item row at a desired ID <br>
**Must contain in URL:** table (characters, races, or weapons), ID
**Example:** `DELETE http://localhost:8080/characters/3` <br>

### LIST

`GET /{table}` to show all of a specific item <br>
**Must contain in URL:** table (characters, races, or weapons)
**Example:** `GET http://localhost:8080/characters` <br>





