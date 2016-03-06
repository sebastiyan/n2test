Template.testList.events({})
Template.testList.helpers({
    settings: function () {
        return {
            collection: Tests.find(),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {
                    key: 'name',
                    label: 'Test'
                },
                {
                    key: '_id',
                    label: '',
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a href="/test-pass/'+value+'">Пройти</a>')
                    }
                }
            ]
        };
    }
})