Template.testPass.events({
    "submit .form_pass_test": function(e){

        var $form = $(e.target);

        // save user answers into db
        $(".question").each( function(){
            UserAnswers.insert({
                "userId": Meteor.userId(),
                "questionId": $(this).data("question"),
                "index": $(this).find("input:checked").parents(".radio").index()
            });
        });

        e.preventDefault();

        Router.go('testResult', {_id: this._id});
    }
})
Template.testPass.helpers({
    questions: function(){
        return Questions.find({"testId" : this._id})
    }
})
