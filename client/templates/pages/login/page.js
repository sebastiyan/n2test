Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Meteor.loginWithPassword(email, password, function(error){
            if(error){
                console.log(error.reason);
            } else {
                console.log("Вхід успішний")
            }
        });
    }
});