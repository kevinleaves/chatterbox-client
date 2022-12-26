// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.
};

Friends.toggleStatus = function (event) {
  // on click of username, stores that username
  let username = event.target.innerHTML;

  // adds username to _data
  Friends._data[username] = [];

  // finds every chat element in $chats whos username matches clicked username
  let $listOfChats = $('#chats').children()
  let filtered = $listOfChats.filter((idx, element) => {
    return $(element).find('.username')[0].innerHTML === username;
  })
  .map((idx, msg) => {
    $(msg).addClass('friend')
  })
}

