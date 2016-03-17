var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend({
  tagName: 'article',
  template: _.template(tmpl.post),
  initialize: function() {
    console.log(this.model);
  },
  events: {
    'click .delete': 'removePost',
    'click .edit': 'editPost',
    'click .showEdit': 'toggleEdit'
  },
  removePost: function() {
    this.model.destroy();
  },
  editPost: function() {
    // this.model.set({
    //   user: .val(),
    //   time: .val(),
    //   title: .val(),
    //   post: .val()
    //
    // });
  },
  toggleEdit: function() {
    this.$el.find('editSection').toggleClass('editing');
  },
  render: function() {
    var markup = this.template(this.model.toJSON);
    this.$el.html(markup);
    return this;
  }
});
