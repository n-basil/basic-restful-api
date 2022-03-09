const express = require("express");
const morgan = require("morgan");
const {   addCharacter, addRace, addWeapon,
        getAll, getSpecificItem, deleteItem, updateItem
      } = require("./database/controllers");

const app = express();

// middleware goes here
app.use(morgan("tiny"));
app.use(express.json());

// Home Page
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

app.get("/:table/:id", (req, res) => {
    getSpecificItem(req.params.table, req.params.id)
        .then((data) => res.send(data))
        .catch((err) => 
            res.status(404).json({message: `${req.params.table} does not exist. Please try characters, races, or weapons.`})
        )
})

// UPDATE (PUT, PATCH)

app.patch("/:table/:id", (req, res) => {
    updateItem(req.params.table, req.params.id, req.query)
        .then((data) => 
            res.status(200).json({message: `Weapon ID: ${req.params.id} has been updated successfully`})
        )
        .catch((err) =>
            res.status(404).json({message: `${req.params.table} does not exist. Please try characters, races, or weapons.`})
        )
})

// DELETE (DELETE)

app.delete("/:table/:id", (req, res) => {
    deleteItem(req.params.table, req.params.id)
    .then((data) => 
        res.status(200).json({message: `Character ID: ${req.params.id} has been deleted successfully`})
    )
    .catch((err) =>
        res.status(404).json({message: `${req.params.table} does not exist. Please try characters, races, or weapons.`})
    )   
})

// LIST (GET)

app.get("/:table", (req, res) => {
    getAll(req.params.table)
        .then((data) => res.send(data))
        .catch((err) =>
            res.status(404).json({ message: `${req.params.table} does not exist. Please try characters, races, or weapons.` })
        );
});


module.exports = app;