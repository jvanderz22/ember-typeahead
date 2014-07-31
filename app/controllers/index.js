export default Em.Controller.extend({
  remoteContent: function() {
    var data = Em.A([]);
    Em.$.ajax({
      url: 'https://api.github.com/search/repositories?q=ember',
    }).then(function(response) {
      Em.run.once(function() {
        response.items.forEach(function(item) {
          data.addObject(Em.Object.create(item));
        });
      });
    }, function() {
      Em.debug('Error in ember query response');
    });
    return data;
  }.property(),
});
