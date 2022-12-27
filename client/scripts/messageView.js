// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat">
        <div>roomname: <%= roomname %></div>
        <div class="username"><%= username %></div>
        <div class="chatText">text: <%- text %></div>
        <div>github handle: <%= github_handle %></div>
      </div>
    `)
};

        // <div>github handle: <%= github_handle %></div>
