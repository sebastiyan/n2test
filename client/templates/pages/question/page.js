var currentQuestion;

Template.questionPage.events({
	"click button": function(e) {
		UserAnswers.insert({
            "userId": Meteor.currentUserId,
            "questionId": currentQuestion.data._id,
            "answerId": $(e.target).index()
        });
	}
})


Template.questionPage.onRendered(function(){
	currentQuestion = this;
})
Template.questionPage.helpers({
	question: this
})