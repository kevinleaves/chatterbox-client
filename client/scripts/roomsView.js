// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', () => {
      RoomsView.handleChange(event);
    })
  },

  render: function(rooms) {
    // TODO: Render out the list of rooms.
    // call renderRoom on every room key in rooms;
    for (room in rooms) {
      this.$select.append(RoomsView.renderRoom(room));
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // input room name as a string and output/return an option element
    let option = $(`<option value=${roomname}>${roomname}</option>`);
    return option;
    // make option element

  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    console.log(event)
    console.log(RoomsView.$select.val())
    console.log(event.target.value)
    console.log(RoomsView.$select.find(':selected').val())
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }

};
