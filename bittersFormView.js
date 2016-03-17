var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('./templates');
var BittersModel = require('./bittersModel');

module.exports = Backbone.View.extend({
  el: '.content',
  template: _.template(tmpl.createPost),
  events: {
    'submit .submitPost': 'createPost'
  },
  createPost: function(event) {
    event.preventDefault();
    console.log("submit post button clicked");
    var newPost = {
      name: this.$el.find(input[name="name"]).val(),
      title: this.$el.find(input[name="title"]).val(),
      post: this.$el.find(input[name="bitterPost"]).val()
    };;
    var newPostMessage = new BittersModel(newPost)
    this.$el.find('input').val('');
    this.$el.find('textarea').val('');
    newPostMessage.save();
    // this.collection.add(this.model);
    // console.log(this.collection);
  },
  initialize: function() {
    this.model = new BittersModel({});
    this.render();
  },
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    return this;
  }
});
