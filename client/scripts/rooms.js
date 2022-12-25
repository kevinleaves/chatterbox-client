// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};

Rooms.update = function (data) {
  // only grab unique roomnames from data array?
  for (let messageObj of data) {
    if (!this._data[messageObj.roomname]) {
      this._data[messageObj.roomname] = [];
    }
  }

  RoomsView.render(this._data)
}