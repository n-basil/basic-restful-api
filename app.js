const express = require("express");
const morgan = require("morgan");
const { getAllCharacters, getSpecficCharacter, addCharacter, updateCharacter, deleteCharacter,
        getAllRaces, getSpecificRace, addRace, updateRace, deleteRace,
        getAllWeapons, getSpecificWeapon, addWeapon, updateWeapon, deleteWeapon
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
            res.status(200).json({message: `The following data was posted successfully`})
        )
        .catch((err) => 
            res.status(422).json({message: `Failure to post data. ERROR: ${err}`})
        )   
})

app.post("/races", (req, res) => {
    const name = req.body.name ? req.body.name : '';
    
    addRace(name)
        .then((data) => 
            res.status(200).json({message: `The following data was posted successfully`})
        )
        .catch((err) => 
            res.status(422).json({message: `Failure to post data. ERROR: ${err}`})
        )
})

app.post("/weapons", (req, res) => {
    const name = req.body.name ? req.body.name : '';
    const w_type = req.body.weapon_type ? req.body.weapon_type : null;
    const c_id = req.body.character_id ? req.body.character_id : null;
    const c_by = req.body.created_by ? req.body.created_by : null;
    
    addWeapon(name, w_type, c_id, c_by)
        .then((data) => 
            res.status(200).json({message: `The following data was posted successfully`})
        )
        .catch((err) => 
            res.status(422).json({message: `Failure to post data. ERROR: ${err}`})
        )
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
    updateCharacter(req.params.id, req.query)
        .then((data) => 
            res.status(200).json({message: `Character ID: ${req.params.id} has been updated successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `Unable to update successfully, ERROR: ${err}`})
        )
})

app.patch("/races/:id", (req, res) => {
    updateRace(req.params.id, req.query)
        .then((data) => 
            res.status(200).json({message: `Character ID: ${req.params.id} has been updated successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `Unable to update successfully, ERROR: ${err}`})
        )
})

app.patch("/weapons/:id", (req, res) => {
    updateWeapon(req.params.id, req.query)
        .then((data) => 
            res.status(200).json({message: `Weapon ID: ${req.params.id} has been updated successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `Unable to update successfully, ERROR: ${err}`})
        )
})

// DELETE (DELETE)

app.delete("/characters/:id", (req, res) => {
    deleteCharacter(req.params.id)
        .then((data) => 
            res.status(200).json({message: `Character ID: ${req.params.id} has been deleted successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `Unable to delete successfully, ERROR: ${err}`})
        )
})

app.delete("/races/:id", (req, res) => {
    deleteRace(req.params.id)
        .then((data) => 
            res.status(200).json({message: `Character ID: ${req.params.id} has been deleted successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `Unable to delete successfully, ERROR: ${err}`})
        )
})

app.delete("/weapons/:id", (req, res) => {
    deleteWeapon(req.params.id)
        .then((data) => 
            res.status(200).json({message: `Character ID: ${req.params.id} has been deleted successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `Unable to delete successfully, ERROR: ${err}`})
        )
})


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