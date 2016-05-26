Template.groupCreate.events({
    "submit form": function(e){

        Groups.insert({
            "name": $("#group").val().trim()
        })

        $("input").val("");

        e.preventDefault();
        return false;
    }
})
