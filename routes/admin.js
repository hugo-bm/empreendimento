const express = require("express")
const router = express.Router()
const Usuario = require('../models/admin')
const {eAdmin1} = require("../helpers/eAdmin1")
const {eAdmin2} = require("../helpers/eAdmin2")
const {eAdmin3} = require("../helpers/eAdmin3")
const {eAdmin4} = require("../helpers/eAdmin4")

//Não mexer daqui pra baixo
module.exports = router