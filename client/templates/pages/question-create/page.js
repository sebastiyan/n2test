Template.questionCreate.events({
	"blur textarea": function(e){
		$(e.target).val($(e.target).val().trim())
	},

	"submit form": function(e){
		var $form = $(e.target);

		Questions.insert({
			"name": $form.find(".question-name").val().trim(),
			"answers": [
			$form.find(".answer-1").val().trim(),
			$form.find(".answer-2").val().trim(),
			$form.find(".answer-3").val().trim(),
			$form.find(".answer-4").val().trim()
		]
		})
		e.preventDefault();
		return false;
	}
})
Template.questionCreate.helpers({})