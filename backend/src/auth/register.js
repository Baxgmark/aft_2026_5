const express = require('express');
const Router = express.Router();
const db = require('../db/index');
const jwt = require('jsonwebtoken');
const { validationResult , body} = require('express-validator');
const bcrypt = require('bcrypt');

Router.post('/login', 
    [
        body('username').notEmpty().withMessage('please fill username'),
         body('password').notEmpty().withMessage('please fill password'),
         body('firstname').notEmpty().withMessage('please fill firstname'),
         body('lastname').notEmpty().withMessage('please fill lastname'),
         body('department').notEmpty().withMessage('please fill department'),
        body('position').notEmpty().withMessage('please fill position'),
    ],
    async (req,res) => {

    })