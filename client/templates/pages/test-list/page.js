Template.testList.events({})
Template.testList.helpers({
    settings: function () {
        return {
            collection: Tests.find(),
            rowsPerPage: 10,
            showFilter: true,
            showNavigation: 'auto',
            fields: [
                {
                    key: 'name',
                    label: 'Назва'
                },
                {
                    key: 'subjectId',
                    label: 'Предмет',
                    fn: function (value, object) {
                        // find name of subject by subjectId in Subjects collection
                        return Subjects.findOne({ _id: value }).name;
                    }
                },
                {
                    key: 'creatorId',
                    label: 'Викладач',
                    fn: function (value, object) {
                        // get lectors name and surname that created test
                        return Meteor.users.findOne({ _id: value }).profile.name + ' ' + Meteor.users.findOne({ _id: value }).profile.surname;
                        // + Meteor.users.findOne({ _id: value }).surname
                    }
                },
                {
                    key: '_id',
                    label: '',
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a class="waves-effect waves-light btn" href="/test-pass/'+value+'">Пройти</a>')
                    }
                }
            ]
        };
    }
})