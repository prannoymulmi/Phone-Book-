/**
 * This is a compnent which is a a generic list for for users with a avatar and name
 * @type {{template: *, controller: listController, bindings: {users: string, onHandleClick: string, listHeader: string}}}
 */
module.exports = {
  template: require('./userLists.html'),
  controller: listController,
  bindings: {
    users: '=',
    onHandleClick: '&',
    listHeader: '<'
  }
};

function listController() {
}

listController.prototype = {
  // The onclick method for a single list item
  handleClick: function (index) {
    this.onHandleClick({index: index});
  }
};
