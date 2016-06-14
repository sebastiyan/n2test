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
    groups: function(){
        return Groups.find();
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
});

Template.profile.onCreated(function() {
    this.autorun(function() { 
        var optionsCursor = Groups.find().count(); 
        if(optionsCursor > 0){ 
            $('select').material_select(); 
        }
    });
});

Template.profile.events({
    "click #tests tr": function(e){
        if ($(e.target).hasClass("remove-test")) {
            console.log(this._id);
        }
    },
    "submit form": function(e){
        var $form = $(e.target);

        var name = $("#name").val().trim();
        var surname = $("#surname").val().trim();
        var patronymic = $("#patronymic").val().trim();
        var selectedIndex = $("li.selected").index();
        var groupId = $("select option").eq(selectedIndex).val();

        // Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.name': name}});
        Meteor.users.update({_id: Meteor.userId()}, {$set: {'profile.name': name, 'profile.surname': surname, 'profile.patronymic': patronymic, 'profile.groupId': groupId}});

        $("input").each(function(i,elem) {
            console.log($(this))
            $(this).prop('readonly', true);
            $(this).addClass("readonly");
        });

        $(".save-profile").hide();

        sAlert.success('Профіль збережено');

        e.preventDefault();
        return false;
    },
    "click .edit-profile": function(e){
        $("form input").eq(0).focus();

        $("form input").each(function(i,elem) {
            if ($(this).hasClass("readonly")) {
                $(this).removeAttr("readonly");
                $(this).removeClass("readonly");
            }
        });
        $("select").attr('disabled', false);

        $(".save-profile").show();
    }
})