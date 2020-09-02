'use strict';

const properties = require('../package.json');
const distance = require('../service/distance');

const controllers = {
    about: function (req, res) {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        };
        res.status(200).json(aboutInfo);
    },
    getDistance: function (req, res) {
        distance.find(req, res, (err, dist)=>{
            if(err) return res.status(400).json(err);
            res.status(200).json(dist);
        });
    }
};

module.exports = controllers;