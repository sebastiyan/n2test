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

Router.route("/question-create", {
    name: "questionCreate"
})

Router.route("/subject-create", {
    name: "subjectCreate"
})

Router.route("/test-create", {
    name: "testCreate"
})

