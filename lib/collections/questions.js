Questions = new Mongo.Collection("questions");

if (Meteor.isServer) {
  Meteor.publish("questions", function () {
      return Tests.find({});
  });
}
