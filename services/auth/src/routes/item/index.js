"use strict"
const express = require("express")
let router = express.Router()
const _log = require('../../core/log')



//  router.use((req, res, next) => log.add(req, res, next))

const log = new _log
router
    .route("/")
    .get((req, res) => {
        res.send("test item goes here!")
        log.create('hello')
    })

    .post((req, res) => {
        //  check for auth token
        console.log('adding data if auth passes')
    })


//  ----------------
module.exports = router