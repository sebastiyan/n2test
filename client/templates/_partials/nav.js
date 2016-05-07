Template.nav.events({})
Template.nav.helpers({
    myProfileLink: function() {
        return "/profile/" + Meteor.userId()
    }
})