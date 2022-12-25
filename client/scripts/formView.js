// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$form.find('#message').on('change', function () {
      FormView.setStatus(null)
    })
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    // form a message obj within handleSubmit
    let message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      // roomname: 'lobby',
      // not sure if you can do this because you're not supposed to pull data from another view.
      roomname: RoomsView.$select.val(),
    }

    // post to server using parse.create
    Parse.create(message, (data) => {
      console.log(data, 'data obj')
      console.log('successful post')
    })

    // site state needs to rerender to capture my posted message

    // input box needs to reset back to nothing after submit
    FormView.$form.find('#message').val('');
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};