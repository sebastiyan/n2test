RightAnswers = new Mongo.Collection("rightAnswers");

if (Meteor.isServer) {
  Meteor.publish("rightAnswers", function () {
      return Tests.find({});
  });
}
