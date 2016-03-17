var Backbone = require('backbone');
var $ = require('jquery');
var BittersCollection = require('./bittersCollection');
var BittersCollectionView = require('./bittersCollectionView');
var BittersFormView = require('./bittersFormView');
var BittersModel = require('./bittersModel');
var BittersModelView = require('./bittersModelView');

$(document).ready(function() {
  var bittersCol = new BittersCollection();
  bittersCol.fetch().then(function(data) {
    var collection = new BittersCollection(data);
    console.log("collection", collection);
    var postMarkup = new BittersCollectionView({collection: collection});
  });
  var bittersFormView = new BittersFormView();
});
