var AllMessagesView = Backbone.View.extend({

  initialize: function(){
    this.subviews = this.collection.map(function(messageModel){
      return new MessageView({model: messageModel});
    });
  },

  render: function(){
    var that = this;
    _.each(this.subviews, function(subview){
      that.$el.prepend(subview.render());
    });

    return this.$el;
  }
});