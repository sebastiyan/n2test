Template.testCreate.events({
    "click .add-questions": function(e){
        // save test to the database
        var testId = Tests.insert({
            "name": $(".test-name").val().trim(),
            "subjectId": $(".subject > option:checked").val()
        });

        Router.go('/question-create/' + testId);
    }
})
Template.testCreate.helpers({
    subjects: Subjects.find()
})