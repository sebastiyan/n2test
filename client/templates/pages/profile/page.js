Template.profile.helpers({
    // userName: function() {
    //     Meteor.users.findOne({_id: Meteor.userId()}).profile.name;
    // },
    // userSurname: function() {
    //     Meteor.users.findOne({_id: Meteor.userId()}).profile.surname;
    // },
    name: function(){
        return Meteor.user().profile.name;
    },
    surname: function(){
        return Meteor.user().profile.surname;
    },
    patronymic: function(){
        return Meteor.user().profile.patronymic;
    },
    email: function(){
        return Meteor.user().emails[0].address;
    }
})
