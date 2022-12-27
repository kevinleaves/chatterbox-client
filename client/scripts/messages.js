// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages. i'm using an array to start off
  _data: [],

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  // make methods to interact with the data, like an update function
};

Messages.update =  function (data) {
  this._data = data.slice();
  MessagesView.render(this._data);
};
