const router = require('express').Router()
const auth = require('./auth')
const user = require('./user')
const travel = require('./travel')

router.use('/auth', auth)
router.use('/user', user)
router.use('/travel', travel)

module.exports = router