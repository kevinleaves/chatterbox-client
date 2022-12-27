// responsible for rendering every tab

let TabsView = {
// select the existing tabs div
  $tab: $('#tabs'),
  $addTabBtn: $('#rooms #newTab'),

  initialize: function () {
  //TODO: perform any work which needs to be done when this view loads
    TabsView.$addTabBtn.on('click', () => {
    TabsView.handleTabButtonClick();
    })
  },


  render: function (tabs) {
    // somehow get tab objects using a for loop
    this.$tab.empty();
    for (let tab of tabs) {
      this.renderTab(tab);
    }
    // call renderTab on every tab object in the loop
  },

  renderTab: function (tabObj) {
    // get template function from tabView.js
    let compile = TabView.render;
    // make htmlstring using compile
    let compiled = compile(tabObj)
    // select tabs div and append htmlString to it
    let $compiled = $(compiled)

    $compiled.on('click', () => {
      TabsView.handleTabClick(event)
    })

    this.$tab.append($compiled);

  },

   // handle tabs > possibly refactor into its own view/model
  handleTabButtonClick: function (event) {
    let selected = RoomsView.$select.find(':selected').text();
    Tab.add()
    Tab.update();
  },

  handleTabClick: function (event) {
    let room = event.target.innerText;
    event.target.classList.add('toggle')
    Parse.readRoom(room, (data) => {
      Messages.update(data)
      MessagesView.render(data);
    })

  }
};

