// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages. i'm using an array to start off
  _data: {},

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // make methods to interact with the data, like an update function
};


Messages.items = function () {
  return Object.values(Messages._data);
};

Messages.update =  function (messages, callback) {
  messages.forEach((message) => {
    Messages.add(message, callback);
  })

  callback(Messages.items());
};

Messages.add = function (message, callback) {
  Messages._data[message.message_id] = message;
  callback(Messages.items())
}