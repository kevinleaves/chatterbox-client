// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};

Rooms.update = function (data, callback = () => {}) {
  // only grab unique roomnames from data array? there has to be a more efficient way to do this
  for (let messageObj of data) {
    if (!this._data[messageObj.roomname]) {
      this._data[messageObj.roomname] = [];
    }
  }
  // RoomsView.render(this._data)
  callback();
}

// make an add room method
Rooms.add = function (room) {
  console.log(room)
  this._data[room] = [];
  console.log(this._data)
  // RoomsView.renderRoom(room)
  RoomsView.render(this._data)

}
