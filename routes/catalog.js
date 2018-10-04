const express = require('express');
const db = require('../models');
const router = express.Router();
const _ = require('lodash');
const requireLogin = require('../passport/requireLogin');

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
  });
  res.send(dataSet);
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
    res.send("removed");
  }else{
    res.send('notfound');
  }
  
});


module.exports = router;