Template.groupCreate.events({
    "submit form": function(e){
        sAlert.success('Ви успішно додали нову групу');
        Groups.insert({
            "name": $("#group").val().trim()
        })

        $("input").val("");

        e.preventDefault();
        return false;
    }
})
