'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */
      Example:
      return queryInterface.bulkInsert('catalog_geo', [
        { host: '3PAR_SP2', service: 'CHECK_DISK_FAILURE', component: 'GEO', priority: 'Blocante', environment: 'Produção', datacenter: 'BR DC Equinix SP2', url: 'https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5', createdAt: new Date(), updatedAt: new Date()},
        { host: '3PAR_SP2', service: '3PAR_POWER_SUPPLY', component: 'GEO', priority: 'Blocante', environment: 'Produção', datacenter: 'BR DC Equinix SP2', url: 'https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5', createdAt: new Date(), updatedAt: new Date()},
        { host: 'CACATUA', service: 'LOAD_AVERAGE', component: 'GEO', priority: 'Blocante', environment: 'Produção', datacenter: 'BR DC Equinix SP2', url: 'https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5', createdAt: new Date(), updatedAt: new Date()},
        { host: 'CONNECTIONS', service: 'VPN_RJ2', component: 'GEO', priority: 'Blocante', environment: 'Produção', datacenter: 'BR DC Equinix SP2', url: 'https://www.safaribooksonline.com/videos/node-js-in-motion/10000MNLV201720/10000MNLV201720-EvansU4M5', createdAt: new Date(), updatedAt: new Date()},        
      ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      Example:
      return queryInterface.bulkDelete('catalog_geo', null, {});

  }
};
