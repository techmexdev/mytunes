// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({
  model: SongModel,

  initialize: function(song) {
    this.on('add', function () {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function () {
      this.remove(_.first(this.models));
      if (this.models.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function () {
      this.remove(_.first(this.models));
    });
  },

  playFirst: function() {
  }

});