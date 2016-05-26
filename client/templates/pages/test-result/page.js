Template.testResult.events({});

Template.testResult.helpers({
    result: function() {

        var questions = Questions.find({"testId": Template.currentData()._id});
        var result = 0;

        questions.forEach(function(question) {
            var rightAnswer = RightAnswers.findOne({"questionId": question._id});
            var userAnswer = UserAnswers.findOne({"questionId": question._id});

            if(rightAnswer.index === userAnswer.index)
              result += 1;
        });

        Results.insert({
            "userId": Meteor.userId(),
            "testId": this._id,
            "result": result
        });

        return result;
    }
});