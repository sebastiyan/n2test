Meteor.currentUserId = "u9SusLuhBak7GTKw9";

Template.testResult.events({

});

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
    return result;
  }
});

Template.testResult.onRendered(function(){
});
