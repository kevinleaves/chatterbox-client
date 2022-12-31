// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  selected: 'lobby',
  // mark a room as selected, etc.

};

// items
Rooms.items = function () {
  return [...Rooms._data];
}

// isSelected
Rooms.isSelected = function (roomname) {
  return Rooms.selected === roomname;
}

// add
Rooms.add = function (room, callback= () => {}) {
  Rooms._data.add(room)
  Rooms.selected = room;

  callback(Rooms.items())
}


Rooms.update = function (data, callback) {
  // only grab unique roomnames from data array? there has to be a more efficient way to do this
  for (let messageObj of data) {
    if (!Rooms._data.has(messageObj.roomname)) {
      Rooms.add(messageObj.roomname);
    }
  }

  callback(Rooms.items());
}
