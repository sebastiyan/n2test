Tests = new Mongo.Collection("tests");

if (Meteor.isServer) {
  Meteor.publish("tests", function () {
      return Tests.find({});
  });
}
