/**
 * This is the controller of the component which shows the detailed view of the user
 * @type {{template: *, controller: userInfo, bindings: {user: string}}}
 */
module.exports = {
  template: require('./usersInfo.html'),
  controller: userInfo,
  bindings: {
    user: '='
  }
};

function userInfo() {
}
