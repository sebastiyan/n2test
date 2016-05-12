Template.register.events({
    "submit .form-registration": function(event, template){
        event.preventDefault();

        // get values from the form
        var surname = $('[name=surname]').val();
        var name = $('[name=name]').val();
        var patronymic = $('[name=patronymic]').val();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        var roles = $('.btn-role:focus').val();

        // add new user to database
        Accounts.createUser({
            surname: surname,
            name: name,
            patronymic: patronymic,
            email: email,
            password: password,
            roles: roles
        });

        template.find(".form-registration").reset();
    }
});