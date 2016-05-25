Template.register.events({
    "submit .registration-form": function(event, template){
        event.preventDefault();
        var formdata = {
            surname: $('#surname').val(),
            name: $('#name').val(),
            patronymic: $('#patronymic').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            roles: $('input:checked').val()
        }

        // add new user to database
        Meteor.call("createUserWithRole", formdata);

        // template.find(".form-registration").reset();
        return false;
    }
});