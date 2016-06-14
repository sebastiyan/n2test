Template.profile.helpers({
    name: function(){
        return Meteor.user().profile.name;
    },
    surname: function(){
        return Meteor.user().profile.surname;
    },
    patronymic: function(){
        return Meteor.user().profile.patronymic;
    },
    email: function(){
        return Meteor.user().emails[0].address;
    },

    testsSettings: function () {
        return {
            id: "tests",
            collection: Tests.find({"creatorId": Meteor.userId()}),
            showNavigationRowsPerPage: false,
            showNavigation: 'auto',
            showFilter: false,
            fields: [
                {
                    key: "name",
                    label: "Назва"
                },
                {
                    key: "_id",
                    label: "",
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a href="/results/'+value+'" class="waves-effect waves-light btn">Подивитися результати</a>')
                    }
                },
                {key: '', headerClass: "actions", cellClass: "actions", label: '', sortable: false, fn: function(value, object){
                    return new Spacebars.SafeString('<a href="/" class="waves-effect waves-light btn remove-test">Видалити</a>');
                }}
            ]
        };
    },
    subjectsSettings: function () {
        return {
            id: "subjects",
            collection: Subjects.find({"creatorId": Meteor.userId()}),
            showNavigationRowsPerPage: false,
            showNavigation: 'auto',
            showFilter: false,
            fields: [
                {
                    key: "name",
                    label: "Назва"
                },
                {
                    key: "",
                    label: "",
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a href="/" class="waves-effect waves-light btn">Видалити</a>')
                    }
                }
            ]
        };
    },
    studentResultSettings: function () {
        return {
            id: "results",
            collection: Results.find({"userId": Meteor.userId()}),
            showNavigationRowsPerPage: false,
            showNavigation: 'auto',
            showFilter: false,
            fields: [
                {
                    key: 'testId',
                    label: 'Предмет',
                    fn: function (value, object) {
                        var subject = Tests.findOne({ _id: value }).subjectId;
                        return Subjects.findOne({ _id: subject }).name;
                    }
                },
                {
                    key: 'testId',
                    label: 'Тест',
                    fn: function (value, object) {
                        return Tests.findOne({ _id: value }).name;
                    }
                },
                {
                    key: "result",
                    label: "Результат"
                }
            ]
        };
    }
})


Template.profile.events({
    "click #tests tr": function(e){
        if ($(e.target).hasClass("remove-test")) {
            console.log(this._id)
        }
    }
})