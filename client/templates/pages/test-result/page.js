Meteor.currentUserId = "u9SusLuhBak7GTKw9";

Template.testResult.events({

})

Template.testResult.helpers({})

Template.testResult.onRendered(function(){
    console.log(Template.currentData());
    var questions = Questions.find({"_id": this._id}).fetch();
    console.log(questions);
})

