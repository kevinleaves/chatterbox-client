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

    let html = '';
    // loop through data array
    for (let message of data) {
      let template = this.renderMessage(message)
      template = template.replaceAll('<script>', 'hohoho;')
      html += template;
    }
    // call compile passing in data obj
    // once we have our compiled html string, append it to $chats
    console.log(html)
    this.$chats.append(html);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.

    //use render template to render html
    let compile = MessageView.render;
    let compiled = compile(message)
    // compiled.replace('<', '&lt;')
    // compiled.replace('>', '&gt;')

    return compiled;
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};