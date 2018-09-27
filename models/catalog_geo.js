'use strict';
module.exports = (sequelize, DataTypes) => {
  var catalog_geo = sequelize.define('catalog_geo', {
    host: DataTypes.STRING,
    service: DataTypes.STRING,
    component: DataTypes.STRING,
    priority: DataTypes.STRING,
    environment: DataTypes.STRING,
    datacenter: DataTypes.STRING,
    url: DataTypes.STRING
  }, {});
  catalog_geo.associate = function(models) {
    // associations can be defined here
  };

  

  return catalog_geo;
};

// catalog_geo
//   host:string
//   servico:string
//   componente:string
//   prioridade:string
//   ambiente:string
//   datacenter:string
//   url:string

// catalog_gis
// catalog_edi
// catalog_fiscal
// catalog_plan
// users
// perf_data
