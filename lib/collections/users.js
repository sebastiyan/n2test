Meteor.methods({
    'createUserWithRole': function (formdata) {
        Accounts.createUser({
            profile: {
                surname: formdata.surname,
                name: formdata.name,
                patronymic: formdata.patronymic,
            },
            email: formdata.email,
            password: formdata.password
            
        });
        Roles.addUsersToRoles( Meteor.userId(), [ formdata.roles ] );
    }
})