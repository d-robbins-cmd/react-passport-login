const express = require('express')
const router = express.Router()


//basic page GETss
router.get('/', ( req, res ) => {
    res.render( 'home' )
})
router.get( '/home', ( req, res ) => {
    res.render( 'home' )
})
router.get( '/login', ( req, res ) => {
    res.render( 'login' )
})
router.get( '/register', ( req, res ) => {
    res.render( 'register' )
})




module.exports = router