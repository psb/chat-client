var MessageView = Backbone.View.extend({

  tagName: "p",
  className: "message",
  template: _.template('<%= username %> said: <%= text %></br><span class="messageTime">at <%= createdAt %>'),

  render: function(){
    return this.$el.html(this.template(messageModel.attributes));
  }
});