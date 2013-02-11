var credentials = {
  beforeSend: headerSetter,
  contentType: "application/json"
};

var Messages = Backbone.Collection.extend({
  model: Message,
  url: "https://api.parse.com/1/classes/messages"
  // fetch: function(options){
  //   return this.constructor.__super__.fetch.apply(this, arguments);
  //   // return Backbone.Collection.prototype.fetch.apply(this, credentials);
  // }
});

var Message = Backbone.Model.extend({
  url: function(){
    return "https://api.parse.com/1/classes/messages/" + this.get("objectId");
  }
});