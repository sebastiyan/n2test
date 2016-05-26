var selectedGroups = [];

Template.subjectCreate.events({
    "change input": function(e){
        if (e.target.checked){
            selectedGroups.push(this._id);
        } else{
            selectedGroups.splice(selectedGroups.indexOf(this._id),1);
        }
    },

    "submit form": function(e){

        Subjects.insert({
            "name": $(".subject-name").val().trim(),
            "groupIds": selectedGroups,
            "creatorId": Meteor.userId()
        })

        $("textarea").val("");
        $("input").attr("checked", false);

        selectedGroups = []
        e.preventDefault();
        return false;
    }
})
Template.subjectCreate.helpers({
    groups: Groups.find()
})