const router = require('express').Router();
const db = require('../../models');

router.get('/', (req, res) => {
    console.log('/api/users route hit');
    db.User.findAll({}).then(function(userData){
        res.json(userData);
    })
})

router.post('/', (req, res) => {
    let newUser = new db.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userImage: req.body.userImage,
    })
    // console.log(req.body)
    newUser.save().then( () => {
        console.log('saved');
    })
    .catch(err => console.log(err))
})

module.exports = router;