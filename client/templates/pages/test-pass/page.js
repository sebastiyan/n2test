Meteor.currentUserId = "u9SusLuhBak7GTKw9";

Template.testPass.events({
    "submit .form_pass_test": function(e){
        var $form = $(e.target);

        // save user answers into db
        $(".question").each( function(){
            UserAnswers.insert({
                "userId": Meteor.currentUserId,
                "questionId": $(this).data("question"),
                "index": $(this).find("input:checked").parents(".radio").index()
            });
        });

        e.preventDefault();
        return false;
    }
})
Template.testPass.helpers({
    questions: function(){
        return Questions.find({"testId" : this._id})
    }
})
