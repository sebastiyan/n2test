Router.configure({
    layoutTemplate: 'layout'
})

Router.route("/", {
    name: "homePage"
})

Router.route("/group-list", {
    name: "groupList"
})