// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.


  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    // empty the chat box before rerendering to not display duplicates
    MessagesView.$chats.empty();
    for (let message of messages) {
      // call this.renderMessage on every message
      MessagesView.renderMessage(message)
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    //use render template to render html
    let compile = MessageView.render;
    let compiled = compile(message)
    compiled = compiled.replaceAll('<script>', 'hohoho;').replaceAll('</script>', 'no sir')
    let $compiled = $(compiled);
    $compiled.find('.username').on('click', MessagesView.handleClick);

    MessagesView.$chats.prepend($compiled)
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    Friends.toggleStatus(event.target.innerHTML)
  }
};