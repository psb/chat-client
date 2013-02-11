$(document).ready(function(){

  var credentials = {
    success: function(){
      console.log("success");
    },
    beforeSend: headerSetter,
    contentType: "application/json"
  };

  var messages = new Messages();
  messages.fetch(credentials);
  var allMessagesView = new AllMessagesView({collection: messages});
  $("#messages").append(allMessagesView.render());
  // messages.fetch({
  //   success: function(){
  //     console.log(messages);
  //   },
  //   beforeSend: headerSetter,
  //   contentType: "application/json"
  // });
});