Template.results.events({})
Template.results.helpers({
    resultsSettings: function () {
        return {
            id: "results",
            collection: Results.find({"testId": Template.currentData()._id}),
            showNavigationRowsPerPage: false,
            showNavigation: 'auto',
            showFilter: false,
            fields: [
                {
                    key: "userId",
                    label: "Студент"
                },
                {
                    key: "result",
                    label: "Результат"
                }
            ]
        };
    }
})