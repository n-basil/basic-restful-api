const express = require("express");
const morgan = require("morgan");
const { getAllCharacters, getSpecficCharacter, addCharacter, updateCharacter,
        getAllRaces, getSpecificRace, addRace, updateRace, 
        getAllWeapons, getSpecificWeapon, addWeapon, updateWeapon
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
    const name = req.body.name ? req.body.name : '';
    const race_id = req.body.race_id ? req.body.race_id : null;
    const weapon_id = req.body.weapon_id ? req.body.weapon_id : null;

    addCharacter(name, race_id, weapon_id)
        .then((data) => 
            res.status(200).json({message: `The following data was posted successfully: ${req.body} `})
        )
        .catch((err) => 
            res.status(422).json({message: "Failure to post data"})
        )

   
})

app.post("/races", (req, res) => {

})

app.post("/weapons", (req, res) => {
    
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

app.patch("/characters/:id", (req, res) => {
    const params = req.query

    updateCharacter(req.params.id, params)
        .then((data) => 
            res.status(200).json({message: `Character ID: ${id} has been updated successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: "Unable to update successfully"})
        )
})

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