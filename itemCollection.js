var Backbone = require('backbone');
var ItemModel = require('./itemModel');

module.exports = Backbone.Collection.extend({
  url: 'http://tiny-tiny.herokuapp.com/collections/myart',
  model: ItemModel
});
