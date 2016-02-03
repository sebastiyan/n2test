Meteor.currentUserId = "u9SusLuhBak7GTKw9";

Template.studentList.events({})
Template.studentList.helpers({
	studentList: Students.find()
})