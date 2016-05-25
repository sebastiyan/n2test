
  Meteor.startup(function () {
    Meteor.methods({
    'createUserWithRole': function (formdata) {
        var userId = Accounts.createUser({
            profile: {
                surname: formdata.surname,
                name: formdata.name,
                patronymic: formdata.patronymic,
            },
            email: formdata.email,
            password: formdata.password
            
        });
        Roles.addUsersToRoles( userId, [ formdata.roles ] );
    }
})
})