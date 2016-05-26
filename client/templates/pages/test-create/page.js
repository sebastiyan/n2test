
Template.testCreate.events({
    "submit form": function(e){
        // save test to the database
        var testId = Tests.insert({
            "name": $("#test-name").val().trim(),
            "subjectId": $("input.subject:checked").val(),
            "creatorId": Meteor.userId()
        });

        Router.go('/question-create/' + testId);

        e.preventDefault();
        return false;
    }
})
Template.testCreate.helpers({
    subjects: Subjects.find()
})
Template.testCreate.onRendered(function(){})