const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.ejs');

    console.log('---------------------\n New user connected! \n---------------------');
});

module.exports = router;