Template.questionCreate.events({
	"submit form": function(e){
		var $form = $(e.target);

		var name = $form.find(".question-name").val();

		var answers = [
			$form.find(".answer-1").val(),
			$form.find(".answer-2").val(),
			$form.find(".answer-3").val(),
			$form.find(".answer-4").val()
		];

		Questions.insert({
			"name": name,
			"answers": answers
		})
		e.preventDefault();
		return false;
	}
})
Template.questionCreate.helpers({})