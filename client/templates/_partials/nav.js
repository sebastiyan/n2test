Template.nav.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
        Router.go('login');
    }
})
Template.nav.helpers({
    myProfileLink: function() {
        return "/profile/" + Meteor.userId()
    }
})