const { Router } = require('express');
const router = Router();

router.get('/prueba', (req, res) => {
    const data = {
        "name": "juan",
        "apellido": "otero"
    };
    res.json(data);
});

module.exports = router;