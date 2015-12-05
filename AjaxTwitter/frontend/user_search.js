function UsersSearch (nav) {
  this.$el = $(nav);
  this.setupInputListener();
  // this.ul = [];
}

UsersSearch.prototype.setupInputListener = function () {
  this.$el.find('#input').on("input", this.handleInput.bind(this));
};

UsersSearch.prototype.handleInput = function (e) {
  var usersSearch = this;
  var input = $(e.currentTarget).serialize();

  $.ajax({
    url: "/users/search",
    type: "GET",
    data: input,
    dataType: "json",
    success: function (data) {
      usersSearch.renderResults(data);
    }
  });
};

UsersSearch.prototype.renderResults = function (users) {
  var ul = this.$el.find('ul');
  ul.empty();

  users.forEach(function(user) {
    var $li = $('<li>').append(user.username);
    ul.append($li);
  });
};

module.exports = UsersSearch;
