// data structure for storing tabs

let Tab = {
  _data: [],
};


// tab methods go here
Tab.update = function () {
  // needs to render all tabs
  TabsView.render(this._data)
};

Tab.add = function () {
  // upon btn click grab current room and add it to local data as a tab object
  let room = RoomsView.$select.find(':selected').text();
  this._data.push({tab: room})
  //
}