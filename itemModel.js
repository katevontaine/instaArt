var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/myart',
  idAttribute: '_id',
  defaults: {
    imageUrl: " ",
    title:"My Picture",
    likes: '0'
  },

});
