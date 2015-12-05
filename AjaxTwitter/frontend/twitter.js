var FollowToggle = require('./follow_toggle');
var UsersSearch = require('./user_search');

//Build follow / unfollow button handlers
$(function(){
  var $followButtons = $('.follow-toggle');
  for (var i = 0; i < $followButtons.length; i++) {
    new FollowToggle($followButtons[i]);
  }
});


//Build search handler
$(function(){
  var $searchNavs = $('.users-search');
  for (var i = 0; i < $searchNavs.length; i++) {
    new UsersSearch($searchNavs[i]);
  }
});
