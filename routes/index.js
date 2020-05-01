const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.ejs');
});
/*
router.post('/', (req, res) => {
    res.send('ok');
    console.log('ok');
});
*/

module.exports = router;