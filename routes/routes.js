const { response } = require('express');
const express = require('express');
const router = express.Router()
const signUptemplateCopy = require('../models/SignUpModels')


router.post('/signup', (request, response) => {
    const signedUpUser = new signUptemplateCopy({
        fullname: request.body.fullname,
        username: request.body.username,
        email: request.body.email,
        password: request.body.password
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
})


module.exports = router;
