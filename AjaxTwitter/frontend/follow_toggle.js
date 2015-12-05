function FollowToggle (button) {
  this.$el = $(button);
  this.userId = this.$el.data('user-id');
  this.followState = this.$el.data('initial-follow-state');
  this.render();
  this.$el.on("click", this.handleClick.bind(this));
}



module.exports = FollowToggle;

FollowToggle.prototype.handleClick = function (e) {
  this.$el.prop('disabled', true);
  var followToggle = this;
  var type = (this.followState === 'followed') ? "DELETE" : "POST";
  //ajax
  event.preventDefault();

  $.ajax({
    url: "/users/" + this.userId + "/follow",
    type: type,
    dataType: "json",
    success: function () {
      followToggle.$el.prop('disabled', false);
      followToggle.flipFollowState();
      followToggle.render();
    }
  });
};

FollowToggle.prototype.render = function () {
  if (this.followState === "unfollowed") {
    this.$el.text("Follow!");
  } else {
    this.$el.text("Unfollow!");
  }
};

FollowToggle.prototype.flipFollowState = function () {
  if (this.followState === "followed") {
    this.followState = "unfollowed";
  } else {
    this.followState = "followed";
  }
};
