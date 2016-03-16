var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/justinbitters',
  id: '_id',
  initialize: function() {
    log('here I am rock you like a hurricane');
  }
});
