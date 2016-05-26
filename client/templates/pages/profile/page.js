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
                {
                    key: "",
                    label: "",
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a href="/" class="waves-effect waves-light btn">Видалити</a>')
                    }
                }
            ]
        };
    }
})
