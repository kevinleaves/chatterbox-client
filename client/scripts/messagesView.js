// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
    // empty the chat box before rerendering to not display duplicates
    this.$chats.empty();

    for (let message of data) {
      // call this.renderMessage on every message
      this.renderMessage(message)
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    //use render template to render html
    let compile = MessageView.render;
    let compiled = compile(message)
    compiled = compiled.replaceAll('<script>', 'hohoho;').replaceAll('</script>', 'no sir')
    this.$chats.append(compiled)
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }
};