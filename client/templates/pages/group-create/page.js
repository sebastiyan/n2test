Template.groupCreate.events({
    "submit form": function(e){

        Groups.insert({
            "name": $(".group-name").val().trim()
        })

        $("textarea").val("");

        e.preventDefault();
        return false;
    }
})
