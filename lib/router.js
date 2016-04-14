Router.configure({
    layoutTemplate: 'layout'
})

Router.route("/", {
    name: "homePage"
})

Router.route("/group-list", {
    name: "groupList"
})

Router.route("/student-list", {
    name: "studentList"
})

Router.route("/subject-list", {
    name: "subjectList"
})

Router.route("/test-list", {
    name: "testList"
})

Router.route("/question-list", {
    name: "questionList"
})

Router.route("/question/:_id", {
    name: "questionPage",
    data: function() {
        return Questions.findOne({
            _id: this.params._id
        });
    }
})

Router.route("/question-create/:_id", {
    name: "questionCreate",
    data: function() {
        return Tests.findOne({
            _id: this.params._id
        });
    }
})

Router.route("/test-pass/:_id", {
    name: "testPass",
    data: function() {
        return Tests.findOne({
            _id: this.params._id
        });
    }
})

Router.route("/test-result/:_id", {
    name: "testResult",
    waitOn: function () {
        return [
            Meteor.subscribe('tests'),
            Meteor.subscribe('questions'),
            Meteor.subscribe('userAnswers'),
            Meteor.subscribe('rightAnswers')
        ];
    },
    data: function() {
        return {
            _id: this.params._id
        }
    }
});

Router.route("/subject-create", {
    name: "subjectCreate"
})

Router.route("/test-create", {
    name: "testCreate"
})
