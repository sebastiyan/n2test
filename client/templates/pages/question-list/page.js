Template.questionList.events({})
Template.questionList.helpers({
    settings: function () {
        return {
            collection: Questions.find(),
            rowsPerPage: 10,
            showFilter: true,
            fields: [
                {
                    key: 'name',
                    label: 'Question'
                },
                {
                    key: '_id',
                    label: '',
                    fn: function (value, object) {
                        return new Spacebars.SafeString('<a href="/question/'+value+'">Ответить</a>')
                    }
                }
            ]
        };
    }
})