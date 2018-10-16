const express = require('express');
const db = require('../models');
const router = express.Router();
const _ = require('lodash');
const requireLogin = require('../passport/requireLogin');
const winston = require('../config/winston');

/* GET users listing. */
router.get('/', requireLogin, function (req, res, next) {

  res.render('catalog', {
    title: 'Main Catalog'
  });

});

router.post('/insertdata', requireLogin, async function (req, res, next) {

  let formData = req.body;
  let result = await db.cataloggeo.findOrCreate({
    where: {
      host: formData.host.toString(),
      service: formData.service.toString()
    },
    defaults: {
      component: formData.component.toString(),
      priority: formData.priority.toString(),
      environment: formData.environment.toString(),
      datacenter: formData.datacenter.toString(),
      url: formData.url.toString()
    }
  });
  res.send(result);
});


router.get('/getalldata', requireLogin, async function (req, res, next) {

  dataSet = await db.cataloggeo.findAll({
    raw: true
  }).then(function (results) {
    return _.map(results, function (result) {
      return {
        "host": result.host,
        "service": result.service,
        "component": result.component,
        "priority": result.priority,
        "environment": result.environment,
        "datacenter": result.datacenter,
        "url": result.url
      }
    })
  }).then((dataSet) =>{
    res.send(dataSet);
  }).catch(function (err) {
    winston.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  }) 
});

router.post('/destroydata', requireLogin, async function (req,res,next){
  let formData = req.body;
  let result = await db.cataloggeo.destroy({
    where: {
      host: formData.host.toString(),
      service: formData.service.toString()      
    }
  });
  console.log(result);
  if (result === 1) {
    return res.status(200).json({
      status: "rule removed"
    });
  } else if (result === 0){
    return res.status(404).json({
      status: "Rule not found in the database!"
    });
  } else{
    return res.status(500).json({
      status: "Error!"
    });
  }
  
});


module.exports = router;