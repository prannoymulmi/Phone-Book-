/**
 * This is aa container which contains all the componets and which passes all the necssary values to the components
 * @type {{template: *, controller: mainController}}
 */
module.exports = {
  template: require('./Main.html'),
  controller: mainController
};

function mainController(userData) {
  this.appHeader = 'Contacts';
  this.user = userData.getSelected();
  this.userData = userData;
  this.searchText = '';
  this.users = userData.getUsers();
  this.listHeader = 'Contact List';
  this.placeholder = 'Search Contacts';
}

mainController.prototype = {
  // This function gets the selected user from the data set
  getSelectedUser: function (index) {
    this.userData.setSelected(index);
    this.user = this.userData.getSelected();
  },

  // This function filters the data for the views
  filterData: function (searchText) {
    this.searchText = searchText;
    this.userData.setSearchText(searchText);
    this.users = this.userData.filterData();
  }
};
