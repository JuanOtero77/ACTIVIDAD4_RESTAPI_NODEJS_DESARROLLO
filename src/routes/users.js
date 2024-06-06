const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const users = require ('../sample.json')

router.get('/', (req, res) => {
  res.send(users);  
});

router.post("/", (req, res) => {
    const { clave, nombre, correo, rol } = req.body;
    if (clave && nombre && correo && rol) {
        const id = users.length + 1;
        const newUser = {...req.body, id};
        users.push(newUser);
        res.json(users);
    } else{
        res.status(500).json({ error: "There was an error." });
    }
  });

  router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { clave, nombre, correo, rol } = req.body;
    if (clave && nombre && correo && rol) {
        _.each(users, (user, i) => {
            if(user.id == id){
                user.clave = clave;
                user.nombre = nombre;
                user.correo = correo;
                user.rol = rol;
            }
        });
        res.json(users);
    } else{
        res.status(500).json({ error: "There was an error." });
    }
  });

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    _.each(users, (user, i) => {
        if (user.id == id) {
          users.splice(i, 1);
        }
    });
    res.send(users);
});

module.exports = router;