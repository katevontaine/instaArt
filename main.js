var $ = require('jquery');
var ItemCollection = require('./itemCollection');
var ItemModel = require('./itemModel');


$(document).ready(function () {

  var picTitle = ($(this).siblings('input[name="Title"]').val());
  var theLink = ($(this).siblings('input[name="Image"]').val());
  var picLink = "<img src='" + theLink + "'>";


  $('.postPic').on('click', function(){
    alert('it submit');
    event.preventDefault();

    var myPhotoCollection = new ItemCollection();
    var myPhotos = new ItemModel({imageUrl: picLink, title: picTitle, likes: '0'});
    myPhotoCollection.fetch().then(function (collectionData) {
      console.log(myPhotoCollection);
      console.log(myPhotos);
      myPhotos.save({imageUrl: picLink, title: picTitle,});
    // myPhotoCollection.models.picTitle.save();
      // myPhotoCollection.models.picLink.save();
    });

    console.log($(this).siblings('input[name="Image"]').val());
    var picTitle = ($(this).siblings('input[name="Title"]').val());
    var picLink = ($(this).siblings('input[name="Image"]').val());
    $('.main').append(picTitle + "<img src='" + picLink + "'>");
    $('.main').html(myPhotoCollection);

  })

});
