var express = require('express');
const db = require('../models');
var router = express.Router();
var _ = require('lodash');

/* GET users listing. */
router.get('/', function (req, res, next) {

  res.render('catalog', {
    title: 'Main Catalog'
  });


});

router.post('/insertdata', async function (req, res, next) {

  var formData = req.body;
  //console.log('body: ' + JSON.stringify(req.body));

  return await db.cataloggeo.create({
    host: formData.host.toString(),
    service: formData.service.toString(),
    component: formData.component.toString(),
    priority: formData.priority.toString(),
    environment: formData.environment.toString(),
    datacenter: formData.datacenter.toString(),
    url: formData.url.toString(),
    createdAt: new Date(),
    updatedAt: new Date()
  }, {});

  //res.send(req.body);
});


router.get('/getdata', async function (req, res, next) {

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
  });
  res.send(dataSet);
});

module.exports = router;