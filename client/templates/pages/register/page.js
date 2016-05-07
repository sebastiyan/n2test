Template.register.events({
    "submit form": function(){
        event.preventDefault();

        // get values from the form
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        // hardcode
        var roles = "student"

        // add user to database
        Accounts.createUser({
            email: email,
            password: password
            // roles: roles 
        });
    }
});