var rightAnswerChecked;

Template.questionCreate.events({
    "blur textarea": function(e){
        $(e.target).val($(e.target).val().trim())
    },

    // get index of radio button right answer
    "change input.right-answer": function(e){
        rightAnswerChecked = $(e.target).parent().parent().index();
    },

    "submit form.question-create": function(e){
        var $form = $(e.target);

        // save question with answers to the database
        var questionId = Questions.insert({
            "name": $form.find(".question-name").val().trim(),
            "answers": [
            $form.find(".answer-1").val().trim(),
            $form.find(".answer-2").val().trim(),
            $form.find(".answer-3").val().trim(),
            $form.find(".answer-4").val().trim()
            ],
            "testId": this._id
        });

        // save right answer to the database
        RightAnswers.insert({
            "index": rightAnswerChecked,
            "questionId": questionId
        });

        document.location.reload(true);

        e.preventDefault();
        return false;
    },

    "click .end-creation":function(e){
        Router.go("/");
    }
})
Template.questionCreate.helpers({})
