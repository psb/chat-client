$(document).ready(function(){

  var drawMessage = function(data){
    $.each(data.results, function(message){
      var messageTemplate = $('<p></p>');
      var messageHTML = messageTemplate.append(this.text);
      $("#messages").append(messageHTML);
    });
  };

  var getMessages = function(){
    $.ajax({
      url: "https://api.parse.com/1/classes/messages",
      beforeSend: headerSetter,
      contentType: "application/json",
      success: function(data){
        console.log(data.results);
        drawMessage(data);
      }
    });
  };

  var blankMessage = function(user, message){
    return {
      username: user,
      message: message,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  };

  var sendMessage = function(message){
    $.ajax({
      url: "https://api.parse.com/1/classes/messages",
      type: "POST",
      beforeSend: headerSetter,
      contentType: "application/json",
      data: message,
      error: function(error){
        console.log(error);
      }
    });
  };

  $('#inputMessage').submit(function(){
    var formData = $(this).serializeArray();
    var user = formData[0]["value"];
    var postedMessage = formData[1]["value"];
    var message = blankMessage(user, postedMessage);
    sendMessage(message);
    // console.log($(this).serializeArray());
    // console.log(user, message);
    // return false;
  });

  // setInterval(function(){
  //   getMessages();
  // }, 1000);
});