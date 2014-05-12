define(function(require) {

  var Backbone = require('backbone');

  return Backbone.Model.extend({

    url: function() {
      return '/api/posts' + (this.isNew() ? '' : '/' + this.get('id'));
    }

  });

});
