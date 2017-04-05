// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,

  initialize: function(arg) {
    this.set('color', 'blue');
    console.log(this);
    if (arg) {
      SongQueue.Collection.create(arg);
    }
  },

  playFirst: function() {
    //return _.first(this.models);
  },

  add: function(songData) {
   // console.log(this);
    SongQueue.create(songData);

    if (this.models.length === 1) {
      this.playFirst();
    }
  },

  at: function(index) {
  },

  remove: function (song) {
  }

});