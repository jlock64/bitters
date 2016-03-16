var Backbone = require('backbone');
var BittersModel = require('./bittersModel');
module.exports = Backbone.Collection.extend({
  model: BittersModel,
  url: 'http://tiny-tiny.herokuapp.com/collections/justinbitters',
  initialize: function() {
    console.log('collections is alive!B');
  }
});
