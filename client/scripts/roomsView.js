// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms #addRoom'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$select.on('change', () => {
      RoomsView.handleChange(event);
    })
    RoomsView.$button.on('click', () => {
      RoomsView.handleClick(event);
    })

  },

  render: function(rooms) {
    // TODO: Render out the list of rooms.
    // call renderRoom on every room key in rooms;
    RoomsView.$select.empty();
    for (room of rooms) {
      RoomsView.renderRoom(room);
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    // input room name as a string and output/return an option element
    let $option = $(`<option value=${roomname}>${roomname}</option>`);
    this.$select.append($option)
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    // GOAL: only render chat with same roomname as selected dropdown option

    // VERSION 2: use a new get request and query by roomname
    // get selected string from dropdrown

    Rooms.selected = RoomsView.$select.find(':selected').text();
    // MessagesView.render(Messages.items());

    // new get request pass in selected;
    Parse.readRoom(Rooms.selected, (data) => {
      MessagesView.render(data.reverse())
    })

    // PERIODICALLY REFRESH ROOM PAGE WHEN WE CHANGE INTO A NEW ROOM. BROKEN ATM
    // let iid = setInterval(function () {
    //   Parse.readRoom(selected, (data) => {
    //     Messages.update(data);
    //     Rooms.update(data);
    //   })
    // }, 10000)
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    let roomname = window.prompt('add a room rn')

    Rooms.add(roomname, (rooms) => {
      // prevent xss attacks in roomname
      RoomsView.render(rooms);
      Parse.readRoom(Rooms.selected, (data) => {
        MessagesView.render(data.reverse());
      })
    });

    RoomsView.$select.val(Rooms.selected)
  },
};
