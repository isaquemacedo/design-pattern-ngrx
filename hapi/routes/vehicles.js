'use strict';

var service = {},
  routes = [];
var fs = require('fs');
var path = require('path');
var vehicles = fs.readFileSync(path.join(__dirname, '../datas/vehicles.json'));

service = {
  vehicles: {
    description: 'Lista de veiculos',
    handler: function (req, h) {
      return h.response(vehicles).code(200);
    }
  }
}

routes = [
  {
    path: '/veiculos',
    method: 'GET',
    config: service.vehicles
  }
];

module.exports.routes = routes;