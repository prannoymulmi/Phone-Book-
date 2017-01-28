/**
 * This is the controller of the generic filtercomponent which can be used for filtering Input
 * @type {{template: *, controller: filterInput, bindings: {items: string, handleSearchTextChange: string, searchText: string, itemText: string, placeholderText: string, itemName: string}}}
 */
module.exports = {
  template: require('./filterInput.html'),
  controller: filterInput,
  bindings: {
    items: '<',
    handleSearchTextChange: '&',
    searchText: '=',
    itemText: '<',
    placeholderText: '<',
    itemName: '<'
  }
};

function filterInput() {
  this.noCache = true;
}

filterInput.prototype = {
  searchTextChange: function (text) {
    this.handleSearchTextChange({searchText: text});
  },
  selectedItemChange: function (item) {
    if (item[this.itemName] !== angular.isUndefined) {
      this.handleSearchTextChange({searchText: item[this.itemName]});
    }
  }
};
