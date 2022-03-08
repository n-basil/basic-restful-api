const express = require("express");
const morgan = require("morgan");
const { getAllCharacters, getSpecficCharacter, 
        getAllRaces, getSpecificRace,
        getAllWeapons, getSpecificWeapon 
      } = require("./database/controllers");

const app = express();

// middleware goes here
app.use(morgan("tiny"));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the LOTR RESTful API")
})

// CREATE (POST)

app.post("/characters", (req, res) => {

})


// READ (GET)

app.get("/characters/:id", (req, res) => {
    getSpecficCharacter(req.params.id)
        .then((data) => res.send(data))
        .catch((err) => 
            res.status(404).json({message: "No character found matching this search!"})
        )
})

app.get("/races/:id", (req, res) => {
    getSpecificRace(req.params.id)
    .then((data) => res.send(data))
      .catch((err) =>
          res.status(404).json({message: "No race found matching this search!"})
      )
})

app.get("/weapons/:id", (req, res) => {
  getSpecificWeapon(req.params.id)
      .then((data) => res.send(data))
      .catch((err) =>
          res.status(404).json({message: "No weapon found matching this search!"})
        )    
})

// UPDATE (PUT, PATCH)


// DELETE (DELETE)


// LIST (GET)

app.get("/characters", (req, res) => {
    // db.query("SELECT * FROM create_characters;"); // how you do it with PG
    getAllCharacters()
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(404).json({ message: "No characters found matching this search!" })
      );
  });

  app.get("/races", (req, res) => {
    // db.query("SELECT * FROM create_races;"); // how you do it with PG
    getAllRaces()
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(404).json({ message: "No race found matching this search!" })
      );
  });
  
  app.get("/weapons", (req, res) => {
    // db.query("SELECT * FROM create_weapons;"); // how you do it with PG
    getAllWeapons()
      .then((data) => res.send(data))
      .catch((err) =>
        res.status(404).json({ message: "No weapons found matching this search!" })
      );
  });

  


module.exports = app;